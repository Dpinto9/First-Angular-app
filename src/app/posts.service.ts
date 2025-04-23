import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = "https://mp9fe2cfa176c6c46ce0.free.beeceptor.com/posts";

  constructor(private http: HttpClient) { 
    
  }

  fetchPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
