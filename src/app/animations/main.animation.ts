import { style, transition, trigger, animate} from '@angular/animations';


export const listAnimation = trigger('itemAnim', [
    // Entry Animation
    transition('void => *', [
        style({
            height: 0,
            opacity: 0,
            transform: 'scale(0.8)',
            'margin-bottom': 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }),
        animate('50ms', style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingLeft: '*',
            paddingRight: '*'
        })),
        animate(150)
    ]),
    // Delete Animation
    transition('* => void', [
        animate(60, style({
            transform: 'scale(1.3)'
        })),
        animate(60, style({
            transform: 'scale(1)',
            opacity: 0.8
        })),
        animate('120ms ease-out', style({
            transform: 'scale(0.7)',
            opacity: 0.5
        })),
        animate('150ms ease-out', style({
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            'margin-bottom': '0',
        }))
    ])
])