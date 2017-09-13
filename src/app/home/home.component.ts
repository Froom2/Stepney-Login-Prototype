import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  name: string;
  
  signIn(form: NgForm) {
    this.name = form.value.nameInput;

    this.homeService.addSignedInUser(this.name);

    this.router.navigate(['thankyou'], { relativeTo: this.route });
  }
}
