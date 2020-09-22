import { SignService } from './../../../service/rest-api/sign.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  redirectTo: string;
  signInForm: FormGroup;

  constructor(private SignService: SignService, private router: Router, private route: ActivatedRoute) {
    this.signInForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get id(){
    return this.signInForm.get('id');
  }

  get password(){
    return this.signInForm.get('password');
  }

  ngOnInit(){
    this.route.queryParams.subscribe(param => {
      this.redirectTo = param['redirectTo']
    });
  }

  submit(){
    if(this.signInForm.valid){
      this.SignService.signIn(this.signInForm.value.id, this.signInForm.value.password)
      .then(data => {
        this.router.navigate([this.redirectTo ? this.redirectTo : '/']);
      });
    }
  }

}
