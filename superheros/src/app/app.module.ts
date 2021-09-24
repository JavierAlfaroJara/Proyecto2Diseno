import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SearchComponent } from './componentes/search/search.component';
import { GeneralInfoComponent } from './componentes/dialogs/general-info/general-info.component';
import { PowersComponent } from './componentes/dialogs/powers/powers.component';
import { AppearanceComponent } from './componentes/dialogs/appearance/appearance.component';
import { ConnectionsComponent } from './componentes/dialogs/connections/connections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    GeneralInfoComponent,
    PowersComponent,
    AppearanceComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
