import { NextRequest, NextResponse } from 'next/server'
import { VoiceResponse } from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callSid = formData.get('CallSid')
    const from = formData.get('From')

    console.log('Voicemail request:', { callSid, from })

    const twiml = new VoiceResponse()

    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Please leave your name, phone number, syndicate details, and why you want to sell your boat share. We will call you back within 24 hours.')

    // Record voicemail
    twiml.record({
      maxLength: 300, // 5 minutes max
      timeout: 10,
      action: '/api/twilio/voicemail-complete',
      recordingStatusCallback: '/api/twilio/recording-status'
    })

    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Thank you for your message. We will contact you soon. Goodbye.')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling voicemail:', error)
    const twiml = new VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Sorry, we are experiencing technical difficulties. Please try again later.')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
}
