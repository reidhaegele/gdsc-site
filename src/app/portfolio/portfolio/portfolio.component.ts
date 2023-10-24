import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    portfolios = [
        {
            title: 'GDSC Info Session',
            description: 'Friday Oct. 27th @ 5pm',
            image: '../../../assets/gdsc-site.png'
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
        // future portfolios
      ];
}
