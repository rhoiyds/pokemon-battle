window.onload = function() {
	var snd = new Audio("assetts/ruby_0005.wav"); // buffers automatically when created
	var snd2 = new Audio("assetts/backgroundMusic.mp3");
	snd2.play();

	var cursorPosition = 0;
	$($(".menuHalf").get(cursorPosition)).addClass("theFocus");
	$(document).keydown(function(e) {

    switch(e.which) {
        case 37: // left
        updateCursor(cursorPosition, -1);
        break;

        case 38: // up
        updateCursor(cursorPosition, -2);
        break;

        case 39: // right
        updateCursor(cursorPosition, 1);
        break;

        case 40: // down
        updateCursor(cursorPosition, 2);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function updateCursor(current, modifier) {

	snd.play();
	
	if ((current + modifier <= 3) && (current + modifier >= 0)) {
		$($(".menuHalf").get(current)).removeClass("theFocus");
		cursorPosition = current + modifier;
		$($(".menuHalf").get(cursorPosition)).addClass("theFocus");
		
	}

}

};