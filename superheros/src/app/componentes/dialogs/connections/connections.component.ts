import { Component, Inject, OnInit } from '@angular/core';
import { RelativeInjectorLocationFlags } from '@angular/core/src/render3/interfaces/injector';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { DialogData } from '../../search/search.component';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  datos;
  affiliation;
  relatives;

  constructor(public dialogRef: MatDialogRef<ConnectionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private dialogService: DialogsServiceService,
    public superHeroService: SuperHeroServiceService) { 
      this.armarInformacion()
    }

  armarInformacion() {
    console.log(this.data)
    this.superHeroService.getConnections(parseInt(this.data.id)).subscribe((response) =>{
        this.datos = response; 
        console.log(this.datos)
        this.relatives = this.datos.relatives
        this.affiliation = this.datos['group-affiliation']
        


    })
  }
  ngOnInit() {
  }

}
