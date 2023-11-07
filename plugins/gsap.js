import gsap from 'gsap'
import 'intersection-observer'

// Optional: Register GSAP plugins you need (e.g., ScrollTrigger)
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default ({ app }, inject) => {
  inject('gsap', gsap)
}