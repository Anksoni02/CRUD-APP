import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formGroup!: FormGroup; 
  isTrue:boolean = false ; 
  constructor(private authservice : AuthServiceService,private router: Router) { }

  ngOnInit(): void {
    this.initForm() ; 
  }


  initForm(){
            this.formGroup = new FormGroup({
                email:new FormControl('',[Validators.required]),
                password:new FormControl('',[Validators.required])
            }) ; 
  }
  
  changeTheme(){
    this.isTrue = !this.isTrue
  }

  loginProcess()
  {
      if(this.formGroup.valid)
      {
        this.authservice.login(this.formGroup.value).subscribe(result =>{
              if(result.success)
              {
                  console.log(result); 
                  alert(result.message);
                  this.router.navigate(['/home']) ;  
              }
              else 
              {
                  alert(result.message) ; 
              }
        }); 
      }   
  }
}