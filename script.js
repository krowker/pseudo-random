let users = [
   {name: '1', atrChance: 100},
   {name: '2', atrChance: 100},
   {name: '3', atrChance: 100},
   {name: '4', atrChance: 100},
   {name: '5', atrChance: 100},
   {name: '6', atrChance: 100},
   {name: '7', atrChance: 100},
   {name: '8', atrChance: 100},
   {name: '9', atrChance: 100},
   {name: '10', atrChance: 100},
   {name: '11', atrChance: 100},
   {name: '12', atrChance: 100},
   {name: '13', atrChance: 100},
   {name: '14', atrChance: 100},
]

// for (let i = 0; i <users.length; i++) {
//    console.log(users[i]);
// }

function decAtrChance (index) {
    users[index].atrChance = users[index].atrChance - 10

    setTimeout(()=> incAtrChance(index), 1000)
}

function incAtrChance (index) {
    users[index].atrChance = users[index].atrChance + 5
    console.log(users[index].atrChance);
}

function getRandomUser () {
    min = 0
    max = users.length
    decAtr = 10
    incAtr = 5

    index = Math.floor(Math.random()*(max-min)+min);
    compareAtr = Math.floor(Math.random()*(101-0)+0);
    
    console.log(index);
    console.log(users[index]);

    decAtrChance (index)
    
    console.log(users[index].atrChance);     
    console.log('compare is '+compareAtr);
}

getRandomUser()