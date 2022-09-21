

function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
}

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!audio) return;

   key.classList.add('playing');
   audio.currentTime = 0;
   audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// window.addEventListener('keydown', function(e){
//    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//    // console.log(audio);
//    if(!audio) return;
//    audio.currentTime = 0;
//    audio.play();
//    // console.log(key);
//    key.classList.add('playing');
   
// });

// function removeTransition(e){
//    if(e.propertyName !== 'transform') return; 
//    this.ClassList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));