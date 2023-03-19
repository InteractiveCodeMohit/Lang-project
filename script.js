 
console.log("welcome")
$(document).ready(function() {
    $("#HTML").click(function() {
    $("#myImg").attr({"src": "images/html.jpg"});
    $("#media").attr({"src": "images/HTML-5.png"});
    $(".p-1").text("HTML");
    $(".content").text("HTML allows users to create and structure sections, headings, links, paragraphs, and more, on a website using various tags and elements. Almost everything you want to create on a web page can be done using a specific HTML code.");

    });
    $("#CSS").click(function() {
    $("#myImg").attr({"src": "images/css.jpg"});
    $("#media").attr({"src": "images/css-3.png"});
    $(".p-1").text("CSS");
    $(".content").text("CSS helps us to control the text color, font style, the spacing between paragraphs, sizing of columns, layout designs, and many more. It is independent of HTML, and we can use it with any XML-based markup language.");
   
    });
    $("#JAVASCRIPT").click(function() {
    $("#myImg").attr({"src": "images/javascript.jpg"});
    $("#media").attr({"src": "images/js.png"});
    $(".p-1").text("JAVASCRIPT");
    $(".content").text("JavaScript's most popular use is for web development, Developers use JavaScript in web development to add interactivity and features to improve the user experience and make the internet much more enjoyable.")
    
    });
    $("#REACT").click(function() {
    $("#myImg").attr({"src": "images/react-1.jpg"});
    $("#media").attr({"src": "images/react.png"});
    $(".p-1").text("REACT.JS");
    $(".content").text("One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application.")
  
    });
    $("#NODE").click(function() {
    $("#myImg").attr({"src": "images/node-5.jpg"});
    $("#media").attr({"src": "images/nodejs.png"});
    $(".p-1").text("NODE.JS");
    $(".content").text("Node. js is single-threaded, we use it primarily for non-blocking, event-driven servers. We can also use Node. js for traditional websites and back-end API services, as it was designed with real-time, push-based architectures in mind.")

    });

     $("#clk").click(function(){
    $("nav").toggle("slow");
    $("nav").css("position: 'absolute'");

  });
    
    });
