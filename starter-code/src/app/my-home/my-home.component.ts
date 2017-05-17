import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  moviesList: Array<any> = []
  constructor(private movies: CinemaService) {
    this.moviesList=this.movies.getMovies();
  }

  ngOnInit() {
  }

}


// Create two components:
// MyHomeComponent
// MyMovieComponent
// Create the different routes to show each component:
// /home, to show MyHomeComponent
// /movie/:id, to show MyMovieComponent
// Add <router-outlet></router-outlet> tag to app.component.html file
////////////////////////////////////
// Load the movies from the Cinema service, with the getMovies() method we've previously defined.
// Display the movies on the /home page.
// Create a link for each movie that directs the user to /movie/:id.
// Style the page.
