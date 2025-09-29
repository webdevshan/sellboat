const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseServiceKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is required')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createAdminUser() {
  const adminEmail = 'admin@exityourboatshare.com.au'
  const adminPassword = 'Admin123!'

  try {
    // Create the admin user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
    })

    if (authError) {
      console.error('Error creating admin user:', authError)
      return
    }

    console.log('Admin user created successfully!')
    console.log('Email:', adminEmail)
    console.log('Password:', adminPassword)
    console.log('User ID:', authData.user?.id)

    // Create contact_submissions table if it doesn't exist
    const { error: tableError } = await supabase.rpc('create_contact_submissions_table')

    if (tableError) {
      console.log('Table might already exist or there was an error:', tableError.message)
    } else {
      console.log('Contact submissions table created successfully!')
    }

  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

createAdminUser()
