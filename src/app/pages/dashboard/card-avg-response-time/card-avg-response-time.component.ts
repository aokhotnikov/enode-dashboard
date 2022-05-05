import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '@enode-engineering/vendor-wrapper';

@Component({
  selector: 'app-card-avg-response-time',
  templateUrl: './card-avg-response-time.component.html',
  styleUrls: ['./card-avg-response-time.component.scss']
})
export class CardAvgResponseTimeComponent implements OnInit {

  @Input() values: Record<Vendor, number>;

  constructor() { }

  ngOnInit(): void {
  }

}
