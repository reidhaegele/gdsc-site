import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
    events = [
        {
            title: 'GDSC Info Session',
            description: 'Friday Oct. 27th @ 5pm',
            image: '../../../assets/GDSC-Info.png'
        },
        {
            title: 'Coming Soon...',
            description: '',
            image: '../../../assets/WIP-poster.png'
        },
        {
            title: 'Coming Soon...',
            description: '',
            image: '../../../assets/WIP-poster.png'
        },
        // future events
      ];
}
