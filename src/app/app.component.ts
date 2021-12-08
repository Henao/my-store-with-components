import { Component } from '@angular/core';
import { Product } from './models/product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products: Product[]=[
    {
      id: '1',
      name: 'Cámara',
      image: './assets/images/toy.jpg',
      price: 200
    },
    {
      id: '2',
      name: 'Patines',
      image: './assets/images/toy.jpg',
      price: 500
    },
    {
      id: '3',
      name: 'Pantalla',
      image: './assets/images/toy.jpg',
      price: 120
    },
    {
      id: '4',
      name: 'Libros Allan Poe',
      image: './assets/images/toy.jpg',
      price: 550
    }
  
  ]


  onLoaded(img: string){
    console.log('Log padre', img);
  }


}
