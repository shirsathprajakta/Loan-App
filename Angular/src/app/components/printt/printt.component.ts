import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {BankserviceService} from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import {Accountholder} from 'src/app/model/Accountholder';
import {Transaction} from 'src/app/model/Transaction';
import {Observable} from 'rxjs/Observable';
import { $ } from 'protractor';
@Component({
  selector: 'app-printt',
  templateUrl: './printt.component.html',
  styleUrls: ['./printt.component.css']
})
export class PrinttComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // public transactions()
  // {
  //   // this.submitted=true; 
  //   // this.bankservice.balance1(this.balForm.value.accno).subscribe(data=>{
  //   //   console.log(data);
  //   // //alert("Balance is: "+data);
  //   // this.bal=data;
  //   // })
  //  this.submitted=true;
  //  this.bankservice.transaction(this.printForm.value.accountNo).subscribe(data=>{
  //    console.log(data);
  //    this.trans=data;
  //  })
  // //this.bankservice.transaction(this.printForm.value.accountNo).subscribe(data=>{
  //   //console.log(data);
  //  /// this.trans=data;
  //   // this.pp=data;
  //   //var split=pp.split()
  //   //this.print=data;
  //   // var arr=this.pp.split(',');
  //   // console.log(arr);
    
  // // })
  
  // }
}
