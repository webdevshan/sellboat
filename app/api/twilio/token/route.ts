import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const { identity } = await request.json()

    if (!identity) {
      return NextResponse.json({ error: 'Identity is required' }, { status: 400 })
    }

    // Check if all required environment variables are present
    const requiredEnvVars = {
      TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY: process.env.TWILIO_API_KEY,
      TWILIO_API_SECRET: process.env.TWILIO_API_SECRET,
      TWILIO_TWIML_APP_SID: process.env.TWILIO_TWIML_APP_SID,
    }

    const missingVars = Object.entries(requiredEnvVars)
      .filter(([key, value]) => !value)
      .map(([key]) => key)

    if (missingVars.length > 0) {
      console.error('Missing Twilio environment variables:', missingVars)
      return NextResponse.json(
        { error: `Missing environment variables: ${missingVars.join(', ')}` },
        { status: 500 }
      )
    }

    console.log('Creating Twilio access token for identity:', identity)

    // Create access token
    const accessToken = new twilio.jwt.AccessToken(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_API_KEY!,
      process.env.TWILIO_API_SECRET!,
      { identity }
    )

    // Create voice grant
    const voiceGrant = new twilio.jwt.AccessToken.VoiceGrant({
      outgoingApplicationSid: process.env.TWILIO_TWIML_APP_SID!,
      incomingAllow: true,
    })

    accessToken.addGrant(voiceGrant)

    const token = accessToken.toJwt()
    console.log('Successfully generated Twilio token')

    return NextResponse.json({
      token,
      identity: identity,
    })
  } catch (error) {
    console.error('Error generating access token:', error)
    return NextResponse.json(
      { error: `Failed to generate access token: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
