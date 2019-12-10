import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Amigo} from './amigo.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class AppService{
    constructor(private http: HttpClient){

    }

    getHttpHeaders(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // 'X-CSRF-TOKEN': "csrf-token"
            })
        };
    }

    getAll(): Observable<Amigo[]>{
        const getFriendsUrl = "http://127.0.0.1:8000/friends";
        return this.http.get<Amigo[]>(getFriendsUrl, this.getHttpHeaders())
    }

    postAdd(amigo: Amigo): any{
        const postFriendUrl = "http://127.0.0.1:8000/add/";
        return this.http.post(postFriendUrl, amigo);
    }

    deleteFriend(id: any): Observable<string>{
        const getFriendsUrl = "http://127.0.0.1:8000/delete/"+id;
        return this.http.get<string>(getFriendsUrl, this.getHttpHeaders())
    }
}