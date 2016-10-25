import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    
    apikey: string;
    
    
    constructor(private _jsonp: Jsonp){
        this.apikey = 'ac7ca767d7e69df0b7981a908a39d499';
        console.log(this.apikey);
    }
}
