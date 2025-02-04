import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  photos = [
    { title: 'Pareja feliz', url: 'https://example.com/foto1.jpg' },
    { title: 'Corazones', url: 'https://example.com/foto2.jpg' },
    { title: 'Ramo de flores', url: 'https://example.com/foto3.jpg' },
    { title: 'Cena romántica', url: 'https://example.com/foto4.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
