import { DialogService } from './../dialog.service';
import { ApiValidationService } from './common/api-validation.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReponseSingle } from 'src/app/model/common/ApiReponseSingle';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private signInUrl = '/api/v1/signin';
  private signUpUrl = '/api/v1/signup';

  constructor(private http: HttpClient, private ApiValidationService: ApiValidationService, private dialogService: DialogService) { }

  signIn(id: string, password: string): Promise<any> {
    const params = new FormData();
    params.append('id', id);
    params.append('password', password);
    return this.http.post<ApiReponseSingle>(this.signInUrl, params)
      .toPromise()
      .then(this.ApiValidationService.validateResponse)
      .then(response => {
        localStorage.setItem('x-auth-token', response.data);
      })
      .catch(response => {
        this.dialogService.alert('로그인 실패', response.error.msg);
        return Promise.reject(response.error.msg);
      });
  }

  signUp(id: string, password: string, name: string): Promise<any> {
    const params = new FormData();
    params.append('id', id);
    params.append('password', password);
    params.append('name', name);
    return this.http.post<ApiReponseSingle>(this.signUpUrl, params)
      .toPromise()
      .then(this.ApiValidationService.validateResponse)
      .then(response => {
        return true;
      })
      .catch(response => {
        this.dialogService.alert('가입 실패]', response.error.msg);
        return Promise.reject(response.error.msg);
      });
  }

  isSignIn(): boolean {
    const token = localStorage.getItem('x-auth-token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
