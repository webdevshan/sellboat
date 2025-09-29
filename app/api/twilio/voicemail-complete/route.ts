import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callSid = formData.get('CallSid')
    const recordingUrl = formData.get('RecordingUrl')
    const recordingDuration = formData.get('RecordingDuration')

    console.log('Voicemail completed:', {
      callSid,
      recordingUrl,
      duration: recordingDuration
    })

    // Here you would typically save the voicemail to your database
    // and send notifications to your team

    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Thank you for your message. We will contact you within 24 hours. Goodbye.')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling voicemail completion:', error)
    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-AU'
    }, 'Thank you for your message. Goodbye.')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
}
