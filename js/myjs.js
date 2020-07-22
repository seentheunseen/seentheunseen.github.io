window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//remove inspect element
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

$(function(){
	
  $("section").SnapScroll();

});

$("section").SnapScroll({

  // Add classes to elements
  classes:true,                   

  // Class applied to snap point elements
  classSnap:"snap-scroll",              

  // Class applied to a snap point element when within the window
  classVisible:"snap-scroll-visible",         

  // Class applied to a snap point element when snapped
  classActive:"snap-scroll-active",         

  // Use element id in hash
  hashes:false,                   

  // Delay between scroll events needed to trigger scroll action
  scrollDelay:300,                  

  // Interval used for wheel to trigger scroll action
  wheelInterval:1000,                 

  // The amount of time it takes to animate to a snap point
  animateDuration:250,       

  // The amount of time to wait after an animation is complete before scrolling can be triggered         
  animateTimeBuffer:100,                

  // Snap to the top of page regardless of there being an element
  snapTop:true,           

  // Snap to the bottom of page regardless of there being an element        
  snapBottom:true,                  

  // Extra snap points not tied to an element
  snaps:[],                     

  // Deviation in milliseconds from the average needed to separate wheel events
  maxWheelDeviation:100       

});

$("section").SnapScroll({

  // Fires events
  events:true,                    
  
  // Fires when snap point element when snapped
  eventChangeActive:"snapscroll_change-active",   
  
  // Fires when snap point element is within the window
  eventChangeVisible:"snapscroll_change-visible",   

});