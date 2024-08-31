import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PutoTvFront';


  ngOnInit(): void {
    let randomGif: string=this.getRandomGif();
    this.setBackgroundGif(randomGif); 
  }

  setBackgroundGif(gifUrl: string): void {
    const appContainer = document.querySelector('.app-container') as HTMLElement;
    if (appContainer) {
      appContainer.style.backgroundImage = `url(${gifUrl})`;
    }
  }
  getRandomGif(){
    let gifs:string[] = [
      'fondo.gif','fondo2.gif','fondo3.gif','fondo4.gif','fondo5.gif','fondo6.gif'
    ]
    let randomIndex: number = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
  }

}
