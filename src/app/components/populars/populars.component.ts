import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { PopularsService } from 'src/app/services/populars.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit{
  
  constructor(public popularSVC: PopularsService, public movieSVC : MovieService){}

  ngOnInit(): void {
    this.getPopulars();
  }

  saveFavorites(title: string, overview: string, poster_path: string):void
  {
    this.movieSVC.save(title, overview, poster_path).subscribe(res => 
      {
        console.log(res);
        //this.rolsvc.allroles = res;
      }, 
      err => 
      {
        console.log(err);
        //console.log(err);
      });
  }


  getPopulars():void{
    this.popularSVC.getPopulars().subscribe(res => 
      {
        console.log(res);
        this.popularSVC.movie = res;
        //this.rolsvc.allroles = res;
      }, 
      err => 
      {
        console.log(err);
        //console.log(err);
      });
  }

}
