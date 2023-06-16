import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//local configuration of the app
import localEsBo from '@angular/common/locales/es-BO';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsBo);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
