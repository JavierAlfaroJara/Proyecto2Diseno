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

  datos;
  constructor(
    public dialogRef: MatDialogRef<GeneralInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private dialogService: DialogsServiceService,
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
  }

  // openConnectionsDialog(): void {
  //   this.dialogService.openConnections(this.id, this.name)
  //   };

  // openAppearanceDialog(): void {
  //   this.dialogService.openAppearence(this.id, this.name)
  //   };  

  // openPowerDialog(): void {
  //   this.dialogService.openPowers(this.id, this.name)
  //   };

}
