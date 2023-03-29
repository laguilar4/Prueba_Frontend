import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(public fb: FormBuilder, public searchSVC: SearchService) { }

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

}
