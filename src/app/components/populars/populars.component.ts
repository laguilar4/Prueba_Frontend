import { Component, OnInit } from '@angular/core';
import { PopularsService } from 'src/app/services/populars.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent {
  
  constructor(public popularSVC: PopularsService){}

  ngOnInit(): void {
    this.getPopulars();
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
