import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { IProduct } from './shared/models/Product';
import { IPagination } from './shared/models/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(private http: HttpClient) { }
  baseURL = 'https://localhost:7089/api/Product/get-all';
  product:IProduct[];

  getProduct(){
    return this.http.get(this.baseURL).subscribe({
      next: (value: IPagination) => {
        this.product = value.data;
        console.log(value.data);
      }
    })
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
