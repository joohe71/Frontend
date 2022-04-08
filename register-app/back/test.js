const mongoose = require('mongoose')
const User = require('./model')
mongoose.connect("주소", (err) =>{
    console.log("MongoDB Connect")

    const newUser = new User({
        name: '강주희',
        id: "joohe11",
        pw: "1234$",
    })
    newUser.save()
        .then((v) => {
            console.log('성공')
        })
        .catch((e) => {
            console.log('실패')
        }); // MongoDB에 저장됨
})