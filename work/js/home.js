//Typed.js
var typed = new Typed('#hi', {
    strings: [
        "constantly seeking new challenges to push my boundaries, whether it's diving into complex algorithms or exploring new artistic mediums.",
        "committed to sharing my knowledge with others and fostering a love of learning in others.  ",
        "not just a coder or an artist.",
        "a creator of solutions, a synthesizer of ideas, and a seeker of knowledge.",
    ],
    typeSpeed: 100,
    loop: true,
});



//Nav links
function goHome() {
    $("#home").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#homeの").show();
    $("#blogの").hide();
    $("#projectsの").hide();
}

function goBlog() {
    $("#blog").addClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#blogの").show();
    $("#homeの").hide();
    $("#projectsの").hide();

    $.get("https://#", function (data) {
        $('#blogs').empty();
        $(data).find('item').each(function () {
            var $item = $(this);
            var title = $item.find('title').text();
            var link = $item.find('link').text();
            //var description = $item.find('description').text();
            //var pubDate = $item.find('pubDate').text();
            var html = "<div class=\"box-item\">";
            html += "<b>" + title + "</b>";
            //html += "<em>" + timeString(pubDate) + "</em>";
            //html += "<p>" + description + "</p>";
            html += "&nbsp;&nbsp;->&nbsp;&nbsp;<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
            html += "</div>";
            
            $('#blogs').append(html);
        });
    });
}

function goProjects() {
    $("#projects").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projectsの").show();
    $("#blogの").hide();
    $("#homeの").hide();
}





function addCurrentTimeToLink2()  {
      //var datePicker = document.getElementById("datePicker");
      var currentDate = new Date();
      var year = currentDate.getFullYear();
      var month = String(currentDate.getMonth() + 1).padStart(2, "0");
      var day = String(currentDate.getDate()).padStart(2, "0");
      // <!-- var formattedDate = year + "-" + month + "-" + day; -->
      var formattedDate = month + day;
      // <!-- datePicker.value = formattedDate; -->
      var link = document.getElementById("myLink");  
      
      var domain = window.location.hostname;  
      if (domain === "gz.work.abiuni.com") {  
            link.href = "https://sg.work.abiuni.com:2" + formattedDate+"/index.html";  
      } else {  
            link.href = "https://gz.work.abiuni.com/index.html";  
      }
    };

function addCurrentTimeToLink() {  
      var currentTime = new Date();  
      var hours = currentTime.getHours();  
      var minutes = currentTime.getMinutes();  
      var seconds = currentTime.getSeconds();  
      var time = hours + ":" + minutes + ":" + seconds;  
      var link = document.getElementById("myLink");  
      link.href = "http://example.com/?time=" + time;  
    }  

function addCurrentTimeToLinkWeb2()  {
      //var datePicker = document.getElementById("datePicker");
      var currentDate = new Date();
      var year = currentDate.getFullYear();
      var month = String(currentDate.getMonth() + 1).padStart(2, "0");
      var day = String(currentDate.getDate()).padStart(2, "0");
      // <!-- var formattedDate = year + "-" + month + "-" + day; -->
      var formattedDate = month + day;
      // <!-- datePicker.value = formattedDate; -->
      var link = document.getElementById("myLinkWeb2");  
      link.href = "https://sg.work.abiuni.com:2" + formattedDate+"/web2/index.html";  
    };
