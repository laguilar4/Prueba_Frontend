import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>();
  constructor() { }
  //Mostrar y Esconder
  show():void{
    this.isLoading$.next(true);
  }
  hide():void{
    this.isLoading$.next(false);
  }
}
