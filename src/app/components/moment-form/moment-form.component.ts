import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {

  @Output()
  public onSubmit = new EventEmitter<Moment>();

  @Input()
  public btnText = '';

  public momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl()
    });
  }

  get title() {
    return this.momentForm.get('title');
  }

  get description() {
    return this.momentForm.get('description');
  }

  get image() {
    return this.momentForm.get('image');
  }

  public onFileSelected(event: any) {
    // console.log(event.target.files[0]);
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image: file});
  }

  public submit() {
    if (this.momentForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.momentForm.value);
  }

}
