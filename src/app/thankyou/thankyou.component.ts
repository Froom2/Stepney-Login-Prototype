import { Component, OnInit } from '@angular/core';
import { SignInService } from '../signin/signin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  name: string;

  constructor(
    private signInService: SignInService,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = this.signInService.getSignedInUser();
    
    setTimeout((router: Router) => {
      this.router.navigate(['']);
    }, 3000);
  }
}
