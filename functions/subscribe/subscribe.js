const fetch = require('node-fetch')
const base64 = require('base-64')

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const errorGen = (msg) => ({ statusCode: 500, body: msg })
  try {
    const { email } = JSON.parse(event.body)
    if (!email) {
      return errorGen('Missing Email')
    }
    const subscriber = {
      email_address: email,
      status: 'subscribed',
    }
    const creds = `any:${process.env.MC_API_KEY}`
    const response = await fetch(
      `https://${process.env.MC_DATA_CENTER}.api.mailchimp.com/3.0/lists/${process.env.MC_AUDIENCE_ID}/members/`,
      {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `Basic ${base64.encode(creds)}`,
        },
        body: JSON.stringify(subscriber),
      },
    )
    const data = await response.json()
    const statusCode = response.ok ? 200 : data.status
    const body = JSON.stringify({ title: data.title, detail: data.detail, statusCode })
    return { statusCode, body }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
