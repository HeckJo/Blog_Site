import { Component, OnInit } from '@angular/core';
import { RdfService } from '../rdf.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name = this.rdf.getUsername();
  server = this.rdf.getHostServer();

  login() {
    this.rdf.loginAndFetch();
    this.name = this.rdf.getUsername();
    this.server = this.rdf.getHostServer();
  }
  
  constructor( private rdf : RdfService ) { }

  ngOnInit(): void {
  }

}
