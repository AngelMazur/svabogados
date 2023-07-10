export default async function handler (req, res) {
  const sgMail = require('@sendgrid/mail')

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, subject, message } = req.body

  const emailHtmlContent = `
    <h2>SV Abogados Web: ${subject}</h2>
    <p>${name} (${email})</p>
    <p>${message}</p>
  `

  const emailConfig = {
    to: ['svabogados@hotmail.com'],
    // A verified sender is mandatory
    from: {
      email: 'svabogados@hotmail.com',
      name: 'SV Abogados Web'
    },
    subject: `SV Abogados Web: ${subject}`,
    content: [
      {
        type: 'text/plain',
        value: message
      },
      {
        type: 'text/html',
        value: emailHtmlContent
      }
    ]
  }

  try {
    await sgMail.send(emailConfig)

    res.status(200).json({
      status: 'OK',
      message: 'Email sent'
    })
  } catch (error) {
    res.status(200).json({
      status: 'KO',
      message: error
    })
  }
}
