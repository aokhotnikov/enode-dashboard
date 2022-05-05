import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-health',
  templateUrl: './card-health.component.html',
  styleUrls: ['./card-health.component.scss']
})
export class CardHealthComponent implements OnInit {

  @Input() status: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
