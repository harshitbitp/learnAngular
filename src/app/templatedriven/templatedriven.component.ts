import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  defaultQuestion='pet';
  myvar='';
  genders=['male', 'female'];
  suggestVar='';
  suggest(){
     // s1.value=this.suggestVar;
     this.suggestVar='Harshit';
  }
  clear(){
    // s1.value=this.suggestVar;
    this.suggestVar='';
 }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
    console.log('email is' +form.value.email);
    form.value.email='xyz@gmail.com';
    if(form.dirty)
    alert("dirty");
  }
//f1 is template variable of second form
  @ViewChild('f1') signupForm? :NgForm;
  onSubmit2(){
        console.log(this.signupForm);
  }

  user={
    username:'',
    email: ''
  };
  @ViewChild('f3') signupForm2? :NgForm;
  submitted=false;
  onSubmit3(){
    this.submitted=true;
      this.user.username=this.signupForm2?.value.username;
      this.user.email=this.signupForm2?.value.email;
  }
}

