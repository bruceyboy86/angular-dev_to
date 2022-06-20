import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IArticles } from '../modals/modals';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<IArticles[]> {
    return this.http.get<IArticles[]>(`${env.BASE_API}/articles`);
  }
  getArticle(id: any): Observable<any> {
    return this.http.get<any>(`${env.BASE_API}/articles/${id}`);
  }
}
