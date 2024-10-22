import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Book } from '../../Book';
import { FormsModule } from '@angular/forms'

@Component({

  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'

})

export class BookComponent {

  @Input()
  book : Book = {} as Book;

}
