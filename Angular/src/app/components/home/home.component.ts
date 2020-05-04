import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  val: boolean;
  public errMsg;
  constructor(private builder: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]


    })

  }


  verifyLogin() {
    this.submitted = true;
    let userna=this.loginForm.controls.username.value;
localStorage.username=userna;
console.log(this.loginForm.invalid)
    if (this.loginForm.invalid) {
      return;
    }
    //this.router.navigate(['functions']);
    this.bankservice.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
       console.log(data);
      if (data == "true") {
        alert("Log in sucessful");
        this.router.navigate(['navbar']);
      }
    },
      err => {
       this.errMsg=err;
       alert("check username and password");
      });




  }
}
