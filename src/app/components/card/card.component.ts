import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() id?: Number;
  @Input() title?: String;
  @Input() description?: String;
  @Input() img?: String;
  @Input() userName?: String;

  ngOnInit(): void {}
}
