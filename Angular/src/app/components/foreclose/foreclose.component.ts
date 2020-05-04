import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-foreclose',
  templateUrl: './foreclose.component.html',
  styleUrls: ['./foreclose.component.css']
})
export class ForecloseComponent implements OnInit {

  forecloseForm: FormGroup;
  submitted: boolean = false;
  Msg;
  constructor(private builder0: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {
    this.forecloseForm = this.builder0.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accno: new FormControl('', [
        Validators.required,
      ]),

      loanamount: new FormControl('', [
        Validators.required,
      ]),
    })
   
  }
  foreclose()
  {
    this.submitted=true;
    this.bankservice.forelose(this.forecloseForm.value.accno).subscribe(data=>{
      this.Msg=data;
      console.log(data);
      alert("Loan cleared")
    },err =>{
      this.Msg=err;
      console.log(err)
    })
  }
}
