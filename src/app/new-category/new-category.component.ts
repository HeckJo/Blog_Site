import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  confirmation = "You have successfully created a new category.";
  submitNewCategory(){
    let t = (document.getElementById("input-field") as HTMLTextAreaElement).value;
    if (t != ""){
      alert(t);
      this.createNewCategory(t);
      alert(this.confirmation);
      window.location.reload();
    } else {
      alert("Please enter a categoryname to create a new category.");
    }
  }

  createNewCategory(category : String){
    alert("creating..." + category + " (this has yet to be implemented.:/)");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
