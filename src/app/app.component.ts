import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
