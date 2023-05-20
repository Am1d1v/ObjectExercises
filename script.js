

/*

const myCity = {
    city: "cityName",
    info: {
        country: "countryName"
    }
}

*/

//console.log(myCity.info["country"]);
//delete myCity.city;
//console.log(myCity);
/*

myCity.popular = true;
console.log(myCity);

let another = myCity;
another.some = "Weather"
console.log(another);
console.log(myCity);

delete myCity.some;
console.log(myCity);
console.log(myCity.some);

*/

/*

myCity["popular"] = true;
console.log(myCity);

const countryName = "country";
myCity[countryName] = "USA";
console.log(myCity);

*/

/*

const name = "Dima";
const age = "AgeNumber"

/*

const UserProfile = {
    name: name,
    age: age,
}

*/

/*
const UserProfile = {
    name,
    age
}

console.log(UserProfile);


const myCity = {
    city: "cityName",
    cityGreeting(){
        console.log("Greeting");
    }
}

myCity.cityGreeting();

*/

//==================================== JSON ========================================

const post = {
    title: "myPost",
    likesNumber: 5
}

JSON.stringify(post);
const postStringified = JSON.stringify(post);
JSON.parse(postStringified);