import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Accountholder } from 'src/app/model/Accountholder';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-calcemi',
  templateUrl: './calcemi.component.html',
  styleUrls: ['./calcemi.component.css']
})
export class CalcemiComponent implements OnInit {
  calemiForm: FormGroup;
  submitted: boolean = false;
  emi:string;
  public Msg;
  constructor(private builder9: FormBuilder, private router: Router, private bankservice: BankserviceService) { }

  ngOnInit() {
    this.calemiForm = this.builder9.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      period: new FormControl('', [
        Validators.required,
      ]),

      rate: new FormControl('', [
        Validators.required,
      ]),

      loanamount: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  calculate()
  {
this.submitted=true;
this.bankservice.calcEMI(this.calemiForm.value.loanamount,this.calemiForm.value.period,this.calemiForm.value.rate).subscribe(data=>{
  console.log(data);
 // this.Msg= "you have successfully applied for a loan of Rs."+data;
 alert("EMI is :"+data);
  },error=>{
      this.Msg=error;
  })
 // this.emi=data;
   
  }
}
