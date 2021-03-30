import sgMail from '@sendgrid/mail';

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, rsvp, guestName, guestEmail, guestRsvp, message } = req.body;

  const content = {
    to: 'samuelfrancis1119@gmail.com',
    from: 'samuelfrancis1119@gmail.com',
    subject: `Wedding RSVP from - ${email}`,
    text: `${name} ${guestName ? `| ${guestName}` : ''}`,
    html: `<h5>Primary Guest: ${name}  (${email})</h5> <p> RSVP Status: ${rsvp}</h5>
      ${guestName.length > 1 ? `<p>Additional Guest: ${guestName} (${guestEmail}) | RSVP Status ${guestRsvp}</p>` : ''}
    <p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send(true)
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
