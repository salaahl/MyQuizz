import { Component } from '@angular/core';
import * as questionBank from './questions/questionBank/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string = 'Quizz';

  // Le traitement de cette variable se trouve dans le questionsComponent
  questions = questionBank;
  show: boolean = true;

  // Le clic sur un bouton injectera un catalogue dans cette variable
  questionsCatalog: any = null;

  catalogs: any[] = [
    {
      name: 'Lorem',
      questions: this.questions.questionsLorem,
      show: this.show,
    },
    {
      name: 'Securité routière',
      questions: this.questions.securiteRoutiere,
      show: this.show,
    },
  ];

  showCatalog(catalogSwitch: boolean) {
    this.show = catalogSwitch;
    this.catalogs.forEach((catalog) => {
      catalog.show = false;
    });
  }
}
