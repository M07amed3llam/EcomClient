import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/models/Pagination';
import { IProduct } from '../shared/models/Product';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  products : IProduct[] = [];
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.shopService.getProduct().subscribe({
      next: (value: IPagination) => {
        console.log(value.data);
        this.products = value.data;
      }
    })
  }
}
