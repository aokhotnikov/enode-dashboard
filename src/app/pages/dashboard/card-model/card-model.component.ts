import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardModelComponent implements OnInit {

  @Input() modelName: string;
  @Input() sum: number;

  constructor() { }

  ngOnInit(): void {
  }

}
