import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogsServiceService } from 'src/app/Services/dialgoService/dialogs-service.service';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { DialogData, SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  id = ""
  name = ""
  foto = ""
  bando = ""
  editorial = ""
  biografia = ""

  aliases= ""
  alterEgos= ""
  firstAppearance = ""
  fullName = ""
  placeOfBirth = ""

  egos = ""

  datos;
  
  constructor(
    public dialogRef: MatDialogRef<GeneralInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogService: DialogsServiceService,
    public superHeroService: SuperHeroServiceService
    ) {
      this.armarInformacion(data.id)
    }

  ngOnInit() {
  }

  armarInformacion(id){
    this.superHeroService.getBiography(id).subscribe(
      (response) =>{
        this.datos = response
        console.log(this.datos)
        this.name = this.datos.name
        if(this.datos.alignment == "good"){
          this.bando = "Heroe"
        }
        if(this.datos.alignment == "bad"){
          this.bando = "Villano"
        }
        if(this.datos.alignment == "neutral"){
          this.bando = "Antiheroe"
        }
        this.editorial = this.datos.publisher
      });
    this.superHeroService.getImage(id).subscribe((response)=>{
      this.datos = response;
      console.log(this.datos)
      this.foto = this.datos.url
    })
    this.superHeroService.getBiography(id).subscribe((response)=>{
      this.datos = response;
      this.aliases = this.datos.aliases
      this.alterEgos = this.datos['alter-egos']
      this.firstAppearance = this.datos['first-appearance']
      this.fullName = this.datos['full-name']
      this.placeOfBirth = this.datos['place-of-birth']
    })
  }

  openConnectionsDialog(): void {
     this.dialogService.openConnections(this.data.id, this.name)
     };

  openAppearanceDialog(): void {
    this.dialogService.openAppearence(this.data.id, this.name)
  };  

  openPowerDialog(): void {
    this.dialogService.openPowers(this.data.id, this.name)
  };

}
