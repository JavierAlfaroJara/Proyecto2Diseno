import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
        this.name = this.datos.name,
        this.bando = this.datos.alignment,
        this.editorial = this.datos.publisher
      });
    this.superHeroService.getImage(id).subscribe((response)=>{
      this.datos = response;
      console.log(this.datos)
      this.foto = this.datos.url
    })
  }

}
