import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    NotfoundComponent
  ]
})
export class WebModule { }
