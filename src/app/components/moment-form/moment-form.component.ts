import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {

  @Input()
  public btnText = '';

  public momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required])
    });
  }

  get title() {
    return this.momentForm.get('title');
  }

  get description() {
    return this.momentForm.get('description');
  }

  get file() {
    return this.momentForm.get('file');
  }

  public submit() {
    console.log('envia o formulário');
  }

}
