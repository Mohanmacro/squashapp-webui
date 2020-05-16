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


  public imagePath;
  public message: string;
  companyForm: FormGroup;
  submitted = false;
  isTermsRead = false;
   url :any = String;
   fileName = '';
   currentId: number = 0;
   editpreview = false;
  editimage :File;

 
 



  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { 

    this.companyForm = this.formBuilder.group({
      companyname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobtitle: ['', Validators.required],
      experience: ['', [Validators.required]],
      url: ['', Validators.required],
   
    });
    var company = localStorage.getItem("companydetail");
  }
  check(event) {
    if ( event.target.checked ) {
        this.isTermsRead = true;
   }
}

showPreview(event) {
  const file = (event.target as HTMLInputElement).files[0];
  const reader = new FileReader();
  reader.onload = () => {
    this.url = reader.result as string;
    this.companyForm.patchValue({
      image: file
    });
    if(this.editpreview === true){
      this.editimage = file;
      this.companyForm.patchValue({
        editimage:file
      });
    }
  }
  reader.readAsDataURL(file)
}



  UploadImage(event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.url = reader.result as string;
    }
    
    reader.readAsDataURL(file);
  }

  get f() { return this.companyForm.controls; }
  
 
  onSubmit() {
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    }
    window.localStorage.setItem("companydetail", JSON.stringify(this.companyForm.value));
    if (this.isTermsRead == true) {
      this.router.navigate(['/emailverification']);
    }
    else{
      alert("Please check read and terms");
    }
  }
}
