$(document).ready(function(){

	$(function(){
     $('a[href*=#]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 800);
                 return false;
            }
       }
     });
    });

});


var ctx = document.getElementById("monChart");
var incomeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Quarter1", "Quarter2", "Quarter3", "Quarter4"],
    datasets: [{
      label: "In Millions",
      backgroundColor: "rgba(45,168,103,.4)",
      borderColor: "rgba(45,168,103,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(58,158,195,.4)",
      hoverBorderColor: "rgba(58,158,195,1)",
      responsive:true,
      data: [2911, 2636, 2230, 1937],
    }]
  },
  options: {
    legend: {
      labels: {
        fontFamily: "Lato",
        fontSize: 14,
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})

function beginTick(){
  nIntervId = setInterval(tick, 5000);
}


var ctx = document.getElementById("salChart");
var incomeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2018", "2017", "2016", "2015", "2014"],
    datasets: [{
      label: "In Millions",
      backgroundColor: "rgba(45,168,103,.4)",
      borderColor: "rgba(45,168,103,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(58,158,195,.4)",
      hoverBorderColor: "rgba(58,158,195,1)",
      responsive:true,
      data: [9714, 6910, 5010, 4682, 4130],
    }]
  },
  options: {
    legend: {
      labels: {
        fontFamily: "Lato",
        fontSize: 14,
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})