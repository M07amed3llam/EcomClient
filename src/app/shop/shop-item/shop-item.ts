import { Component, Input, input } from '@angular/core';
import { IProduct } from '../../shared/models/Product';

@Component({
  selector: 'app-shop-item',
  standalone: false,
  templateUrl: './shop-item.html',
  styleUrl: './shop-item.scss',
})
export class ShopItem {
  @Input() product:IProduct
}
