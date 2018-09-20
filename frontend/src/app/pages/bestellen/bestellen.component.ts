import { Component, OnInit } from '@angular/core';
import { Product } from '../../@core/product';
import { AvailableCoffeeService } from '../../@core/available-coffee.service';

@Component({
  selector: 'app-bestellen',
  templateUrl: './bestellen.component.html',
  styleUrls: ['./bestellen.component.scss']
})
export class BestellenComponent implements OnInit {
  bestellingen = [];
  availableCoffees;
  constructor(private availableCoffeeService: AvailableCoffeeService) { }

  ngOnInit() {
    this.availableCoffees = this.availableCoffeeService.getCoffee();
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

  deleteFromOrder(bestelling: Product){
    this.bestellingen.splice(this.bestellingen.indexOf(bestelling),1);
  }

  clearCart(): void {
    this.bestellingen = [];
  }
}
