import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideShowComponent } from './projects/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    SlideShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
