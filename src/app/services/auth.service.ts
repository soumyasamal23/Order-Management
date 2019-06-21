import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }

  public isAuthenticate(): boolean {
    // method return true or false based on login credential
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  public async loginAction(data) {
    const loginData = {'UserName': data.username, 'UserPassword': data.password, 'tokenAccess': '454dsfdfs45187'};
    await sessionStorage.setItem('userData', JSON.stringify(loginData));
    return true;
  }
  public async logOutAction() {
    // session/local storage clear
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
  // All Orders
  getAllOrders() {
    return this.http.get<any>(this.url);
  }
  // Delete Order
  deleteOrder(id) {
    return this.http.delete(this.url + '/' + id);
  }
   // Create Order
   postOrder(data) {
    return this.http.post(this.url , data);
  }
  // update order
  updateOrder(id, data) {
    return this.http.put(this.url + '/' + id, data);
  }
}
