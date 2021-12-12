let users = [
   {name: '1', atrChance: 100},
   {name: '2', atrChance: 100},
//    {name: '3', atrChance: 100},
//    {name: '4', atrChance: 100},
//    {name: '5', atrChance: 100},
//    {name: '6', atrChance: 100},
//    {name: '7', atrChance: 100},
//    {name: '8', atrChance: 100},
//    {name: '9', atrChance: 100},
//    {name: '10', atrChance: 100},
//    {name: '11', atrChance: 100},
//    {name: '12', atrChance: 100},
//    {name: '13', atrChance: 100},
//    {name: '14', atrChance: 100},
]

// for (let i = 0; i <users.length; i++) {
//    console.log(users[i]);
// }
var firstInc

function decAtrChance (index) {
    users[index].atrChance = users[index].atrChance - 10

    stopTimeout(firstInc)
    firstInc = setTimeout(()=> incAtrChance(index), 6000)
}

function stopTimeout (timoutID) {
    clearTimeout(timoutID)
}

function incAtrChance (index) {
    users[index].atrChance = users[index].atrChance + 10
    console.log('after inc '+users[index].atrChance);
}

function getRandomUser () {
    min = 0
    max = users.length
    decAtr = 10
    incAtr = 5

    function getCompAtr ()  {
        compareAtr = Math.floor(Math.random()*(101-0)+0);
        return compareAtr
    }
    getCompAtr()

    function getIndex() {
        index = Math.floor(Math.random()*(max-min)+min);
        return index
    }
    getIndex()

    while (compareAtr >= users[index].atrChance) {
        getCompAtr()
        getIndex()
    }

    console.log("inex is "+index);
    console.log(users[index]);

    decAtrChance (index)
    
    console.log("atrChanse after dec "+users[index].atrChance);     
    console.log('compare is '+compareAtr);
}