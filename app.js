 var students =[
    {
        id: 1,
        name: "umair",
        favouriteSubject: "Math",
        score: 55,
    },
    {
        id: 2,
        name: "habib",
        favouriteSubject: "science",
        score: 56,
    },
    {
        id: 3,
        name: "Asim",
        favouriteSubject: "English",
        score: 86,
    },
    {
        id: 4,
        name: "Faiz",
        favouriteSubject: "English",
        score: 80,
    },
    {
        id: 6,
        name: "Hashim",
        favouriteSubject: "History",
        score: 78,
    },
    {
        id: 7,
        name: "Abu Bakir",
        favouriteSubject: "Math",
        score: 99,
    },
    {
        id: 7,
        name: "Abu Bakir",
        favouriteSubject: "Math",
        score: 99,
    },
    {
        id: 7,
        name: "Abu Bakir",
        favouriteSubject: "Math",
        score: 99,
    },
 ]
// const survey = students.reduce(function(prv, curr){
//     if (prv.hasOwnProperty(curr.favouriteSubject)){
//         prv[curr.favouriteSubject]= prv[curr.favouriteSubject] +1
//         return prv
//     }else{
//         prv[curr.favouriteSubject] = 1;
//     }
//     return prv
// },{});
// console.log(survey);
const averageSum = students.reduce(function(prv, curr){
   return prv + curr.score / students.length;
},0);
console.log(averageSum + "%");

