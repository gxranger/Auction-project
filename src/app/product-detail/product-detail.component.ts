import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle:string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params['proTitle'];
  }

}
