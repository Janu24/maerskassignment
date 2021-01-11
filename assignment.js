$(document).ready(function(){
  $("#sort").click(function(){
    var checkarr = [];
	var i = 0;
	var len = $(".item-list").length;
	$(".item-list").each( function() {
		checkarr[i] = $(this).data("attribute");
		i++;
	});
	var sortarr = checkarr.sort(function(a,b){return a-b});
	for(var j = 0; j < len; j++) {
		var newdiv = sortarr[j];
		var clonearr = $(".item-list[data-attribute="+newdiv+"]").clone();
		var checkarr = $(".item-list[data-attribute="+newdiv+"]").remove();
		$(".left-container").append(clonearr);
	}

  });
  
  $("#shuffle").click(function(){
    var shufflearray = [];
	var m = 0;
	var len = $(".item-list").length;
	$(".item-list").each( function() {
		shufflearray[m] = $(this).data("attribute");
		m++;
	});
	for(var n = len-1; n>=0; n--) {
		var k = Math.floor(Math.random() * (n + 1));
		var temp = shufflearray[n];
        shufflearray[n] = shufflearray[k];
        shufflearray[k] = temp;	
		var clonearr = $(".item-list[data-attribute="+shufflearray[k]+"]").clone();
		var checkarr = $(".item-list[data-attribute="+shufflearray[k]+"]").remove();
		$(".left-container").append(clonearr);
	}
  });
  
});



