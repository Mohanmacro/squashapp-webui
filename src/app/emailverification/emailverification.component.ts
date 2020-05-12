import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.scss']
})
export class EmailverificationComponent implements OnInit {

  otpform: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.otpform = this.formBuilder.group({
            otp: ['', Validators.required, Validators.maxLength(1)],
            
        });
    }
    get f() { return this.otpform.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.otpform.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }

}
