import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

    constructor(private _movieService: MovieService) { 
        this._movieService.getPopular().subscribe(res => {
          //console.log(res.results);
        });

        this._movieService.getTheaters().subscribe(res => {
          console.log(res.results);
        });
    }
}
