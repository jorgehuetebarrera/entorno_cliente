import nodemailer from "nodemailer";

let transporter = null;

 export function init(config) {
 const smtpConfig = {
  host:config.host,
  port: config.port,
  secure: false,
 }

if(config.user){
  smtpConfig.auth ={
    user: config.user,
    pass: config.password,
    };
}

transporter = nodemailer.createTransport(smtpConfig);

transporter.verify(function(error, success){
  if (error){
    console.log(error);
  }else{
    console.log("SMTP ready")
  }
});
 }

 function sendMail(){}
 let info =  transporter.sendMail({
 from: 'its@me.com',
 to: "nose@cual.es",
 subject: "Mensaje de prueba",
 text: "Este es el texto",
 html: "<h1 style='color: blue'>Este es el HTML</h1>",
 });

 console.log("Message sent: %s", info.messageId);


