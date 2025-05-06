import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  getQuestions() {
    return [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyperlinks and Text Markup Language',
          'Home Tool Markup Language',
          'Hyper Text Markup Language',
          'Hyper Tool Multi Language'
        ],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: 'Which tag is used to define an unordered list?',
        options: ['<ol>', '<ul>', '<li>', '<list>'],
        answer: '<ul>'
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<br>', '<lb>', '<break>', '<line>'],
        answer: '<br>'
      },
      {
        question: 'Which HTML tag is used to make text bold?',
        options: ['<strong>', '<b>', '<bold>', '<text-bold>'],
        answer: '<b>'
      },
      {
        question: 'Which attribute specifies an image source file?',
        options: ['alt', 'src', 'href', 'link'],
        answer: 'src'
      }
    ];
  }
}
