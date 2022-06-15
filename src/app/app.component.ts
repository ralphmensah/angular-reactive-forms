import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

// using the form group
  // form = new FormGroup({
  //   lastName : new FormControl(''),
  //   firstName : new FormControl(''),
  //   email : new FormControl(''),
  //   gender: new FormControl(''),
  //   address: new FormGroup({
  //     state : new FormControl(''),
  //     city: new FormControl('')
  //   })
  // })

  form = this.builder.group({
    lastName: ['',Validators.required],
    firstName:['', Validators.required],
    email:['', Validators.required],
    gender:['',Validators.required],
    address: this.builder.group({
      state: [''],
      city:['']
    }),
    aliases: this.builder.array([this.builder.control('')])
  })

  constructor(private builder : FormBuilder){
  }

  ngOnInit(): void {
    // console.log(this.form);
  }

  get aliases(){
    return this.form.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.builder.control(''))
    // console.log(this.aliases.length);
  }

  removeAlias(){
    this.aliases.removeAt(this.aliases.length-1)
  }

  onSubmit(){
    // submit form
    console.warn(this.form.value)
    this.form.reset();
  }

}
