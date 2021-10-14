'use strict';



let  Nanber0fFilms ;

function start() {
    Nanber0fFilms = +prompt('сколько фильмов вы посмотрели', '');

    while(Nanber0fFilms == ' ' || Nanber0fFilms == null || isNaN (Nanber0fFilms)) {
        Nanber0fFilms = +prompt('сколько фильмов вы посмотрели', '');
    }
}
 start();

const personalMovieDB = {

    count : Nanber0fFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : true
};
function rememberMyFilms(){

    for(let i = 0; i<2;i++) {
        const  a = prompt('Один из последних просмотренных фильмов?', '') ,
               b = prompt('На сколько оцените его?', '');
    
         if(a != null && b != null && a != '' && b != '' && length < 50) {
            personalMovieDB.movies[a]=b;
            console.log('done');
         }else {
             console.log('error');
             i--;
         }
    }
}
//  rememberMyFilms();

 function detectPersonalLevel(){
    if (personalMovieDB.count <10) {
        console.log("Просмотрено довольно мало фильмов");
    }
   else if (personalMovieDB.count >=10 && personalMovieDB.count <30 ) {
       console.log ("Вы классический зритель");
   
   }else if (personalMovieDB.count >=30) {
       console.log("Вы киноман");
   
   }else {
       console.log('error');
   }
 }

// detectPersonalLevel();

function showMyDB(hidden) {
    if (hidden){
        console.log(personalMovieDB);
    }
}
 showMyDB(personalMovieDB.privat);

 function writeYourGenres() {
     for (let i = 1; i <= 3; i ++ ) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `)
     }
 }
writeYourGenres();





