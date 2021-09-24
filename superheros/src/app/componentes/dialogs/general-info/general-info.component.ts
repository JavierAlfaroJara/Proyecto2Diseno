import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { SearchComponent } from '../../search/search.component';

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

  constructor(
    public dialogRef: MatDialogRef<GeneralInfoComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public superHeroService: SuperHeroServiceService
    ) {
      // console.log(data)
    }

  ngOnInit() {
  }

  armarInformacion(id){
    this.superHeroService.getIdCharacter(id).subscribe(
      (response) =>{
        console.log(response)
      });
  }

}
