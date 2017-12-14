import { Observable } from 'rxjs/Observable';
import { log } from 'util';
import { Post } from './../posts/models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    apiKey = 'e91b70c29eb15d7f3107cfe329ecbc6e';
    baseUrl = 'https://api.themoviedb.org/3';
    constructor(private http: HttpClient) { }
    

    getPosts() {
        return this.http.get(`${this.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`);
    }

    getPost(id: any) {
        return this.http.get<Post>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
    }    
}