const pageSwitch = document.querySelector('.hidden');
const ratingPage = document.querySelector('.rating_content_container');
const thanksPage = document.querySelector('.thanks_content_container');
const submitBtn = document.querySelector('#submit_btn');
const buttons = document.querySelectorAll('li');



for (li in buttons) {
   buttons[li].onclick = function() {
       buttons.forEach(function(btn){
         btn.classList.remove('color_change');
       })
       this.classList.add('color_change');
   }
}

submitBtn.addEventListener('click', function(){

    if(thanksPage.classList.contains('hidden')) {
        thanksPage.classList.remove('hidden');
        ratingPage.classList.add('hidden');
    }
});


