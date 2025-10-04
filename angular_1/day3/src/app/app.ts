import { Component, signal } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Container } from "./Components/container/container";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Container, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day2');
}
