const people = require(`./db.json`);
let globalID = 5;






module.exports = {



    getJigsaw: (req, res) => {
        const jigsaw = ["If You're Good At Anticipating The Human Mind, It Leaves Nothing To Chance.","I Want To Play A Game.","Game Over.","How You Play The Cards You're Dealt Is All That Matters."
    ];
        let randomIndex = Math.floor(Math.random() * jigsaw.length);
        let randomJigsaw = jigsaw[randomIndex];

        res.status(200).send(randomJigsaw);
    },


    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["you are going to be rich","you will get a promotion","you have good news coming","you have a random good thing about to happen"];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },
    getTrojan: (req, res) => {
        const trojan = ["your pc catches a charlie horse and squirms in agony","your pc blue screens and you smell smoke","you hear a notification from your phone its your bank your bank account has been emptied","your pc lets out a loud yelp"];
        let randomIndex = Math.floor(Math.random() * trojan.length);
        let randomTrojan = trojan[randomIndex];

        res.status(200).send(randomTrojan);
    },
   


    getPeople : (req, res) => {
        res.status(200).send(people);
       
      },
      deletePeople : (req,res) => {
          
              let {id} = req.params
              let index = people.findIndex(people => +people.id === +id)
              if(index === -1){
                  res.status(400).send("user not found")
              } else {
                  people.splice(index,1)
                  res.status(200).send(people)
              }
          },
      
       createPeople : (req,res) => {
          const { name, age, gender } = req.body;
      let newPeople = {
        id: globalID,
        name,
        age,
        gender,
      };
      people.push(newPeople);
      res.status(200).send(people);
      globalID++;
      },
      updatePeople : (req,res) => {
          let {id} = req.params
      let {type} = req.body
      let index = people.findIndex(people => +people.id === +id)
      if (people[index].age <= 1 && type === 'minus') {
          people[index].age = 0
          res.status(200).send(people)
      } else if (type === 'plus') {
          people[index].age++
          res.status(200).send(people)
      } else if (type === 'minus') {
          people[index].age--
          res.status(200).send(people)
      } else {
          res.sendStatus(400)
      }
  }

}


