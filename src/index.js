import "./scss/index.scss"

import {gsap} from "gsap"
// import {MorphSVGPlugin} from "node_modules/gsap/MorphSVGPlugin"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const $ = (selector, base = document) => base.querySelector(selector)
// const $$ = (selector, base = document) =>
//   Array.prototype.slice.call(base.querySelectorAll(selector))

// gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(ScrollTrigger)

// const root = $("#root")

// const box1 = $(".box-1")

const wavesSection = $(".wave-container")
const wavesContainer = $(".wave-container")

gsap.to(wavesContainer, {
  scrollTrigger: {
    trigger: wavesSection,
    markers: true,
    pin: wavesContainer,
  },
})

const spaghetti1 = $(".spaghetti--1")
const spaghetti2 = $(".spaghetti--2")
const spaghetti3 = $(".spaghetti--3")
const salt = $(".salt")

gsap.from(spaghetti1, {
  y: () => wavesSection.offsetHeight * -1.2,
  scrollTrigger: {
    trigger: wavesSection,
    scrub: 1,
    markers: true,
    pin: spaghetti1,
  },
})

gsap.from(spaghetti2, {
  y: () => wavesSection.offsetHeight * -1.2,
  scrollTrigger: {
    trigger: wavesSection,
    scrub: 1,
    markers: true,
    pin: spaghetti2,
  },
})

gsap.from(spaghetti3, {
  y: () => wavesSection.offsetHeight * -1.2,
  scrollTrigger: {
    trigger: wavesSection,
    scrub: 1,
    markers: true,
    pin: spaghetti3,
  },
})

gsap.from(salt, {
  y: () => wavesSection.offsetHeight * -1.2,
  scrollTrigger: {
    trigger: wavesSection,
    scrub: 1,
    markers: true,
    pin: salt,
  },
})