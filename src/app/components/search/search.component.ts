import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(public fb: FormBuilder, public searchSVC: SearchService, public movieSVC : MovieService) { }

  public searchForm = this.fb.group({
    name:['']
  });


  getMovies()
  {
    this.searchSVC.getMovies(this.searchForm.value.name!).subscribe(res => {
      this.searchSVC.movie = res;
    }, err => 
    {
      console.log(err);

    });
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

}
