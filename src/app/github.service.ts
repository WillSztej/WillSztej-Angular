import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators'
import {LangStats} from "./models/lang-stats";


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'http://localhost:8000/language-stats/'

  constructor(private http: HttpClient) {}

  getReposLanguageStats(): Observable<any> {
    this.http.get<any>(this.url).subscribe( (data: any) => {
      let blah = data.map( (item: any) => {
      new LangStats(item.category, item.value)
    }); } )

    return this.http.get<any>(this.url)
  }

}
