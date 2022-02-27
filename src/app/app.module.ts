import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { BbComponent } from './bb/bb.component';
import { CComponent } from './c/c.component';
import { PhoneNnumbersPipe } from './phone-nnumbers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    BbComponent,
    CComponent,
    PhoneNnumbersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
