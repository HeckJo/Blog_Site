import { Component, OnInit } from '@angular/core';
import { RdfModuleComponent } from '../rdf-module/rdf-module.component';
import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';
import { emergency } from 'rdf-namespaces/dist/contact';
@Component({
  selector: 'app-last-entry',
  templateUrl: './last-entry.component.html',
  styleUrls: ['./last-entry.component.scss']
})
export class LastEntryComponent implements OnInit {

  test = this.getSomething();
  rdf = new RdfModuleComponent();

  lastdateTime = this.rdf.lastDate.toUTCString();
  lastItem = this.test;

  async getSomething(){
    let webId = "https://www.w3.org/People/Berners-Lee/card#i";
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);
    let erg = profile.getString('http://xmlns.com/foaf/0.1/name');
    return erg;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
