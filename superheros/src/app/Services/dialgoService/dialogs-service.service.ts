import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConnectionsComponent } from 'src/app/componentes/dialogs/connections/connections.component';
import { AppearanceComponent } from 'src/app/componentes/dialogs/appearance/appearance.component';
import { PowersComponent } from 'src/app/componentes/dialogs/powers/powers.component';


@Injectable({
  providedIn: 'root'
})
export class DialogsServiceService {

  constructor( private dialog: MatDialog) { }


  // openGeneralInfo(id) {
  //   return this.dialog.open(GeneralInfoComponent, { data:{
      
  //     id: id, height: '400px', width: '800px'}, disableClose: false }).afterClosed();
  // }

  openConnections(id, nombre) {
    return this.dialog.open(ConnectionsComponent, { data:{
      
      id: id, nombre: nombre, height: '400px', width: '500px'}, disableClose: false }).afterClosed();
  }

  openPowers(id, nombre) {
    return this.dialog.open(PowersComponent, { data:{
      
      id: id, nombre: nombre, height: '400px', width: '500px'}, disableClose: false }).afterClosed();
  }

  openAppearence(id, nombre) {
    return this.dialog.open(AppearanceComponent, { data:{
      
      id: id, nombre: nombre, height: '400px', width: '500px'}, disableClose: false }).afterClosed();
  }

}
