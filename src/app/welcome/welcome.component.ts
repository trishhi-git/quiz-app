import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Make sure this is imported

@Component({
  standalone: true,
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz']); // <-- This navigates to quiz
  }
}
