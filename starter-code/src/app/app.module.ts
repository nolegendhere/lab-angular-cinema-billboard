import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// routes
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { CinemaService } from './services/cinema.service';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
//routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routes
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Create two components:
// MyHomeComponent
// MyMovieComponent
// Create the different routes to show each component:
// /home, to show MyHomeComponent
// /movie/:id, to show MyMovieComponent
// Add <router-outlet></router-outlet> tag to app.component.html file

/////////////////////////////////
// Load the movies from the Cinema service, with the getMovies() method we've previously defined.
// Display the movies on the /home page.
// Create a link for each movie that directs the user to /movie/:id.
// Style the page.
