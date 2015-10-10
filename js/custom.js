/***
sine-waves.js
https://github.com/isuttell/sine-waves
 ***/

var waves = new SineWaves({
  el: document.getElementById('waves'),
  
  speed: 4,
  
  width: function() {
    return $(window).width();
  },
  
  height: function() {
    return $(window).height();
  },
  
  ease: 'SineInOut',
  
  wavesWidth: '70%',
  
  waves: [
    {
      timeModifier: 4,
      lineWidth: 1,
      amplitude: -25,
      wavelength: 25
    },
    {
      timeModifier: 2,
      lineWidth: 2,
      amplitude: -50,
      wavelength: 50
    },
    {
      timeModifier: 1,
      lineWidth: 1,
      amplitude: -100,
      wavelength: 100
    },
    {
      timeModifier: 0.5,
      lineWidth: 1,
      amplitude: -200,
      wavelength: 200
    },
    {
      timeModifier: 0.25,
      lineWidth: 2,
      amplitude: -400,
      wavelength: 400
    }
  ],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
    
    var index = -1;
    var length = this.waves.length;
      while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});

/* var videos = document.getElementsByTagName("video"), fraction = 0.8;

    function checkScroll() {

    for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var x = 0,
    y = 0,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r, //right
    b, //bottom
    visibleX, visibleY, visible,
    parent;

    parent = video;
    while (parent && parent !== document.body) {
    x += parent.offsetLeft;
    y += parent.offsetTop;
    parent = parent.offsetParent;
    }

    r = x + w;
    b = y + h;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
    video.play();
    } else {
    video.pause();
    }
    }

    }

    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);

    //check at least once so you don't have to wait for scrolling for the video to start
    window.addEventListener('load', checkScroll, false);
    checkScroll();
*/