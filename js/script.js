const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

// for (let i = 0; i < 2; i++) {//первый способ
//     const film = prompt("Один из последних просмотренных фильмов?", "");
//     const rating = prompt("На сколько оцените его?", "");
//     if (film == null || rating == null) {
//         i--;
//     } else if (film == '' || rating == '' || film.length > 50) {
//         i--;
//     } else {
//         personalMovieDB.movies[film] = rating;
//     }
// }

//console.log(personalMovieDB.movies);


//первая часть задания 
function showFirstMessage() {
    console.log("Hellow World");
}

showFirstMessage();

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hellow World");
console.log(num);

function calc(a, b) {
    return (a + b);
}



const logger = function () {
    console.log("Hellow");
};

logger();

const calcul = (a, b) => a + b;

const str = "test";
const arr = [1, 2, 3]

console.log(str[2]);
console.log(str.toUpperCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));

const numm = 12.2;
console.log(Math.round(numm));
//вторая часть задания
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        const genre = prompt('Ваш любимый жанр под номером ' + (i + 1))
        personalMovieDB.genres[i] = genre;
    }
    console.log(personalMovieDB.genres);
}
