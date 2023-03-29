import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { movie } from 'src/app/interfaces/populars';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  URL_API = 'https://api.themoviedb.org/3/search/movie?api_key=b5cd8024b0bd0d599e81c620eaef1994&query=';
  constructor(private http: HttpClient) { }
  movie?:movie[];

  getMovies(movieName : string) 
  {
    return this.http.get<movie[]>(`${this.URL_API}${movieName}`).pipe(
      map((resp: any) => 
      {
        //localStorage.setItem('user_token',resp['token']);
        return resp['results'];

      }
      ));;
  }
}
