import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { PostInterface } from '../interfaces/post.interface';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URL: string = `${environment.apiUrl}/publicacion`;
  constructor(private httpClient: HttpClient) { }

  private getHttpOptions() { 
    return { headers: new HttpHeaders({
       'Content-Type': 'application/json' }), 
       withCredentials: true }; }
  

  getAllPosts(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/getall',this.getHttpOptions())
    .pipe(
      catchError(this.handleError)
    );
  }

  get(id: number): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/get/${id}`,this.getHttpOptions())
    .pipe(
      catchError(this.handleError)
    );
  } 

  createPost(data: PostInterface): Observable<PostInterface>{
    return this.httpClient.post<PostInterface>(this.API_URL+'/addPost',JSON.stringify(data),this.getHttpOptions())
    .pipe(
      catchError(this.handleError)
    );

  }

  updatePost(id: number,data: PostInterface): Observable<PostInterface>{
    return this.httpClient.put<PostInterface>(`${this.API_URL}/edit/${id}`,JSON.stringify(data),this.getHttpOptions())
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id: number):Observable<void>{
    return this.httpClient.delete<void>(`${this.API_URL}/delete/${id}`,this.getHttpOptions())
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: any): Observable<never>{
    console.error('Ocurrio un error: ',error);
    return throwError(() => 'Algo ocurrido, intente nuevamente...');
  }
}
