import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Book } from '../../Book';

@Component({

  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'

})

export class BookComponent {

  book : Book = {
    id: 1,
    title: "Uma busca implacável: Celso Russomano busca justiça!",
    author: "Renato Carvalho Silva",
    price: 88.80
  }

}
