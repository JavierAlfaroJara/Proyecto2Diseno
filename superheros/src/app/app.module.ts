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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
