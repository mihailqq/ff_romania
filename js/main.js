$(".scrolldown").click(function () {
   $('html, body').animate({
      scrollTop: $(".toform").offset().top
   }, 1000)
});
var  time = 600;
var intr;
	 function start_timer() {
		intr = setInterval(tick, 1000);
	}
function tick() {
	time = time - 1;
	var mins = Math.floor(time / 60);
	var secs = time - mins * 60;
	if (mins == 0 && secs == 0) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
	$("#min").html(mins);
	$("#sec").html(secs);
}
start_timer();