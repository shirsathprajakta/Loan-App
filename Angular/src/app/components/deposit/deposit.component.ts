import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depoForm: FormGroup;
  submitted: boolean = false;
  amt:string;
  Msg;
  constructor(private builderi: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {
    this.depoForm = this.builderi.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accno: new FormControl('', [
        Validators.required,
      ]),

      amount: new FormControl('', [
        Validators.required,
      ]),
    })
    
  }
deposit()
{
 this.submitted=true;
 this.bankservice.deposit(this.depoForm.value.accno,this.depoForm.value.amount).subscribe(data=>{
  console.log(data);
  //this.Msg="you have successfully deposited amount of Rs."+this.depoForm.value.amount;
  alert("you have successfully deposited amount of Rs."+this.depoForm.value.amount);
 },error=>{
  this.Msg=error;
 })
  
}
}
