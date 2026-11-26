/* Project type filter: shows only cards whose data-cats include the chosen type. */
(function(){
  var bar=document.querySelector(".pfilter"); if(!bar) return;
  var cards=[].slice.call(document.querySelectorAll(".proj-card[data-cats]")), empty=document.querySelector(".pfilter__empty");
  function apply(f){
    var n=0;
    cards.forEach(function(c){
      var ok=f==="all"||(" "+c.getAttribute("data-cats")+" ").indexOf(" "+f+" ")>-1;
      c.hidden=!ok; c.classList.remove("is-alt");
      if(ok){ if(n%2===1) c.classList.add("is-alt"); n++; c.classList.add("is-in"); }
    });
    if(empty) empty.hidden=n>0;
    [].forEach.call(bar.querySelectorAll(".pfilter__b"),function(b){b.classList.toggle("is-on",b.getAttribute("data-f")===f);b.setAttribute("aria-pressed",b.getAttribute("data-f")===f);});
    try{history.replaceState(null,"",f==="all"?location.pathname:"#"+f);}catch(e){}
  }
  bar.addEventListener("click",function(e){var b=e.target.closest(".pfilter__b"); if(b) apply(b.getAttribute("data-f"));});
  var h=(location.hash||"").slice(1); apply(bar.querySelector('[data-f="'+h+'"]')?h:"all");
})();
