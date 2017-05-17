import { Injectable } from '@angular/core';

@Injectable()
export class CinemaService {
  movies: Array<any> = [
   { id: 100, name: 'Andy', room: 1 },
   { id: 201, name: 'George', room: 2 },
   { id: 302, name: 'Max', room: 3 }
 ];
  constructor() { }

  getMovies():Array<any>{
    return this.movies;
  }

  getMovie(id):any{
    let tempMovie:any={};
    this.movies.forEach((movie)=>{
      if(movie.id === id){
        tempMovie = movie;
      }
    });
    return tempMovie;
  }
}


// Create a Cinema service.
// Add a Movies array of objects. Each object will have the following properties:
// id, number.
// title, string.
// poster, string.
// synopsis, string.
// genres, array of strings.
// year, number.
// director, string.
// actors, array of strings.
// hours, array of strings.
// room, number.
// Add a getMovies() method, that will return the array of movies.
// Add a getMovie(id) method, that receives a number id as a parameter and returns an object from the Movies array.
