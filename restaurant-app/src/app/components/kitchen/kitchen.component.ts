import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../models/pedido.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './kitchen.component.html'
})
export class KitchenComponent implements OnInit {
  pedidosPendientes: Pedido[] = [];
  pedidoEnCoccion: Pedido | null = null;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.getPedidosPendientes().subscribe(pedidos => {
      this.pedidosPendientes = pedidos;
    });

    this.pedidoService.getPedidosEnCoccion().subscribe(pedido => {
      this.pedidoEnCoccion = pedido;
    });
  }

  cocinar(pedido: Pedido): void {
    this.pedidoService.tomarPedidoParaCocinar(pedido);
  }

  terminarPedido(): void {
    this.pedidoService.terminarPedido();
  }
}
