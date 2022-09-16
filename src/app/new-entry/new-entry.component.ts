import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  saveMe() {
    alert("Hello World");
    //var requestTime = document.getElementById("new-date-time");
    //window.alert(requestTime);
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
