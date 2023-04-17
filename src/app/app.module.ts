import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from './contador/contador.module';
import { EquiposModule } from './equipos/equipo.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    EquiposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
