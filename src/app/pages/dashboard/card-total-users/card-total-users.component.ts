import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-total-users',
  templateUrl: './card-total-users.component.html',
  styleUrls: ['./card-total-users.component.scss']
})
export class CardTotalUsersComponent implements OnInit {

  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

}
