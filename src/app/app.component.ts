import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = '';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // We can pass the form on submit or use ViewChild
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // We can also access the same form as a ViewChild, which gives us access to the form before submit
  onSubmit(){
    console.log(this.signupForm);
  }
}
