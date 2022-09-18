import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LastEntryComponent } from './last-entry/last-entry.component';
import { NewCategoryComponent } from './new-category/new-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    NewEntryComponent,
    LastEntryComponent,
    NewCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
