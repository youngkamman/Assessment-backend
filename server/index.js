const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortune} = require('./controller')
const {getJigsaw} = require('./controller')
const {getTrojan} = require('./controller')
const {getPeople,deletePeople,createPeople,updatePeople} = require("./controller")
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/jigsaw", getJigsaw);
app.get("/api/trojan",getTrojan);
app.get(`/api/people`,getPeople);
app.post(`/api/people`, createPeople);
app.delete(`/api/people/:id`,deletePeople) ;
app.put(`/api/people/:id`,updatePeople);
app.listen(4000, () => console.log("Server running on 4000"));
