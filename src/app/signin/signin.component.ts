import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignInService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private signInService: SignInService
  ) { }

  ngOnInit() {
  }

  name: string;
  
  signIn(form: NgForm) {
    this.name = form.value.nameInput;

    this.signInService.addSignedInUser(this.name);

    this.router.navigate(['thankyou'], { relativeTo: this.route });
  }
}
