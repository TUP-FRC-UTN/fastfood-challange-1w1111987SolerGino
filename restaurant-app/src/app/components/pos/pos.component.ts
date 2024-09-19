import { Component} from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../models/pedido.models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './pos.component.html'
})
export class PosComponent {
  nombreCliente: string = '';
  descripcionPedido: string = '';

  constructor(private pedidoService: PedidoService) {}

  ordenarPedido() {
    if (this.nombreCliente && this.descripcionPedido) {
      const nuevoPedido = new Pedido(this.nombreCliente, this.descripcionPedido);
      this.pedidoService.agregarPedido(nuevoPedido);
      this.nombreCliente = '';
      this.descripcionPedido = '';
    }
  }
}
