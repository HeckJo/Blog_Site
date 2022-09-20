import { Component, OnInit } from '@angular/core';
import { RdfService } from '../rdf.service';


@Component({
  selector: 'app-last-entry',
  templateUrl: './last-entry.component.html',
  styleUrls: ['./last-entry.component.scss']
})
export class LastEntryComponent implements OnInit {


  lastdateTime = new Date();
  lastItem : String | false = "cat";

  async clickMe() {
    alert(await this.rdf.arrayCategories() + " button ");
  }

  constructor(private rdf : RdfService) { }

  ngOnInit(): void { }

}
