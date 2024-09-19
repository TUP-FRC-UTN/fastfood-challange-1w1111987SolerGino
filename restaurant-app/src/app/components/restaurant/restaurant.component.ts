import { Component } from '@angular/core';
import { PosComponent } from '../pos/pos.component';  // Importa PosComponent
import { KitchenComponent } from '../kitchen/kitchen.component';  // Importa KitchenComponent
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';  // Importa DeliveryPointComponent

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    PosComponent,   // Asegúrate de incluir los componentes necesarios
    KitchenComponent,
    DeliveryPointComponent
  ],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']  // Asegúrate de que esté correctamente escrito 'styleUrls' en plural
})
export class RestaurantComponent {

}
