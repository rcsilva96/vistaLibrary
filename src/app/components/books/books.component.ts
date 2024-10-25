import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../Book';
import { BookComponent } from '../book/book.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book;
  isUpdate: boolean = false;
  idCount : number = 5;

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

  saveBook(){

    if(!this.isUpdate){
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isUpdate = false;

  }

  alteraLivro(selectedBook: Book){
    
    this.book = selectedBook;
    this.isUpdate = true;

  }

  deletaLivro(removeBook: Book){
    
    this.books = this.books.filter(b => b !== removeBook);


  }

}
