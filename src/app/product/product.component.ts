import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private  products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '测试1', ['电子产品', '硬件设备']),
      new Product(2, '第一个商品', 2.99, 2.5, '测试2', ['电子产品', '硬件设备']),
      new Product(3, '第一个商品', 3.99, 1.5, '测试3', ['硬件设备']),
      new Product(4, '第一个商品', 4.99, 3.5, '测试4', ['电子产品']),
      new Product(5, '第一个商品', 5.99, 2.5, '测试5', ['电子产品', '硬件设备']),
      new Product(6, '第一个商品', 6.99, 4.5, '测试6', ['电子产品'])
     ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categroies: Array<string>
  ) {}
}
