import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { movie } from '../interfaces/populars';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  URL_API = 'http://localhost:3000/api/';
  movie?:movie[];
  constructor(private http: HttpClient) { }
  //header con token
  get authorization(){
    let getUserToken = localStorage.getItem('user_token');
    return {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${getUserToken}`
      },
    }
  }
  //Consumir endpoint para guardar
  save(title:string, overview:string, poster_path:string)
  {
    const body = 
    {
      title: title,
      overview: overview,
      poster_path: poster_path
    }
    return this.http.post(`${this.URL_API}movie/save`, body,this.authorization);
  }
//Consumir endpoint para consultar
  getMovies()
  { 
    return this.http.get<movie[]>(`${this.URL_API}movie`, this.authorization);
  }
}
