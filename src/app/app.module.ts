import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { StinniaComponent } from './stinnia/stinnia.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
 // sets home page (base URL)
  { path: 'home', component: HomeComponent },
// redirects to home
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'stinnia', component: StinniaComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
	StinniaComponent, 
	ContactComponent, NavbarComponent,	 
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
    HttpClientModule,
	 
  ],
  providers: [],
  bootstrap: [AppComponent]
	
})
export class AppModule { }
