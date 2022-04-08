const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model");
const cors = require("cors");

// cors error 해결하기 위한 코드
const corsOptions = {
  origin: "*",
  credential: true,
}
app.use(cors(corsOptions))


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send("안녕하세요, 회원가입 폼 구현 서버입니다.")
})

app.get('/userlist', (req, res) => {
  User.find((err, user) => {
    if (err) return res.status(500).send({error: 'database failure'})
    res.json(user)
  })
})

app.post("/register", (req, res) => {
  const { name, id, pw } = req.body;
  const newUser = new User({
    name,
    id,
    pw,
  });

  newUser
    .save()
    .then((v) => {
      res.json(newUser)
    })
    .catch((e) => {
      console.log(e);
      res.send({
        status: "회원가입 실패",
      });
    });
});

app.listen(8080, () => {
  console.log("8080 port listen")
  mongoose.connect("주소", (err) =>{
    console.log("MongoDB Connect")
  })
})