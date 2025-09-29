import { NextRequest, NextResponse } from 'next/server'
import { VoiceResponse } from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const digits = formData.get('Digits')
    const callSid = formData.get('CallSid')

    console.log('User input:', { digits, callSid })

    const twiml = new VoiceResponse()

    switch (digits) {
      case '1':
        // Connect to team
        twiml.say({
          voice: 'alice',
          language: 'en-AU'
        }, 'Please hold while we connect you with our team.')

        // In a real implementation, you would dial a specific number or queue
        // For now, we'll just say we're connecting
        twiml.say({
          voice: 'alice',
          language: 'en-AU'
        }, 'Our team is currently busy. Please leave a message and we will call you back within 24 hours.')
        twiml.redirect('/api/twilio/voicemail')
        break

      case '2':
        // Go to voicemail
        twiml.redirect('/api/twilio/voicemail')
        break

      case '3':
        // More information
        twiml.say({
          voice: 'alice',
          language: 'en-AU'
        }, 'We buy boat syndicate shares for cash. No brokers, no syndicate exit fees, no hassles. We provide fair market valuations and can complete the sale within 7 days. All communications are completely confidential.')

        twiml.say({
          voice: 'alice',
          language: 'en-AU'
        }, 'Press 1 to speak with our team, or press 2 to leave a message.')

        const gather = twiml.gather({
          numDigits: 1,
          timeout: 10,
          action: '/api/twilio/handle-input'
        })

        twiml.redirect('/api/twilio/voicemail')
        break

      default:
        twiml.say({
          voice: 'alice',
          language: 'en-AU'
        }, 'Invalid option. Please try again.')
        twiml.redirect('/api/twilio/incoming')
        break
    }

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling user input:', error)
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
