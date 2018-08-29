Pts.quickStart( "#hello", "#252838" );

//// Demo code starts (anonymous function wrapper is optional) ---

(function() {
  
  var pts = new Group();

  space.add({ 

    // creatr 200 random points
    start:( bound ) => {
      pts = Create.distributeRandom( space.innerBound, 200 );
    }, 

    animate: (time, ftime) => {
      // make a line and turn it into an "op" (see the guide on Op for more)
      let perpend = new Group( space.center.$subtract(0.1), space.pointer ).op( Line.perpendicularFromPt );
      pts.rotate2D( 0.0005, space.center );

      pts.forEach( (p, i) => {
        // for each point, find the perpendicular to the line
        let lp = perpend( p );
        var ratio = Math.min( 1, 1 - lp.$subtract(p).magnitude()/(space.size.x/2) );
        form.stroke(`rgba(255,255,255,${ratio}`, ratio*0.5).line( [ p, lp ] );
        form.fillOnly( ["#f03", "#09f", "#0c6"][i%2] ).point( p, 1 );
      });
    },

  });
  
  //// ----
  

  space.bindMouse().bindTouch().play();

})();
