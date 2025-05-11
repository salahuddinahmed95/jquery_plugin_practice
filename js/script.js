
// jq plugin
$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 100,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});


$(".count").each(function () {
  
   $(this)
  
  .prop("Counter", 0)
  
  .animate(
  
    {
  
      Counter: $(this).text(),
  
    },
  
    {
  
      duration: 4000,
  
      easing:"swing",
  
      step:function (now) {
  
        now = Number(Math.ceil(now)).toLocaleString('en');
  
                              $(this).text(now);
  
      },
  
    }
  
  );
  
  });


   var countdown = $("#countdown").countdown360({

   radius      : 60,

   seconds     : 100,

   fontColor   :'#FFFFFF',

   autostart   :false,

   onComplete  :function () { console.log('done') }

   });
   var countdown = $("#countdown").countdown360({
    radius: 15.5,
    strokeStyle:"#477050",
    strokeWidth: undefined,
    fillStyle:"#8ac575",
    fontColor:"#477050",
    fontFamily:"sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart:true,
    seconds: 10,
    label: ["second","seconds"],
    startOverAfterAdding:true,
    smooth:false,
    onComplete:function () {}

   });


   $(function(){

   $('[data-id=default]').dropdown();

   });

   $(function(){

$('[data-id=default]').dropdown({


 // or 'fade'

 animate:'slide',


 // animation speed in ms

 animateSpeed: 250,

  

  });

  });



  
