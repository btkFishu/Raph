import "@babel/polyfill"
import './styles/style.scss'
import Glide from '@glidejs/glide'

import { scroll } from './scripts/navbar'
import { validate } from './scripts/validate'

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  gap: 0,
  autoplay: 5000,
  hoverpause: false,
  perTouch: 1,
  animationDuration: 1000,
  animationTimingFunc: 'ease-out'
}).mount();

window.onscroll = scroll;
window.validate = validate;