import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  videoSections = [
    {
      title: 'Mis momentos Favoritos',
      videos: [
        { title: 'Video 1', url: '../../assets/video1.mov' },
        { title: 'Video 2', url: '../../assets/video2.mov' },
        { title: 'Video 3', url: '../../assets/video19.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen2.jpg"}
      ]
    },
    {
      title: 'Recuerdos de Cenas',
      videos: [
        { title: 'Video 4', url: '../../assets/video4.mov' },
        { title: 'Video 5', url: '../../assets/video18.mov' },
        { title: 'Video 6', url: '../../assets/video3.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen1.jpg"}
      ]
    },
    {
      title: 'Mejor Maquillaje',
      videos: [
        { title: 'Video 7', url: '../../assets/video8.mov' },
        { title: 'Video 8', url: '../../assets/video9.mov' },
        { title: 'Video 9', url: '../../assets/video10.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen3.jpg"}
      ]
    },
    {
      title: ' Arena y Mar',
      videos: [
        { title: 'Video 10', url: '../../assets/video6.mov' },
        { title: 'Video 11', url: '../../assets/video22.mov' },
        { title: 'Video 12', url: '../../assets/video21.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen4.jpg"}
      ]
    },
    {
      title: '2 Meses',
      videos: [
        { title: 'Video 13', url: '../../assets/video14.mov' },
        { title: 'Video 14', url: '../../assets/video15.mov' },
        { title: 'Video 15', url: '../../assets/video16.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen5.jpg"}
      ]
    },
    {
      title: 'Random',
      videos: [
        { title: 'Video 16', url: '../../assets/video5.mov' },
        { title: 'Video 17', url: '../../assets/video7.mov' },
        { title: 'Video 18', url: '../../assets/video20.mov' },
      ],
      imagen: [
        {url: "../../assets/imagen6.jpg"}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.createFloatingStickers();
  }


  showLoveMessage() {
    const messages = [
      "¡Eres el amor de mi vida! ❤️",
      "Te amooooooo! 😊",
      "Eres mi persona favorita 🎁",
      "El tiempo a tu lado pasa volando 💖",
      "El amor nunca se apaga, siempre brilla. 🌟",
      "Me encanta pasar momentos a tu lado",
      "Eres mi pilina xd",
      "Tus ojos son muy hermosos",
      "En este día de San Valentín, celebro no solo nuestro amor, sino también nuestra hermosa amistad." ,
      "El amor es cuando tu felicidad se convierte en la mía." 
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage); // Mostrar el mensaje aleatorio
  }
  
  playVideo(event: any) {
    event.target.play();
  }
  
  pauseVideo(event: any) {
    event.target.pause();
  }

  openModal(imageSrc: string) {
    const modal = document.getElementById('photoModal') as HTMLElement;
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }
  
  closeModal() {
    const modal = document.getElementById('photoModal') as HTMLElement;
    modal.style.display = 'none';
  }
  createFloatingStickers() {
    const body = document.body;
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('img');
      heart.src = 'heart-sticker.gif';
      heart.classList.add('sticker', 'heart-sticker');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      body.appendChild(heart);
    }
  
    for (let i = 0; i < 5; i++) {
      const flower = document.createElement('img');
      flower.src = 'flower-sticker.gif';
      flower.classList.add('sticker', 'flower-sticker');
      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.top = `${Math.random() * 100}vh`;
      body.appendChild(flower);
    }
  }  
}
