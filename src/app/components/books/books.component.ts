import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[] = [
    {
      id: 1,
      title: "Uma busca implacável: Celso Russomano busca justiça!",
      author: "Renato Carvalho Silva",
      price: 88.80
    },
    {
      id: 2,
      title: "A luta pelo mundo",
      author: "Renato Carvalho Silva",
      price: 8.88
    },
    {
    id: 3,
    title: "Venus Xiaohua, a gata mais bonita do mundo",
    author: "Renato Carvalho Silva",
    price: 888.00
    },
    {
    id: 4,
    title: "Como ser um profissional trilingue",
    author: "Renato Carvalho Silva",
    price: 80.00
    }
  ]

}
