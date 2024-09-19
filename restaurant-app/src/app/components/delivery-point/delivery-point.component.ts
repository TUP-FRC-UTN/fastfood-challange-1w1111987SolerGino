import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../models/pedido.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './delivery-point.component.html'
})
export class DeliveryPointComponent implements OnInit {
  pedidosListos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.getPedidosListos().subscribe(pedidos => {
      this.pedidosListos = pedidos;
    });
  }

  entregarPedido(pedido: Pedido): void {
    this.pedidoService.entregarPedido(pedido);
  }
}
