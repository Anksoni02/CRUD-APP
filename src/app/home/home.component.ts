import { Component, OnInit } from '@angular/core';
import {NgForm,Validator,FormControl} from '@angular/forms' ; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { shareReplay ,tap } from 'rxjs/operators';
import { ProfileService } from '../profile.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoggedin: boolean = false; 
  customerName:String = '' ; 
  email:string='';
  password:string='';
  data$:Observable<any>;
  constructor(private http: HttpClient,private profile : ProfileService) { 
    this.data$ = http.get("http://localhost:3000/customers").pipe(
      tap(console.log),shareReplay()
    ); 
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.http.post("http://localhost:3000/customers",form.value).subscribe() ;  
  }
  deleteDocument()
  {
    this.http.delete("http://localhost:3000/customers/1").subscribe();
    console.log("Deleted") ; 
  }

  ngOnInit(): void {
   // this.data$.subscribe() ;
   this.isLoggedin = this.profile.loggedInStatus() ; 
  }
}
