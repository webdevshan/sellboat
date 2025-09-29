'use client'

import { useState, useEffect, useRef } from 'react'
import { Device } from '@twilio/voice-sdk'
import { Phone, PhoneCall, PhoneOff, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

interface CallState {
  device: Device | null
  isConnected: boolean
  isConnecting: boolean
  call: any
  isMuted: boolean
  isSpeakerOn: boolean
  incomingCall: any
}

export default function CallInterface() {
  const [callState, setCallState] = useState<CallState>({
    device: null,
    isConnected: false,
    isConnecting: false,
    call: null,
    isMuted: false,
    isSpeakerOn: false,
    incomingCall: null
  })

  const [phoneNumber, setPhoneNumber] = useState('')
  const [status, setStatus] = useState('Disconnected')
  const [error, setError] = useState('')

  const deviceRef = useRef<Device | null>(null)

  useEffect(() => {
    initializeDevice()

    return () => {
      if (deviceRef.current) {
        deviceRef.current.destroy()
      }
    }
  }, [])

  const initializeDevice = async () => {
    try {
      setStatus('Initializing...')
      setError('')

      console.log('Initializing Twilio device...')

      // Get access token
      const response = await fetch('/api/twilio/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identity: `user_${Date.now()}`
        })
      })

      if (!response.ok) {
        throw new Error(`Token request failed: ${response.status} ${response.statusText}`)
      }

      const { token, error: tokenError } = await response.json()

      if (tokenError) {
        throw new Error(`Token error: ${tokenError}`)
      }

      if (!token) {
        throw new Error('Failed to get access token')
      }

      console.log('Token received, initializing device...')

      // Initialize device
      const device = new Device(token, {
        logLevel: 'debug',
        codecPreferences: ['opus' as any, 'pcmu' as any]
      })

      deviceRef.current = device

      // Set up event listeners
      device.on('registered', () => {
        console.log('Device registered successfully')
        setStatus('Ready to make calls')
        setCallState(prev => ({ ...prev, device }))
      })

      device.on('error', (error) => {
        console.error('Device error:', error)
        setError(`Device error: ${error.message}`)
        setStatus('Error')
      })

      device.on('incoming', (call) => {
        console.log('Incoming call:', call)
        setCallState(prev => ({ ...prev, incomingCall: call }))
        setStatus('Incoming call...')
      })

      console.log('Registering device...')
      device.register()
    } catch (error) {
      console.error('Error initializing device:', error)
      setError(`Failed to initialize call system: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setStatus('Error')
    }
  }

  const makeCall = async () => {
    if (!deviceRef.current || !phoneNumber) return

    try {
      setCallState(prev => ({ ...prev, isConnecting: true }))
      setStatus('Connecting...')
      setError('')

      console.log('Making call to:', phoneNumber)
      console.log('Device state:', deviceRef.current.state)

      const call = await deviceRef.current.connect({
        params: {
          To: phoneNumber
        }
      })

      console.log('Call initiated:', call)

      setCallState(prev => ({
        ...prev,
        call,
        isConnecting: false,
        isConnected: true
      }))
      setStatus('Connected')

      // Set up call event listeners
      call.on('disconnect', () => {
        console.log('Call disconnected')
        setCallState(prev => ({
          ...prev,
          call: null,
          isConnected: false
        }))
        setStatus('Call ended')
      })

      call.on('error', (error) => {
        console.error('Call error:', error)
        setError(`Call failed: ${error.message}`)
        setCallState(prev => ({
          ...prev,
          call: null,
          isConnected: false
        }))
        setStatus('Call failed')
      })

    } catch (error) {
      console.error('Error making call:', error)
      setError(`Failed to make call: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setCallState(prev => ({ ...prev, isConnecting: false }))
      setStatus('Call failed')
    }
  }

  const answerCall = () => {
    if (callState.incomingCall) {
      callState.incomingCall.accept()
      setCallState(prev => ({
        ...prev,
        call: prev.incomingCall,
        incomingCall: null,
        isConnected: true
      }))
      setStatus('Connected')
    }
  }

  const rejectCall = () => {
    if (callState.incomingCall) {
      callState.incomingCall.reject()
      setCallState(prev => ({
        ...prev,
        incomingCall: null
      }))
      setStatus('Call rejected')
    }
  }

  const endCall = () => {
    if (callState.call) {
      callState.call.disconnect()
    }
  }

  const toggleMute = () => {
    if (callState.call) {
      if (callState.isMuted) {
        callState.call.unmute()
      } else {
        callState.call.mute()
      }
      setCallState(prev => ({ ...prev, isMuted: !prev.isMuted }))
    }
  }

  const toggleSpeaker = () => {
    setCallState(prev => ({ ...prev, isSpeakerOn: !prev.isSpeakerOn }))
    // Note: Speaker control would need additional implementation
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Call Interface</h2>
        <p className="text-sm text-gray-600">Status: {status}</p>
        {error && (
          <p className="text-sm text-red-600 mt-2">{error}</p>
        )}
      </div>

      {/* Incoming Call Alert */}
      {callState.incomingCall && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 font-medium">Incoming Call</p>
          <p className="text-blue-600 text-sm">
            From: {callState.incomingCall.parameters.From}
          </p>
          <div className="flex space-x-2 mt-3">
            <button
              onClick={answerCall}
              className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Phone className="h-4 w-4" />
              <span>Answer</span>
            </button>
            <button
              onClick={rejectCall}
              className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              <PhoneOff className="h-4 w-4" />
              <span>Reject</span>
            </button>
          </div>
        </div>
      )}

      {/* Phone Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          disabled={callState.isConnected || callState.isConnecting}
        />
      </div>

      {/* Call Controls */}
      <div className="flex justify-center space-x-4">
        {!callState.isConnected ? (
          <button
            onClick={makeCall}
            disabled={!phoneNumber || callState.isConnecting || !callState.device || status === 'Error' || status === 'Initializing...'}
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PhoneCall className="h-5 w-5" />
            <span>
              {callState.isConnecting ? 'Connecting...' :
               status === 'Initializing...' ? 'Initializing...' :
               status === 'Error' ? 'Error' :
               !callState.device ? 'Not Ready' :
               'Call'}
            </span>
          </button>
        ) : (
          <>
            <button
              onClick={toggleMute}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                callState.isMuted
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {callState.isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              <span>{callState.isMuted ? 'Unmute' : 'Mute'}</span>
            </button>

            <button
              onClick={toggleSpeaker}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                callState.isSpeakerOn
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {callState.isSpeakerOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              <span>Speaker</span>
            </button>

            <button
              onClick={endCall}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              <PhoneOff className="h-5 w-5" />
              <span>End</span>
            </button>
          </>
        )}
      </div>

      {/* Retry Button for Errors */}
      {status === 'Error' && (
        <div className="mt-4 text-center">
          <button
            onClick={initializeDevice}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry Initialization
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-sm text-gray-600">
        <p className="font-medium mb-2">Instructions:</p>
        <ul className="space-y-1">
          <li>• Enter a phone number to make outgoing calls</li>
          <li>• Incoming calls will appear automatically</li>
          <li>• Use mute/unmute during calls</li>
          <li>• Speaker control for audio output</li>
        </ul>
      </div>
    </div>
  )
}
