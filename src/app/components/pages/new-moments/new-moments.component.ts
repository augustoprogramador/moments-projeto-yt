import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.scss']
})
export class NewMomentsComponent implements OnInit {

  public btnText = 'Compartilhar';

  constructor(private momentService: MomentService, private messageService: MessagesService, private router: Router) { }

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
    
    await this.momentService.createMoment(formData).subscribe();
    this.messageService.addMessage('Momento criado com sucesso');
    this.router.navigate(['/']);
  }

}
