import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  text = '';

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  www = '123';

  Addlink() {
    this.text = "https://api.whatsapp.com/send/?phone&text=";
    return this.text;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/