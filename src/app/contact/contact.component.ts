import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls : ['contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() {
  }

  name: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  ngOnInit() {
  }
}
