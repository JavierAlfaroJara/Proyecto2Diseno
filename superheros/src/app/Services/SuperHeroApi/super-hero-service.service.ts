import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuperHeroServiceService {

  token = "914542129143041"
  URL_SuperHero = "https://superheroapi.com/api"
  constructor(private http: HttpClient) { }

  getIdCharacter(params: String){
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
