/* Footer bubbles: rise slowly, pop on click/tap. Pauses off-screen. */
(function(){
  var f=document.querySelector(".foot"); if(!f) return;
  var c=f.querySelector(".foot__bubbles"), x=c.getContext("2d");
  var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W,H,dpr,bs=[],ps=[],run=false,last=0,cols=["200,80,192","65,88,208","255,255,255"];
  function size(){dpr=Math.min(devicePixelRatio||1,2);W=f.clientWidth;H=f.clientHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);}
  function mk(init){var r=7+Math.random()*20;return{x:Math.random()*W,y:init?Math.random()*H:H+r+Math.random()*60,r:r,v:12+Math.random()*22,ph:Math.random()*6.28,c:cols[Math.random()*3|0]};}
  function fill(){var n=Math.round(Math.min(34,Math.max(14,W/38)));while(bs.length<n)bs.push(mk(bs.length<n));}
  function pop(b){bs.splice(bs.indexOf(b),1);ps.push({t:0,x:b.x,y:b.y,r:b.r,c:b.c});for(var i=0;i<9;i++){var a=i/9*6.28+Math.random()*.5;ps.push({d:1,x:b.x,y:b.y,vx:Math.cos(a)*(40+Math.random()*50),vy:Math.sin(a)*(40+Math.random()*50),t:0,c:b.c});}
    setTimeout(function(){bs.push(mk(false));},500);}
  function draw(b){var g=x.createRadialGradient(b.x-b.r*.35,b.y-b.r*.35,b.r*.1,b.x,b.y,b.r);g.addColorStop(0,"rgba(255,255,255,.35)");g.addColorStop(.7,"rgba("+b.c+",.08)");g.addColorStop(1,"rgba("+b.c+",.30)");
    x.beginPath();x.arc(b.x,b.y,b.r,0,6.283);x.fillStyle=g;x.fill();x.lineWidth=1.2;x.strokeStyle="rgba("+b.c+",.55)";x.stroke();
    x.beginPath();x.arc(b.x-b.r*.38,b.y-b.r*.38,b.r*.16,0,6.283);x.fillStyle="rgba(255,255,255,.8)";x.fill();}
  function frame(t){if(!run)return;try{step(t);}catch(e){ps=[];}requestAnimationFrame(frame);}
  function step(t){var dt=Math.min(.05,(t-last)/1000||0);last=t;x.clearRect(0,0,W,H);
    bs.forEach(function(b){if(!reduce){b.y-=b.v*dt;b.x+=Math.sin(t/900+b.ph)*10*dt;}if(b.y<-b.r-4){b.y=H+b.r;b.x=Math.random()*W;}draw(b);});
    ps=ps.filter(function(p){p.t+=dt;if(p.d){p.x+=p.vx*dt;p.y+=p.vy*dt;x.beginPath();var k2=Math.max(0,1-p.t/.5);x.arc(p.x,p.y,2.2*k2,0,6.283);x.fillStyle="rgba("+p.c+","+k2+")";x.fill();return p.t<.5;}
      var k=p.t/.35;x.beginPath();x.arc(p.x,p.y,Math.max(0,p.r*(1+k*.6)),0,6.283);x.lineWidth=2;x.strokeStyle="rgba("+p.c+","+Math.max(0,1-k)+")";x.stroke();return k<1;});}
  function popAt(px,py,rad){var n=0;bs.slice().forEach(function(b){if(Math.hypot(b.x-px,b.y-py)<b.r+rad){setTimeout(function(){if(bs.indexOf(b)>-1)pop(b);},n*70);n++;}});return n;}
  function pos(e){var r=c.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];}
  var down=false;
  f.addEventListener("pointerdown",function(e){if(e.target.closest("a"))return;down=true;var p=pos(e);var n=popAt(p[0],p[1],12);
    /* tap on empty space: pop the closest bubble so a tap always does something */
    if(!n){var best=null,bd=1e9;bs.forEach(function(b){var d=Math.hypot(b.x-p[0],b.y-p[1]);if(d<bd){bd=d;best=b;}});if(best&&bd<best.r+40)pop(best);}
    else{/* chain reaction: neighbours of what was popped follow */bs.slice().forEach(function(b){if(Math.hypot(b.x-p[0],b.y-p[1])<b.r+70&&bs.indexOf(b)>-1&&Math.random()<.6)setTimeout(function(){if(bs.indexOf(b)>-1)pop(b);},180+Math.random()*260);});}});
  f.addEventListener("pointermove",function(e){if(e.pointerType==="mouse"&&(down||e.buttons)){var p=pos(e);popAt(p[0],p[1],4);}});
  addEventListener("pointerup",function(){down=false;});
  addEventListener("pointercancel",function(){down=false;});
  size();fill();
  if(reduce){bs.forEach(draw);}
  new IntersectionObserver(function(en){var on=en[0].isIntersecting;if(on&&!run){run=true;last=performance.now();requestAnimationFrame(frame);}else if(!on)run=false;}).observe(f);
  addEventListener("resize",function(){size();bs.forEach(function(b){b.x=Math.min(b.x,W);});fill();});
  window.__footBubbles={bubbles:function(){return bs;}};
})();
