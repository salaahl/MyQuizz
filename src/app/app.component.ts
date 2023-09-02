import { Component } from '@angular/core';
import * as questionBank from './questions/questionBank/questions';
import * as animation from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [],
})
export class AppComponent {
  title = 'Quizz';

  // Le traitement de cette variable se trouve dans le questionsComponent
  questions = questionBank;
  show: boolean = true;

  securiteRoutiere: any = {
    name: 'Securité routière',
    show: false,
  };

  questionsLorem: any = {
    name: 'Questions lorem',
    show: false,
  };

  showCatalog(catalogSwitch: boolean) {
    this.show = catalogSwitch;
    this.securiteRoutiere.show = false;
    this.questionsLorem.show = false;
  }
}
