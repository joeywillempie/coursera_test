(function (window){
var helloSpeaker = {};
var speakWord = "Hello";
 
helloSpeaker.speak = function(helloSpeaker) {
  console.log(speakWord +" "+ helloSpeaker);
}
window.helloSpeaker = helloSpeaker;

})(window);
