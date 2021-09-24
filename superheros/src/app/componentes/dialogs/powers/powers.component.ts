import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { DialogData } from '../../search/search.component';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  datos;

  //Information
  name="";
  combat="";
  durability="";
  intelligence="";
  strength="";
  power="";
  speed="";
  constructor(  public dialogRef: MatDialogRef<PowersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private dialogService: DialogsServiceService,
    public superHeroService: SuperHeroServiceService
    ) {
      this.armarInformacion(data.id)
    }
  armarInformacion(id: string) {
    console.log(this.data)
    this.superHeroService.getPowerStats(parseInt(this.data.id)).subscribe((response) =>{
        this.datos = response;
        console.log(this.datos)
        this.name = this.datos.name,
        this.combat = this.datos.combat,
        this.durability = this.datos.durability,
        this.intelligence = this.datos.intelligence,
        this.strength = this.datos.strength,
        this.speed = this.datos.speed,
        this.power = this.datos.power
    })
  }

  ngOnInit() {
  }

}
