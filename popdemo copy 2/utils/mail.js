const nodeMailer = require('nodemailer');
async function sendMail(recMailId, response){
let transporter = nodeMailer.createTransport({
    service:'gmail',

    auth: {
      user: '00xytyz00@gmail.com', // gmail userid
      pass: 'Nature<3', // gmail password
    },
  });
  const attachments =  [
    {   // utf-8 string as an attachment
        path:'/Users/amit/Documents/rocket.png',
        filename: 'myimage.png'


    }
];
  const mailOptions = {
      attachments:attachments,
    from: '00xytyz00@gmail.com', // sender address
    to: recMailId, // list of receivers
    subject: "Hello 🐜 ", // Subject line
    text: "Hello world?", // plain text body
    html: "<a href='https://www.brain-mentors.com'>Visit  this URL </a>", // html body
  };
  try{
  await transporter.sendMail(mailOptions);
  response.send('Mail Has Been Send');
  }
  catch(e){
      response.send('Error in Send Mail '+e);
      console.log(e);
  }
}
module.exports = sendMail;