$(document).ready(function () {
  
  $(".up_min_nav .button").on("click", function () {
    $(".up_min_nav .up_navigation_menu .button.active").removeClass("active");
    $(this).addClass("active");

    var pan = $(this).attr("rel");

    $(".up_min_nav .up_navigation__main__tab.active").slideUp(300, shown);
    function shown() {
      $(this).removeClass("active");

      $("#" + pan).slideDown(300, function () {
        $(this).addClass("active");
      });
    }
  });

  $(".up_navigation__main__tab .up_min__tab li").on("click", function () {
    var tab = $(this).closest(".up_navigation__main__tab");
    tab.find(".up_min__tab li.active").removeClass("active");
    $(this).addClass("active");
    var show = $(this).attr("rel");
    tab.find(".up_tab__menu.active").slideUp(300, shownext);
    function shownext() {
      $(this).removeClass("active");

      $("#" + show).slideDown(300, function () {
        $(this).addClass("active");
      });
    }
  });

  $(".card-header").click(function () {
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp();
      $(this)
        .children("span")
        .removeClass("fa-angle-right")
        .addClass("fa-angle-down");
    } else {
      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span")
        .removeClass("fa-angle-right")
        .addClass("fa-angle-down");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this)
        .children("span")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-right");
    }
  });

  //menu widget code
  $("#acadunit__menu").menu();
  $("#acadunit__button").click(function () {
    $("#acadunit__menu").slideToggle(300);
  });

  //birdthday huhu
  $("#datepicker").datepicker();

  //province
  var availableTags = [
    "Agusan del Norte",
    "Agusan del Sur",
    "Alabel",
    "Basilan",
    "Bukidnon",
    "Camiguin",
    "Davao de Oro",
    "Davao del Norte",
    "Davao del Sur",
    "Davao Occidental",
    "Davao Oriental",
    "Dinagat Islands",
    "Lanao del Norte",
    "Lanao del Sur",
    "Maguindanao",
    "Misamis Occidental",
    "Misamis Oriental",
    "North Cotabato",
    "South Cotabato",
    "Sultan Kudarat",
    "Sulu",
    "Surigao del Norte",
    "Surigao del Sur",
    "Tawi-Tawi",
    "Zamboanga del Norte",
    "Zamboanga del Sur",
    "Zamboanga Sibugay",
  ];

  $("#input_province").autocomplete({
    source: availableTags,
  });

  //year
  var spinner = $("#input_year")
    .spinner({
      min: 1,
      max: 4,
    })
    .data(spinner);

  $("#submission").click(function(){
    var firstName = $("#input_fname").val();
    var lastName = $("#input_lname").val();
    var middleName = $("#input_mname").val();
    var sex = $("input[type='radio'][name='sex']:checked").val();
    var dateOfBirth = $("#datepicker").val();
    var province = $("#input_province").val();
    var year = $("#input_year").val();
    
    var userDetails = "User Details\n\nFirst Name: " + firstName + "\nMiddle Name: " + middleName + "\nLast Name: " + lastName + "\nSex: " + sex + "\nDate Of Birth: " + dateOfBirth + "\nProvince: " + province + "\nYear: " + year;
    
    var blob = new Blob ([userDetails], 
      {
        type:"application/json;utf - 8"
      }
    )

    var userLink = document.createElement('a');
    userLink.setAttribute('download','user.txt');
    userLink.setAttribute('href', window.URL.createObjectURL(blob));
    userLink.click();
  })
});
