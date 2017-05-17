import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId:number
  movie: any;
  constructor(private router: Router, private route: ActivatedRoute,private movies: CinemaService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = Number(params['id']));
    this.movie = this.movies.getMovie(this.movieId);
  }

  goHome() {
    this.router.navigate(['home']);
  }

}


// Create two components:
// MyHomeComponent
// MyMovieComponent
// Create the different routes to show each component:
// /home, to show MyHomeComponent
// /movie/:id, to show MyMovieComponent
// Add <router-outlet></router-outlet> tag to app.component.html file
///////////////////////////////////
// Load the movies from the Cinema service, with the getMovies() method we've previously defined.
// Display the movies on the /home page.
// Create a link for each movie that directs the user to /movie/:id.
// Style the page.
