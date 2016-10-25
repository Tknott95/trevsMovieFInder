import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    
    apikey: string;
    
    
    constructor(private _jsonp: Jsonp){
        this.apikey = 'ac7ca767d7e69df0b7981a908a39d499';
        console.log('MovieService Initialized..........');
    }

    getPopular() {
      return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
        .map(res => res.json());
    }

    getTheaters() {
      return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-26-15&primary_release_date.lte=2016-10-30&api_key='+this.apikey)
        .map(res => res.json());
    }


}
