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
    otp: string;
    isdisable = true;

   
  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.otpform = this.formBuilder.group({
            otp: ['', Validators.required],
        });
    }

    get f() { return this.otpform.controls; }
    onOtpChange(otp) {
        this.otp = otp;
        if(this.otp.length > 4)
        {
            this.isdisable = false;
        }
        else{
            this.isdisable = true;
        }
      }
      
      config = {
        allowNumbersOnly: true,
        length: 5,
        // password hide here //
        isPasswordInput: false,
        // password hide here //
        placeholder:'',
      }
    
    onSubmit() {
        this.submitted = true;
        if (this.otpform.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }

}
