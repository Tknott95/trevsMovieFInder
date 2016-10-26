import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule }   from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
