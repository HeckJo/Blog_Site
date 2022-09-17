import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  category = '%%var getLater%%';
  hideMe = true;
  defaultTime = new Date();

  saveAction(){
    var newItemName = (document.getElementById('entryText') as HTMLTextAreaElement).value;
    var selTime = new Date();
    alert()
    alert("saved " + newItemName + " at " + selTime);
  }

  constructor() { }
  ngOnInit(): void {  }
}
