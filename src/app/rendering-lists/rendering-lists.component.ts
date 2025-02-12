import { Component, OnInit } from '@angular/core';
import { Phone } from '../types/Phone';

@Component({
  selector: 'app-rendering-lists',
  templateUrl: './rendering-lists.component.html',
  styleUrls: ['./rendering-lists.component.css']
})
export class RenderingListsComponent {
  phones: Phone[] = [
    { id: 1, model: 'iPhone 12', description: 'A powerful phone with a camera', soldOut: false },
    { id: 2, model: 'Samsung Galaxy S21', description: 'A smartphone with a powerful camera', soldOut: true },
    { id: 3, model: 'Xiaomi Mi 11', description: 'A smartphone with a powerful camera', soldOut: false },
  ]

}
