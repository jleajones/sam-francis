import sgMail from '@sendgrid/mail';

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, rsvp, message } = req.body;

  const content = {
    to: 'samuelfrancis1119@gmail.com',
    from: 'samuelfrancis1119@gmail.com',
    subject: `Wedding RSVP from - ${email}`,
    text: `${name}`,
    html: `<h5>Primary Guest: ${name}  (${email})</h5> <p> RSVP Status: ${rsvp}</h5><p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send(true)
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
