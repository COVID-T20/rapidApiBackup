import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-fount.component';
import { SomethingWentWrongComponent } from './something-went-wrong.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { ProjectsModule } from './projects/projects.module';

// 3rd pary
import bootstrap from 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SomethingWentWrongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
