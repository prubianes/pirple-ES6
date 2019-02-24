/*
 * THis file explains all the ES6 datatypes for the first Pirple ES6 HW
 * author: Pablo Rubianes
 */

// String Datatype
var artist = "The Beatles";
var songName = "Yesterday";
var genre = "Baroque pop";
var albumName = "Help!";
var producer = "George Martin";

// Logging the strings
console.log(artist);
console.log(songName);
console.log(genre);
console.log(producer);

 // Numbers Datatype
var releaseYear = 1965;

// Logging the Numbers
console.log(releaseYear);

// Array Datatype
var songwriter = ["Lennon", "McCartney"];

// Logging Array
console.log(songwriter);

// Boolean Datatype
var wasNumber1US = true;
var wasNumber1UK = false;

console.log(wasNumber1US);
console.log(wasNumber1US);

// Object Datatype
function newSong(artist, songName, genre, albumName, producer, releaseYear, songwriter, wasNumber1UK, wasNumber1US){
    this.artist = artist;
    this.songName = songName;
    this.genre = genre;
    this.albumName = albumName;
    this.producer = producer;
    this.releaseYear = releaseYear;
    this.songwriter = songwriter;
    this.wasNumber1UK = wasNumber1UK;
    this.wasNumber1US = wasNumber1US;
}

// Creating a newSong object
var mySong = newSong(artist, songName, genre, albumName, producer, releaseYear, songwriter, wasNumber1UK, wasNumber1US);

// Logging the song
console.log(mySong);