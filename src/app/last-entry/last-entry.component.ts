import { Component, OnInit } from '@angular/core';
import { RdfModuleComponent } from '../rdf-module/rdf-module.component';

@Component({
  selector: 'app-last-entry',
  templateUrl: './last-entry.component.html',
  styleUrls: ['./last-entry.component.scss']
})
export class LastEntryComponent implements OnInit {

  rdf = new RdfModuleComponent();

  lastdateTime = this.rdf.lastDate.toUTCString();
  lastItem = this.rdf.lastEntry;




  constructor() { }

  ngOnInit(): void {
  }

}
