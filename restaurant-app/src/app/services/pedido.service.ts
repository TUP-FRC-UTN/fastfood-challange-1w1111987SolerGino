import { Injectable } from '@angular/core';
import { Pedido } from '../components/models/pedido.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidosPendientes: Pedido[] = [];
  private pedidosEnCoccion: Pedido | null = null;
  private pedidosListos: Pedido[] = [];

  private pedidosPendientesSubject = new BehaviorSubject<Pedido[]>([]);
  private pedidosEnCoccionSubject = new BehaviorSubject<Pedido | null>(null);
  private pedidosListosSubject = new BehaviorSubject<Pedido[]>([]);

  constructor() { }

  agregarPedido(pedido: Pedido): void {
    this.pedidosPendientes.push(pedido);
    this.pedidosPendientesSubject.next(this.pedidosPendientes);
  }

  tomarPedidoParaCocinar(pedido: Pedido): void {
    this.pedidosEnCoccion = pedido;
    this.pedidosPendientes = this.pedidosPendientes.filter(p => p !== pedido);
    this.pedidosPendientesSubject.next(this.pedidosPendientes);
    this.pedidosEnCoccionSubject.next(this.pedidosEnCoccion);
  }

  terminarPedido(): void {
    if (this.pedidosEnCoccion) {
      this.pedidosListos.push(this.pedidosEnCoccion);
      this.pedidosListosSubject.next(this.pedidosListos);
      this.pedidosEnCoccion = null;
      this.pedidosEnCoccionSubject.next(this.pedidosEnCoccion);
    }
  }

  entregarPedido(pedido: Pedido): void {
    this.pedidosListos = this.pedidosListos.filter(p => p !== pedido);
    this.pedidosListosSubject.next(this.pedidosListos);
  }

  getPedidosPendientes(): Observable<Pedido[]> {
    return this.pedidosPendientesSubject.asObservable();
  }

  getPedidosEnCoccion(): Observable<Pedido | null> {
    return this.pedidosEnCoccionSubject.asObservable();
  }

  getPedidosListos(): Observable<Pedido[]> {
    return this.pedidosListosSubject.asObservable();
  }
}
