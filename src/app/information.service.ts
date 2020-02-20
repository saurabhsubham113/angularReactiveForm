import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  userInfo = {
    email:'',
    password:'',
    gender:''
  }
  constructor() {
   }

   getDetails(email,password,gender){
    this.userInfo.email = email,
    this.userInfo.password = password,
    this.userInfo.gender = gender
  }
}
