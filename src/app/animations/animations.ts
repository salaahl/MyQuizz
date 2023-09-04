import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

let milliseconds = 300;

export function fadeIn(duration: number = milliseconds) {
  return trigger('fadeIn', [
    state('default', style({ opacity: 0 })),
    state('fadeIn', style({ opacity: 1 })),

    transition('default <=> fadeIn', [animate('5s ease-in-out')]),
  ]);
}

export function fadeSlideIn(duration: number = milliseconds) {
  return trigger('fadeSlideIn', [
    transition(':enter', [
      query('*', [
        style({
          opacity: 0,
        }),
      ]),
      style({ opacity : 0, transform: 'translateY(50px)' }),
      animate(duration, style({ opacity: 1, transform: 'translateY(0)' })),
      query('*', [
        animate(
          150,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
    /*
    transition(':leave', [
      animate(duration, style({ opacity: 0, transform: 'translateY(50px)' })),
    ]),
    */
  ]);
}
