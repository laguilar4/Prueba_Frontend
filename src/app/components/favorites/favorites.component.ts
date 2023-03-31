import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  constructor( public movieSVC : MovieService){}
  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites():void{
    this.movieSVC.getMovies().subscribe(res => 
      {
        this.movieSVC.movie = res;
        console.log(res);
        //this.rolsvc.allroles = res;
      }, 
      err => 
      {
        console.log(err);
        //console.log(err);
      });
  }

}
