module.exports.sendWelcomeMail = function(obj,OTPcode) {
    sails.hooks.email.send(
    "OTP to login"+ " - " + OTPcode, 
    {
    Name: obj.name
    },
    {
    to: obj.email,
    subject: "Authentication"
    },
    function(err) {console.log(err || "Mail Sent!");}
    )
   }