import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: Object;
  profileForm: FormGroup;
  updatfrm = false;
  addfrm = false;
  constructor(private fb: FormBuilder,
     private auth: AuthService) {
  }

  ngOnInit() {
       this.getOrders();
      this.profileForm = this.fb.group({
        'id': [null],
        'customer_name': [null, Validators.required],
        'phone_no': [null, Validators.required],
        'address': [null, Validators.required],
        'order_due_date': [null, Validators.required],
        'order_total': [null, Validators.required],
         });
  }
 getOrders() {
    this.auth.getAllOrders().subscribe(data => {
      this.data = data;
    });
  }
  addOrders(profileForm) {
    profileForm.reset();
    this.updatfrm = false;
    this.addfrm = true;
  }

  save(formData) {
      this.auth.postOrder(formData).subscribe(data => {
        console.log('adding data', data);
        this.getOrders();
      });
  }
  editForm(data) {
    console.log('hfdhf', data);
    this.updatfrm = true;
    this.addfrm = false;
    this.profileForm.patchValue({
      'customer_name': data.customer_name,
      'id': data.id,
      'phone_no': data.phone_no,
      'address': data.address,
      'order_due_date': data.order_due_date,
      'order_total': data.order_total
     });
  }

  deleteData(id) {
    console.log('hfdhf', id);
    this.auth.deleteOrder(id).subscribe(data => {
      console.log(data);
      this.getOrders();
    });
  }

  updateValue(data) {
    const dt = {
      'customer_name': data.customer_name,
      'id': data.id,
      'phone_no': data.phone_no,
      'address': data.address,
      'order_due_date': data.order_due_date,
      'order_total': data.order_total
       };
   this.auth.updateOrder( dt.id, dt).subscribe( res => {
     console.log('updated', res);
      this.getOrders();
    });
  }
}
