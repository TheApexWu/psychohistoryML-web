export async function POST(request) {
  const { email } = await request.json()

  const response = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`,
    },
    body: JSON.stringify({ email }),
  })

  if (response.ok) {
    return Response.json({ success: true })
  } else {
    const error = await response.json()
    return Response.json({ error: error.detail || 'Subscription failed' }, { status: 400 })
  }
}