import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Characters} from "../models/characters";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = 'http://hp-api.herokuapp.com/api/characters/'

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get(`${this.baseUrl}staff`) as Observable<Characters[]>
  }

  getCharacters(house: string) {
    return this.http.get(`${this.baseUrl}house/${house}`) as Observable<Characters[]>
  }

  getStudents() {
    return this.http.get(`${this.baseUrl}students`) as Observable<Characters[]>
  }
}
