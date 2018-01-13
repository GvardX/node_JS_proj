const nodemailer = require('nodemailer');
const config = require('../config/config.json')

module.exports.getWorksPage = (req, res, next) => {
  res.render('pages/my-works', { 
    title: 'Express',
    msg: req.query.msg,
   });
};

module.exports.getContact = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.comment) {
    return res.redirect("/my-works?msg=Необходимо ввести все данные")
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req.body.comment.trim().slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return res.redirect('/my-works?msg=При отправке письма произошла ошибка');
    }
    res.redirect('/my-works?msg=Письмо успешно отправлено');
  });
};