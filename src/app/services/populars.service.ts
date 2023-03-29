import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { movie } from 'src/app/interfaces/populars';
@Injectable({
  providedIn: 'root'
})
export class PopularsService {

  constructor(private http: HttpClient) { }
  URL_API = 'https://api.themoviedb.org/3/movie/popular?api_key=b5cd8024b0bd0d599e81c620eaef1994';
  movie?:movie[];

  getPopulars() 
  {
    return this.http.get<movie[]>(`${this.URL_API}`).pipe(
      map((resp: any) => 
      {
        //localStorage.setItem('user_token',resp['token']);
        return resp['results'];

      }
      ));;
  }
}
