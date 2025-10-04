import { Component, signal } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Main } from './Components/main/main';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day2');
}
