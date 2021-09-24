//import { Component, OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SuperHeroServiceService } from 'src/app/Services/SuperHeroApi/super-hero-service.service';
import { resolve } from 'url';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  search = "";
  ELEMENT_DATA:any[] = []
  constructor( private superHeroService:SuperHeroServiceService ) {
    
  }
  
  Heros;
  heroInfo;
  displayedColumns: string[] = ['id','nombre', 'bando', 'editorial','actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;  
  }


generateHeros(){
  this.superHeroService.getIdCharacter(this.search).subscribe(
    (response) =>{
      this.Heros = response
      this.dataSource = this.Heros.results
      console.log(this.dataSource)
    });
}

  

}
