import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {
  countries: string[] = ['USA', 'UK', 'Canada'];
  registerForm: FormGroup;
  submitted = false;
  states: string[] = ['Tamilnadu', 'Newyork', 'Hunan'];
  selectedgender = 1;
  newdropdownvalue: any;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  changegender(userSelectedGender) {
    this.selectedgender = userSelectedGender;
    var computedGender = this.getGenderText();
    this.registerForm.patchValue({ gender: computedGender });
    console.log(JSON.stringify(this.registerForm.value));
  }
  getGenderText() {
    if (this.selectedgender == 1)
      return "Male";
    else if (this.selectedgender == 2)
      return "Female";
    else
      return "Other";
  }

  getaddedfield(event) {
    console.log(event);
    this.newdropdownvalue = event;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      country: [null, [Validators.required]],
      state: [null, [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      gender: new FormControl(null)
    });

    this.selectedgender = 1;
    var person = localStorage.getItem("personaldetail");
    if (person) {
      var persondata = JSON.parse(person);
    this.registerForm.controls['fullname'].setValue(persondata.fullname, { onlySelf: true });
    this.registerForm.controls['country'].setValue(persondata.country, { onlySelf: true });
    this.registerForm.controls['state'].setValue(persondata.state, { onlySelf: true });
    this.registerForm.controls['phone'].setValue(persondata.phone, { onlySelf: true });
    this.registerForm.controls['gender'].setValue(persondata.gender, { onlySelf: true });
  }
}
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)' + JSON.stringify(this.registerForm.value));
    this.router.navigate(['/companydetails'])
    window.localStorage.setItem("personaldetail", JSON.stringify(this.registerForm.value));
  }
}
