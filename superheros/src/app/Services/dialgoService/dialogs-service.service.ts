import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GeneralInfoComponent } from 'src/app/componentes/dialogs/general-info/general-info.component';
import { ConnectionsComponent } from 'src/app/componentes/dialogs/connections/connections.component';
import { AppearanceComponent } from 'src/app/componentes/dialogs/appearance/appearance.component';
import { PowersComponent } from 'src/app/componentes/dialogs/powers/powers.component';


@Injectable({
  providedIn: 'root'
})
export class DialogsServiceService {

  constructor( private dialog: MatDialog) { }


  openGeneralInfo(id) {
    return this.dialog.open(GeneralInfoComponent, { data:{
      
      id: id, height: '400px', width: '500px'}, disableClose: true }).afterClosed();
  }

  openConnections(id, nombre, info) {
    return this.dialog.open(ConnectionsComponent, { data:{
      
      id: id, nombre: nombre, info: info, height: '400px', width: '500px'}, disableClose: true }).afterClosed();
  }

  openPowers(id, nombre, info) {
    return this.dialog.open(PowersComponent, { data:{
      
      id: id, nombre: nombre, info: info, height: '400px', width: '500px'}, disableClose: true }).afterClosed();
  }

  openAppearence(id, nombre, info) {
    return this.dialog.open(AppearanceComponent, { data:{
      
      id: id, nombre: nombre, info: info, height: '400px', width: '500px'}, disableClose: true }).afterClosed();
  }

}
