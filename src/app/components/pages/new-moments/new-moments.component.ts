import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.scss']
})
export class NewMomentsComponent implements OnInit {

  public btnText = 'Compartilhar';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  // public async createHandler(moment: Moment) {
  public async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description); 

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // TO-DO
    await this.momentService.createMoment(formData).subscribe();
    // exibir msg
    // redirect
  }

}
