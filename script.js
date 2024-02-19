
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
})
tl.to("#pic1", {
    width: "35%",
    top: "135%",
    rotate: "120deg",
    left: "0%"
},)

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
    }
})
tl2.to("#pic1", {
    width: "26%",
    top: "220%",
    left: "38%",
}, 'ca')



