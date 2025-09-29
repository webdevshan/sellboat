import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callSid = formData.get('CallSid')
    const from = formData.get('From')
    const to = formData.get('To')

    console.log('Outgoing call initiated:', { callSid, from, to })

    const twiml = new twilio.twiml.VoiceResponse()

    // Play a greeting message
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Hello! This is a call from Exit Your Boat Share. We help boat share owners get cash for their shares quickly and discreetly.')

    // Play additional information
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'If you are interested in selling your boat share, please stay on the line and we will connect you with our team.')

    // Wait for 5 seconds to allow the person to hang up if not interested
    twiml.pause({ length: 5 })

    // Play a message about connecting
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Please hold while we connect you with our team.')

    // For now, just play a message and hang up
    // In a real implementation, you would connect to a live agent or voicemail
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Thank you for your interest. Our team will contact you shortly. Have a great day!')

    twiml.hangup()

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling outgoing call:', error)
    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Sorry, we are experiencing technical difficulties. Please try again later.')
    twiml.hangup()

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
}
