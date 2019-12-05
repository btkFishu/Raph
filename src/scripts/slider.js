import Glide from '@glidejs/glide'

// add carousel
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