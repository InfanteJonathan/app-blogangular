import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  API_URL: string = 'https://localhost:7017/api/comentary';

  constructor(private httpClient: HttpClient){}

  getComent() : Observable<any> {
    return this.httpClient.get(this.API_URL+'/allComent',{withCredentials: true})
      .pipe(res => res);
  }

}
