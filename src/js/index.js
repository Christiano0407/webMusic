// == Gsap Animation"
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".circle", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".clip", { opacity: 0 }, { opacity: 1 });

tl.fromTo(".page", { opacity: 0 }, { opacity: 1 });

tl.fromTo(
  ".navigation",
  { y: -200, opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5, duration: 0.5 },
  "<"
);
tl.to(".main__text-one", {
  x: "-25%",
  duration: 1,
  stagger: 0.25,
});
tl.fromTo(
  ".img-one",
  { y: 0, opacity: 0 },
  { y: -100, opacity: 1, delay: 1, duration: 1 },
  "<"
);
tl.fromTo(
  ".text-twoTitle",
  { x: -300, opacity: 0 },
  { x: 0, opacity: 1, delay: 1, duration: 1 }
);
tl.fromTo(
  ".textSpan",
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, delay: 1.5, duration: 1, stagger: 0.5 },
  "-=1"
);
tl.to(".textNum", { y: "5px", duration: 1 }, "-=1");

tl.fromTo(
  ".btn__click",
  { x: 0, opacity: 0 },
  { x: -30, opacity: 1, delay: 0.5, duration: 0.5 },
  "<"
);
tl.from(".two-text", { x: "300px", delay: 1, duration: 1 }, "<");
tl.fromTo(".two-list", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, "<");
tl.fromTo(
  ".two-images",
  { x: 300, opacity: 0 },
  { x: 0, opacity: 1, delay: 1, duration: 1 },
  "<"
);
//  == Barba Js ==
/* barba.init({
  transitions: [
    {
      name: "plus",
      leave: function (data) {
        let done = this.async();
        document.body.classList.add("loading");
        setTimeout(function () {
          done();
        }, 400);
      },
      enter: function (data) {
        let done = this.async();
        done();
        setTimeout(function () {
          document.body.classList.add("loading");
        }, 400);
      },
    },
  ],
}); */

barba.init({
  transitions: [
    {
      name: "prueba",
      leave: function (data) {
        var done = this.async();
        document.body.classList.add("loading");
        setTimeout(function () {
          done();
        }, 900);
      },
      enter: function (data) {
        var done = this.async();
        done();
        setTimeout(function () {
          document.body.classList.remove("loading");
        }, 900);
      },
    },
  ],
});
