import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from './company.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss']
})
export class CompanydetailsComponent implements OnInit {

  companyForm: FormGroup;
  submitted = false;
  isTermsRead = false;
  imageURL: string;



  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.companyForm = this.formBuilder.group({
      companyname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobtitle: ['', Validators.required],
      experience: ['', [Validators.required]],
      image: ['', Validators.required],
    });
    var company = localStorage.getItem("companydetail");
    if (company) {
      var companydata = JSON.parse(company);
      // this.companyForm.setValue({ companyname: companydata.companyname, email: companydata.email, jobtitle: companydata.jobtitle, experience: companydata.experience, image: companydata.image });
    }
  }


  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      this.companyForm.patchValue({
        image: file
      });

    }
    reader.readAsDataURL(file)
  }


  UploadImage(event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  get f() { return this.companyForm.controls; }
  
  sendOTP() {

    let companydata: any = {
      comapanyname: this.companyForm.get('companyname').value,
      email: this.companyForm.get('email').value,
      jobtitle: this.companyForm.get('jobtitle').value,
      experience: this.companyForm.get('experience').value,
    };
    this.companyService.emailverification(companydata).subscribe(res => {
      console.log(res);
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    }
    window.localStorage.setItem("companydetail", JSON.stringify(this.companyForm.value));
    if (this.isTermsRead) {
      this.router.navigate(['/emailverification']);
    }
    else alert('Please read terms');
  }
}
