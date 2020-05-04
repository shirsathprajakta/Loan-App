import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-printtrans',
  templateUrl: './printtrans.component.html',
  styleUrls: ['./printtrans.component.css']
})
export class PrinttransComponent implements OnInit {
  public data:String[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => this.data = params.getAll('trans'));
    console.log("s Dta"+this.data);
  }

}
