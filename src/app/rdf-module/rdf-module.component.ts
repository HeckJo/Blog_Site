import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdf-module',
  templateUrl: './rdf-module.component.html',
  styleUrls: ['./rdf-module.component.scss']
})
export class RdfModuleComponent implements OnInit {


  lastEntry = "Example";
  lastDate = new Date();
  static lastEntry: any;
  static lastDate: any;

  static retrieveLastRDF() {
    return(this.lastEntry, this.lastDate);
  }

  rdf(){
    return(this.lastEntry, this.lastDate);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
