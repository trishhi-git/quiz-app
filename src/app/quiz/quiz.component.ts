import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedOption = '';
  score = 0;
  quizCompleted = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.selectedOption === currentQuestion.answer) {
      this.score++;
    }

    this.selectedOption = '';
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedOption = '';
    this.quizCompleted = false;
  }
}
