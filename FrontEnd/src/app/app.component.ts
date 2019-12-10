import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {AppService} from 'src/app/app.service';
import {Amigo} from './amigo.model';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'amigo-secreto';
  formAmigo: FormGroup;
  amigo: Amigo;
  // formUser: FormGroup;
  roles = [];  

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService) {
    }
    
    ngOnInit(){


      this.appService.getAll().subscribe(response => {
        this.roles = response;
        console.log("DSM<BNADASK "+response);
      });

      // this.amigo$.subscribe(amigo => this.createForm(amigo));

    }

    createForm(name, email){
      this.formAmigo = this.formBuilder.group({
         //[amigo._id ? amigo._id: ''],
        name: name,//[amigo.name ? amigo.name : ''],
        email: email//[amigo.email ? amigo.email : '']
      });
    }

    save(name, email){
      console.log("NAME "+name+" email "+email);
      this.createForm(name, email);
      // this.amigo.name = name;
      // this.amigo.email = email;
      this.appService.postAdd(this.formAmigo.value).subscribe(response => {
        console.log("Usuário adicionado");
      })
    }

    delete(id: any){
      this.appService.deleteFriend(id).subscribe(response => {
        // this.roles = response;
        console.log("DSM<BNADASK "+response);
      })
    }
}
