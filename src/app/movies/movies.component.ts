import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private _movieService: MovieService) { }

    getPopular() {
      return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc')
        .map(res => res.json());
    }

    getTheaters() {
      return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-26-15&primary_release_date.lte=2016-10-30')
        .map(res => res.json());
    }

}
