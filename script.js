function updateClock() {
    var date = new Date()
    document.getElementById('date').innerHTML = date;
    setTimeout(updateClock, 1000);
}
updateClock();

$("#slideshow div:gt(0)").hide();

setInterval(function() {
  $('#slideshow div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  2000);
