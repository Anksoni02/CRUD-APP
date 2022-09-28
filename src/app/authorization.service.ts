import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public getToken(): boolean{
    // API call for login here 
    return false ; 
  }

  public isAuthorized()
  {
    return true ;
  }
}
