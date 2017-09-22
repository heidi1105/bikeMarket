import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BikeService } from './bike.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowseComponent } from './browse/browse.component';
import { MylistingComponent } from './mylisting/mylisting.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BrowseComponent,
    MylistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
