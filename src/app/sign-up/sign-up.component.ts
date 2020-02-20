import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, Validator, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DetailsComponent } from './../details/details.component';
import { InformationService } from './../information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  userInfo: FormGroup;

  error_messages = {

    'email': [
      { type: 'required', message: 'Email is required.' },
      // { type:'email', message: 'please provide proper email'},
      { type: 'minlength', message: '*Email length.' },
      { type: 'maxlength', message: '*Email length.' },
      { type: 'required', message: '*please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: '*password is required.' },
      { type: 'pattern', message: '*password must be alphanumeric with special symbol and 8 char long.' },
      { type: 'maxlength', message: '*password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: '*password is required.' },
      { type: 'passwordNotMatch', message: '*passwords do not match.' }
    ],
  }

  constructor(
    private router: Router,
    private service: InformationService,
    public formBuilder: FormBuilder
  ) {

    document.body.style.background = 'rgb(39, 141, 219)'
    this.userInfo = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*?[A-Za-z])(?=.*?[!@#$%^&*.]).{8,}$"),
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      cnfpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
      accept: new FormControl('', Validators.compose([
        Validators.requiredTrue
      ]))
    }, {
      validators: this.passwordmatch.bind(this)
    });
  }

  ngOnInit() {

  }

  passwordmatch(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: cnfpassword } = formGroup.get('cnfpassword');
    return password === cnfpassword ? null : { passwordNotMatch: true };
  }

  onSubmit() {
    if (this.userInfo.valid) {
      const details = {
        email: this.userInfo.get('email').value,
        password: this.userInfo.get('password').value,
        gender: this.userInfo.get('gender').value
      }

      this.service.getDetails(details.email, details.password, details.gender)
      this.router.navigate(['/details'])
    }

  }
}