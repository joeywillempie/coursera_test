(function () {
	var speakWord = "GoodBye";
	var byeSpeaker = {};
byeSpeaker.speak = function(byeSpeaker) {
  console.log(speakWord + byeSpeaker);
}
window.byeSpeaker = byeSpeaker;
})(window);
