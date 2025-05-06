import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'quiz', component: QuizComponent }
];
