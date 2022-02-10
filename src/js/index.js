const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(
  ".img-one",
  { y: "-500px", opacity: 0 },
  { y: "-50px", opacity: 1, delay: 1, duration: 1 }
);

tl.to(".main__text-one", {
  x: "-25%",
  duration: 1,
  stagger: 0.25,
});

tl.fromTo(
  ".text-twoTitle",
  { x: "-300px", opacity: 0 },
  { x: "0", opacity: 1, delay: 1, duration: 1 }
);

tl.fromTo(
  ".textSpan",
  { x: "-200", opacity: 0 },
  { x: "0px", opacity: 1, delay: 1.5, duration: 1, stagger: 0.5 },
  "-=1"
);

tl.to(".textNum", { y: "5px", duration: 1 }, "-=1");
