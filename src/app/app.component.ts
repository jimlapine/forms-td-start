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
  genders = ['Male', 'Female'];
  user = {
    username : '',
    email : '',
    gender: '',
    secretQuestion: '',
    answer: ''
  };

  user2 = {};
  suggestUserName() {
    const suggestedName = 'Superuser';

    // Use set value to set entire form or patch value to set individual values

    // We can set the values for the form control using the ViewChild
    // All model values must be set
    // Not the best approach, becuase entered values are lost
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: '',
    //   questionAnswer: '',
    //   gender: ''
    // });

    // A better approach is to use patch value and patch only the value we want to set
    this.signupForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }

  // We can pass the form on submit or use ViewChild
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // We can also access the same form as a ViewChild, which gives us access to the form before submit
  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
  }
}
