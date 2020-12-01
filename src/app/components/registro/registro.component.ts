import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.signupForm = _builder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(datos): void {
    console.log(datos);
  }
}
