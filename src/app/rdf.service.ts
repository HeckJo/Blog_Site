import { Injectable } from '@angular/core';
import { foaf } from 'rdf-namespaces';
import { getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrlAll } from '@inrupt/solid-client';
import { SCHEMA_INRUPT } from '@inrupt/vocab-common-rdf';

@Injectable({
  providedIn: 'root'
})
export class RdfService {

 async firstRDF () {
  let exampleSolidDatasetURL = "https://www.w3.org/People/Berners-Lee/card/#i";
  let ds = await getSolidDataset(exampleSolidDatasetURL);
  return "hi";
 }

  lastEntry (category : string){
    return category;
  }

  constructor() { }
}
