import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';  // Importa AppComponent como standalone
import { PosComponent } from './components/pos/pos.component';  // Standalone
import { KitchenComponent } from './components/kitchen/kitchen.component';  // Standalone
import { DeliveryPointComponent } from './components/delivery-point/delivery-point.component';  // Standalone
import { RestaurantComponent } from './components/restaurant/restaurant.component';  // Standalone

@NgModule({
  // Ya no debes declarar standalone components aquí
  declarations: [],  // Queda vacío si todos los componentes son standalone
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,  // Agrega AppComponent como standalone
    RestaurantComponent  // Agrega RestaurantComponent como standalone
  ],
  providers: []
})
export class AppModule { }

