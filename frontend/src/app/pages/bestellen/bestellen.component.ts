import { Component, OnInit } from '@angular/core';
import {Product} from '../../@core/product';

@Component({
  selector: 'app-bestellen',
  templateUrl: './bestellen.component.html',
  styleUrls: ['./bestellen.component.scss']
})
export class BestellenComponent implements OnInit {
  bestellingen;

  constructor() { }

  ngOnInit() {
  }

  addToOrder(product: Product, aantal: number): void {
    this.bestellingen.push(product ? product : 'Koffie', aantal ? aantal : 1);
  }
}
