import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb : FormBuilder) { }

  ProfileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:[],
    address : this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit()
  {
    console.log(this.ProfileForm.value) ; 
    
  }

  ngOnInit(): void {
  }
}