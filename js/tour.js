/* Tour section: phones settle into place (and arrows draw) when it scrolls into view. */
(function(){
  var t=document.querySelector(".tour"); if(!t) return;
  if(!("IntersectionObserver" in window)){t.classList.add("is-in");return;}
  var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){t.classList.add("is-in");io.disconnect();}},{threshold:.25});
  io.observe(t);
})();
