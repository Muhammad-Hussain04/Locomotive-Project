function loading() {
  let tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.6,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.1,
      duration: 0.6,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      delay: 0.1,
      duration: 0.6,
      color: "black",
      //  ease:"expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader",
    {
      opacity: 0,
      duration: 0,
    },
    "hehe"
  );
  tl.to(
    ".loader",
    {
      display: "none",
      duration: 0,
    },
    "hehe"
  );
  // tl.to(".page1",{
  //     top:"100%"
  // });
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// var elems = document.querySelectorAll(".elem");
// var page2 = document.querySelector(".page2");
// elems.forEach(function(ele){
//   ele.addEventListener("mouseenter", function(){
//     var  bgimg = ele.getAttribute("data-img");
//     page2.style.backgroundImage = 'url(${bgimg})';
//     // console.log("bgimg")
//   });
// });


var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");

elem.forEach((item)=>{
   item.addEventListener("mouseenter",()=>{
       var bgImg = item.getAttribute("data-img");
       page2.style.backgroundImage = `url(${bgImg})`
       
   
   })
})
