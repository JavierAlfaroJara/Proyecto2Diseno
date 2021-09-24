import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { DialogData } from '../../search/search.component';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent implements OnInit {
  datos;
  eyeColor;
  gender;
  hairColor;
  altura;
  name;
  race;
  peso;
  constructor(public dialogRef: MatDialogRef<AppearanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private dialogService: DialogsServiceService,
    public superHeroService: SuperHeroServiceService) { 
      this.armarInformacion()
    }

  armarInformacion() {
    console.log(this.data)
    this.superHeroService.getAppearence(parseInt(this.data.id)).subscribe((response) =>{
        this.datos = response; 
        console.log(this.datos)
        this.name = this.datos.name
        this.gender = this.datos.gender
        this.hairColor = this.datos['hair-color']
        this.eyeColor = this.datos['eye-color']
        if(this.gender=="Male"){
            this.gender="Hombre"
        }else if (this.gender=="Female"){
          this.gender="Mujer"
        }
        this.altura = this.datos.height[1]
        this.peso = this.datos.weight[1]
        this.race = this.datos.race


    })
  }
  ngOnInit() {
  }

}
