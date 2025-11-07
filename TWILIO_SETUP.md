# Twilio Voice Integration Setup

This project includes Twilio Voice SDK integration for making and receiving calls.

## Setup Instructions

### 1. Supabase Setup

1. Create a new Supabase project
2. Run the SQL scripts to create the required tables:
   - `sql/contact_submissions.sql` - for boat owner exit submissions
   - `sql/referral_submissions.sql` - for marina staff/skipper referrals
3. Set up authentication in Supabase dashboard
4. Create an admin user using the script in `scripts/setup-admin.js`

### 2. Twilio Setup

1. Create a Twilio account and get your credentials
2. Create a TwiML Application in Twilio Console
3. Configure webhook URLs in Twilio Console:
   - **Voice URL**: `https://yourdomain.com/api/twilio/incoming`
   - **Voice Fallback URL**: `https://yourdomain.com/api/twilio/incoming`
   - **Status Callback URL**: `https://yourdomain.com/api/twilio/status` (optional)
4. Configure environment variables

### 3. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_API_KEY=your_twilio_api_key
TWILIO_API_SECRET=your_twilio_api_secret
TWILIO_TWIML_APP_SID=your_twiml_app_sid
```

### 4. Features Implemented

#### Supabase Authentication & Admin Dashboard

- ✅ Admin user authentication
- ✅ Contact form submissions saved to database
- ✅ Referral submissions saved to database
- ✅ Admin dashboard to view all submissions
- ✅ Protected admin routes with middleware

#### Twilio Voice SDK Integration

- ✅ Access token generation API
- ✅ TwiML webhooks for incoming calls
- ✅ Call interface component for making/receiving calls
- ✅ Voicemail handling
- ✅ Call controls (mute, speaker, end call)

### 5. Usage

1. **Admin Login**: Visit `/secure-access/admin-portal` to access the admin dashboard
2. **Contact Submissions**: View all form submissions at `/admin/dashboard`
3. **Call Interface**: Access the call interface at `/admin/calls`
4. **Referral Program**: Marina staff and skippers can submit referrals for $1,000 commission

### 6. Twilio Webhook Configuration

#### TwiML Application Setup

1. **Go to Twilio Console** → **Phone Numbers** → **Manage** → **TwiML Apps**
2. **Create a new TwiML Application** with these settings:

**Configuration:**

- **Friendly Name**: `Exit Your Boat Share Voice App`
- **Voice URL**: `https://yourdomain.com/api/twilio/incoming`
- **Voice Method**: `POST`
- **Voice Fallback URL**: `https://yourdomain.com/api/twilio/incoming`
- **Voice Fallback Method**: `POST`
- **Status Callback URL**: `https://yourdomain.com/api/twilio/status` (optional)
- **Status Callback Method**: `POST`

#### Phone Number Configuration

1. **Go to Twilio Console** → **Phone Numbers** → **Manage** → **Active Numbers**
2. **Click on your Twilio phone number**
3. **Configure Voice settings:**
   - **Configure with**: `TwiML App`
   - **TwiML App**: Select the app you created above

#### Webhook Endpoints

- `/api/twilio/incoming` - Handles incoming calls
- `/api/twilio/outgoing` - Handles outgoing calls (for TwiML app)
- `/api/twilio/handle-input` - Processes user input during calls
- `/api/twilio/voicemail` - Handles voicemail recording
- `/api/twilio/voicemail-complete` - Processes completed voicemails
- `/api/twilio/token` - Generates access tokens for the Voice SDK

### 7. Default Admin Credentials

After running the setup script, change the default password after first login!
