import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { from, observable, Observable } from 'rxjs';
//import {  }
@Injectable({
  providedIn: 'root'
})
export class SuperHeroServiceService {
  
  token = 4552919771396632
  URL_SuperHero = "https://superheroapi.com/api"
  constructor(private http: HttpClient) { }

  getIdCharacter(params: String): Observable<any> {
    // var invocation = new XMLHttpRequest();
    // if(invocation){
    //   invocation.open('GET','${this.URL_SuperHero}/${this.token}/search/${params}', true);
    //   invocation.withCredentials = true;
    //   invocation.onreadystatechange = handler;
    //   invocation.send()
    // }
    return this.http.get(`${this.URL_SuperHero}/${this.token}/search/${params}`);
  }

  getPowerStats(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/powerstats`);
  }

  getBiography(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/biography`);
  }

  getAppearence(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/appearence`);
  }

  getWork(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/work`);
  }

  getConnections(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/connections`);
  }

  getImage(params: number){
    return this.http.get(`${this.URL_SuperHero}/${this.token}/${params}/image`);
  }

}
