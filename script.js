var count = 0;
var right=0;
var wrong=0;
let currentTime;
let timer = [0,0,0,0];
let timerInterval;
var timerRunning = false;



function initMap() {
       //timer starts when the page loads
       timerRunning = true;
      let theTimer = document.getElementById("timer");
       timerInterval = setInterval(runTimer, 10); 
           
            function leadingZero(time) {
              if (time <= 9) {
                  time = "0" + time;
              }
              return time;
          }

          // Functipn that runs a standard minute/second/hundredths timer:
          function runTimer() {
          
               currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
              // console.log("test"+currentTime);
               theTimer.innerHTML = currentTime;
              timer[3]++;
              timer[0] = Math.floor((timer[3]/100)/60);
              timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
              timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

          }
    // Disabling zooming and panning features
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
        disableDoubleClickZoom: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        zoom: 16.59,
        zoomControl : false,
        fullscreenControl: false,
        streetViewControl: false,
       
        
        center: new google.maps.LatLng(34.23888097725523, -118.52896221335371),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
          styles: [{
            "featureType": "poi",
                "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
             elementType: "labels",
                "stylers": [{
                "visibility": "off"
            }]
        },
           {
          "featureType": "road.local",
          "stylers": [
            { "visibility": "off" }
          ]
        },
           {
            "featureType": "transit",
            "stylers": [{
            "visibility": "off"
            }]
        },
            ],
       });

// function to fade-in questions one by one
        $(document).ready(function () {
              $(".questions").hide();
            $("#q1").fadeIn('slow');

          });
  //function to fill the color for exact answer location 
      function mapdraw(a, b, c, d, z) {

          var rectangle = new google.maps.Rectangle({
              strokeColor: z,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: z,
              fillOpacity: 0.35,
              map: map,
              bounds: new google.maps.LatLngBounds(
              new google.maps.LatLng(a, b),
              new google.maps.LatLng(c, d))
          });
      }

  //function to validate the answer when user double clicks on the location
       google.maps.event.addListener(map, 'dblclick', function (event) {
        count++; 
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
     
         let notify = document.getElementById("status");
//       My assigned location is "Experimental theatre" 1st question
       switch(count){
         case 1:
            if ( lat<=34.23663544066909 && lat>=34.23631547952456 && lng>=-118.52792943358803 && lng<=-118.52755624828858) {
           mapdraw(34.23631547952456, -118.52792943358803, 34.23663544066909, -118.52755624828858, 'green');
            //notifies the user if the selected answer is right or wrong, used fontawesome to display icons               
              notify.innerHTML="Awesome! "+'<i class="fa fa-check" style="color:green;" aria-hidden="true"></i>';

             $(".right").show().delay(2000).fadeOut("slow");
                  $("#q2").fadeIn('slow');
                right++;
             }
           else{
            mapdraw(34.23631547952456, -118.52792943358803, 34.23663544066909, -118.52755624828858, 'red');
            $(".wrong").show().delay(2000).fadeOut("slow");
                  $("#q2").fadeIn('slow');
             notify.innerHTML="OOPS "+'<i class="fa fa-times" aria-hidden="true"></i>';

            wrong++;
               }
           break;
           
         case 2:
             if (lat<=34.240399 && lat>=34.23977827651964 && lng>=-118.53002444241488 && lng<=-118.528622) {
            mapdraw(34.23977827651964, -118.53002444241488, 34.240399, -118.528620, 'green');
               notify.innerHTML="You are right! "+'<i class="fa fa-check" style="color:green;" aria-hidden="true"></i>';

             $(".right").show().delay(2000).fadeOut("slow");
                  $("#q3").fadeIn('slow');
            right++;
                 }
            else{
            mapdraw(34.23977827651964, -118.53002444241488, 34.240399, -118.528620, 'red');
            $(".wrong").show().delay(2000).fadeOut("slow");
                  $("#q3").fadeIn('slow');
              notify.innerHTML="That's incorrect "+'<i class="fa fa-times" aria-hidden="true"></i>';
                    wrong++;
               }
           break;
           
         case 3:
           if ( lat<=34.240693 && lat>=34.239912 && lng>=-118.531447 && lng<=-118.530127) {
           mapdraw(34.239913, -118.531446,34.240693, -118.530127, 'green');
              notify.innerHTML="That's great! "+'<i class="fa fa-check" style="color:green;" aria-hidden="true"></i>';
             $(".right").show().delay(2000).fadeOut("slow");
                  $("#q4").fadeIn('slow');
            right++;
             }
           else{
            mapdraw(34.239912, -118.531447,34.240693, -118.530127, 'red');
            $(".wrong").show().delay(2000).fadeOut("slow");
                  $("#q4").fadeIn('slow');
             notify.innerHTML="OOPS "+'<i class="fa fa-times" aria-hidden="true"></i>';
                    wrong++;
             }
           break;
           
         case 4:
           if ( lat<=34.23837403135573 && lat>=34.238187912455786 && lng>=-118.52875675977879 && lng<=-118.52769412992262) {
           mapdraw(34.238187912455786, -118.52875675977879,34.23837403135573, -118.52769412992262, 'green');
              notify.innerHTML="You are right! "+'<i class="fa fa-check" style="color:green;" aria-hidden="true"></i>';
             $(".right").show().delay(2000).fadeOut("slow");
                  $("#q5").fadeIn('slow');
            right++;
              }
           else{
            mapdraw(34.238548, -118.528787,34.238757, -118.527671, 'red');
            $(".wrong").show().delay(2000).fadeOut("slow");
                  $("#q5").fadeIn('slow');
               notify.innerHTML="That's incorrect "+'<i class="fa fa-times" aria-hidden="true"></i>';
                    wrong++;
               }
           break;
           
         case 5:
             if ( lat<=34.238447 && lat>=34.238107 && lng>=-118.531385 && lng<=-118.530028) {
           mapdraw(34.238107, -118.531385,34.238447, -118.530028, 'green');
            notify.innerHTML="You are right! "+'<i class="fa fa-check" style="color:green;" aria-hidden="true"></i>';
               
             $(".right").show().delay(2000).fadeOut("slow");
            right++;
             $(".questions").hide();
               $("#status").hide();
                document.getElementById('total').innerHTML ="Number of Right Answers: " + right;
                document.getElementById('totalw').innerHTML ="Number of Wrong Answers: " + wrong;
                }
             else{
            mapdraw(34.238107, -118.531385,34.238447, -118.530028, 'red');
            $(".wrong").show().delay(2000).fadeOut("slow");
               $("#status").hide();
               notify.innerHTML="That's incorrect "+'<i class="fa fa-times" aria-hidden="true"></i>';
                    wrong++;
                    $(".questions").hide();
                document.getElementById('total').innerHTML ="Number of Right Answers: " + right;
                document.getElementById('totalw').innerHTML ="Number of Wrong Answers: " + wrong;
             }
           
           //timer stops when the player done with 5 questions
          clearInterval(timerInterval);
          timerInterval = null;
          timer = [0,0,0,0];
          timerRunning = false;
           break;
           
         default:
           break;
       

    }
    });
}

