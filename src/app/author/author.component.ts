import { Listofauthors } from './listofauthors.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  counts;  
  authlist;

  constructor(list:Listofauthors) {
  
  this.authlist=  list.getList();
  this.counts= this.authlist.length;
  

   }

  ngOnInit() {
  }

}
