import { log } from 'util';
import { Post } from './../posts/models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostService {
    baseUrl = 'https://www.crewmarketingpartners.com/wp-json/wp/v2';
    constructor(private http: HttpClient) { }
    

    getPosts() {
        return this.http.get<Post[]>(`${this.baseUrl}/posts`);
    }

    getPost(id: any) {
        return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
    }    
}