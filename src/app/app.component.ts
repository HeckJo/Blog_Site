import { Component } from '@angular/core';
import { Thing } from '@inrupt/solid-client';
import { RdfService } from './rdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website_Andachten';
  things = this.rdf.arrayCategories();
  temp (thing : String){
    let erg = thing;
    return erg;
  }
  constructor(private rdf : RdfService){}
}
