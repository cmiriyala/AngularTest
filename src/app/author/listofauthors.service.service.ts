import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Listofauthors {
  listofauthors =[];
  getList(){
    return this.listofauthors=["Author1","Author2","Author3"]
  }
}
