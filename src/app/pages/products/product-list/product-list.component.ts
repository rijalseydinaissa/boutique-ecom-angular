import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  api = inject(ApiService);
  ngOnInit(): void {
    this.api.getProductsbyCategory("electronics").subscribe((data)=>{
      this.products=data;
      // console.log(this.products);
    });
  }
}
