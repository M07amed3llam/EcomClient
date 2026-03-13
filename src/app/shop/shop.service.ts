import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/Pagination';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseURL = 'https://localhost:7089/api/';
  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<IPagination>(this.baseURL + "Product/get-all");
  }
}
