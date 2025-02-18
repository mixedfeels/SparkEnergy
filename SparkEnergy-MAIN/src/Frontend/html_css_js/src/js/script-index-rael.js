/*]
(function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
  
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);;
  */

  /*
gsap.registerPlugin(ScrollTrigger); 

const contents = gsap.utils.toArray("#slidehorizontal .boxenergia");

gsap.to(contents, {
    xPercent: -100 * (contents.length - 1),

});*/

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".boxenergia");
ScrollTrigger.defaults({
  markers: false,
});
gsap.to(sections, {
  xPercent: -120 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#container-slider",
    pin: true,
    scrub: 1,
    snap: 0 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#container-slider").offsetWidth
  }
});