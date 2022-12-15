const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

/*------------------SMTP Section Start-----------------------------*/

const smtp = nodemailer.createTransport({
  service: "mailtrap",
  host: "smtp.mailtrap.io",
  auth: {
    user: "27d7e4d32ffee1",
    pass: `09cf4d34751ba5`
  }
});
/*------------------SMTP Section Over-----------------------------*/

// setting server to use ejs template view engine
app.set("view engine", "ejs");
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

/*------------------Routing Started ------------------------*/

app.get('/', function (req, res) {
  res.render('index');
});

//function for email validation//
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

app.post('/send', function (req, res) {
  var mailOptions = {
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  }
  if (!isEmail(mailOptions.to)) {
    res.status(401)
      .send({
        message: "Invalid Email"
      });
  }
  console.log(mailOptions);
  smtp.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Email sent ");
      res.end("sent");
    }
  });
});

/*--------------------Routing Over----------------------------*/

// setting server to listen at port 8080
app.listen(8080, function () {
  console.log(" Server is live on port 8080 !!!");
});