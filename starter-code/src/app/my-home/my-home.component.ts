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
    console.log(this.moviesList[0].title);
  }

  ngOnInit() {
  }

}
