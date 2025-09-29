import { NextRequest, NextResponse } from 'next/server'
import { VoiceResponse } from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callSid = formData.get('CallSid')
    const from = formData.get('From')
    const to = formData.get('To')

    console.log('Incoming call:', { callSid, from, to })

    const twiml = new VoiceResponse()

    // Greet the caller
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Hello! Thank you for calling Exit Your Boat Share. We help boat share owners get cash for their shares quickly and discreetly.')

    // Provide options
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Press 1 to speak with our team about selling your boat share. Press 2 to leave a message. Press 3 to hear more about our services.')

    // Gather user input
    const gather = twiml.gather({
      numDigits: 1,
      timeout: 10,
      action: '/api/twilio/handle-input'
    })

    // If no input, redirect to voicemail
    twiml.redirect('/api/twilio/voicemail')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling incoming call:', error)
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
