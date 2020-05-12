import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  
  private Custom;
  constructor(private http: HttpClient, private router: Router,) { 
    this.Custom = environment.custom;
    
  }

  emailverification(data)
  {
    return this.http.post<any>(`${this.Custom}category`,data);
  }
}
