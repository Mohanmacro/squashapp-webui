import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { Country } from './country';
import { State } from './state';
import { SelectService } from './select.service';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
  providers: [SelectService]
})
export class PersonaldetailsComponent implements OnInit {


  // selectedCountry: any = '';
  selectedCountry:Country = new Country('','');;
  countries: Country[];
  states: State[];
  isdisable = true;
  otp: string;
  selectCountry = [];
  default: string = 'USA';
 
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  registerForm: FormGroup;
  submitted = false;
  selectedgender = 1;
  newdropdownvalue: any;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private selectService: SelectService) { }

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

 

  ngOnInit(): void {

    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);



    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.minLength(10)]],
      gender: new FormControl(null)
    });


    this.selectedgender = 1;

    var person = localStorage.getItem("personaldetail");
  
  }




  get f() { return this.registerForm.controls; }
  onOtpChange(otp) {
    this.otp = otp;
    if (this.otp.length > 9) {
      this.isdisable = false;
    }
    else {
      this.isdisable = true;
    }
  }
  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return false;
    }
    else {
      this.router.navigate(['/companydetails'])
      window.localStorage.setItem("personaldetail", JSON.stringify(this.registerForm.value));
    }
  }


}
