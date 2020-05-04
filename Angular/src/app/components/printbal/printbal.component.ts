import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-printbal',
  templateUrl: './printbal.component.html',
  styleUrls: ['./printbal.component.css']
})
export class PrintbalComponent implements OnInit {
  public bal;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.bal = this.route.snapshot.paramMap.get("bal");
    console.log(this.bal);
  }
}
