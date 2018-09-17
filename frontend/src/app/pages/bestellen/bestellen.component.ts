import { Component, OnInit } from '@angular/core';
import {Product} from '../../@core/product';

@Component({
  selector: 'app-bestellen',
  templateUrl: './bestellen.component.html',
  styleUrls: ['./bestellen.component.scss']
})
export class BestellenComponent implements OnInit {
  bestellingen = [ ];

  constructor() { }

  ngOnInit() {
  }

  addToOrder(product: string, aantal: number): void {
    for (const s of this.bestellingen) {
        if (s.name === product) {
         s.aantal++;
          return;
        }
    }
    const newProduct = new Product(product ? product : 'Koffie', aantal ? aantal : 1);
    this.bestellingen.push(newProduct);
  }
}
