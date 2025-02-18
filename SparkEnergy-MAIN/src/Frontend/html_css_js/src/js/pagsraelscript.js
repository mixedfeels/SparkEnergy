gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".box");
ScrollTrigger.defaults({
  markers: false,
});
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#container-slider-conteudo",
    pin: true,
    scrub: 1,
    snap: 0 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#container-slider-conteudo").offsetWidth
  }
});