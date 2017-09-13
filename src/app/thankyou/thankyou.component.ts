import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  name: string;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = this.homeService.getSignedInUser();
    
    setTimeout((router: Router) => {
      this.router.navigate(['/start']);
    }, 3000);
  }
}
