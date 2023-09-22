var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'pppprasanth@gmail.com',
        pass:'123456789'
    }
})


var options = {
    from:'pppprasanth@gmail.com',
    to:'pympras@gmail.com',
    subject:'Testing Mail',
    text:'Thats easy to use'
}

transporter.sendMail(options,(err,info)=>{
    if (err){
        console.log(err);

    }else{
        console.log('Email has been sent successfully + info.response')
    }

})