import { Component, OnInit } from '@angular/core';
import { RdfService } from '../rdf.service';

@Component({
  selector: 'app-last-entry',
  templateUrl: './last-entry.component.html',
  styleUrls: ['./last-entry.component.scss']
})
export class LastEntryComponent implements OnInit {


  lastdateTime = new Date();
  lastItem = this.rdf.firstRDF();

  

  constructor(private rdf : RdfService) { }

  ngOnInit(): void { }

}
