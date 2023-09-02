import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

let milliseconds = 300;

export function fade(duration: number = milliseconds) {
  return trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(duration, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate(duration, style({ opacity: 0 })),
    ]),
  ]);
}

export function fadeSlideIn(duration: number = milliseconds) {
  return trigger('fadeSlideIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate(duration, style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    /*
    transition(':leave', [
      animate(duration, style({ opacity: 0, transform: 'translateY(50px)' })),
    ]),
    */
  ]);
}
