import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {

  @Input()
  public btnText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
