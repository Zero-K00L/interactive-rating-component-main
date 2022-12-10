const pageSwitch = document.querySelector('.hidden');
const ratingPage = document.querySelector('.rating_content_container');
const thanksPage = document.querySelector('.thanks_content_container');
const submitBtn = document.querySelector('#submit_btn');
const buttons = document.querySelectorAll('li');
var error = document.querySelector('.error_container');


for (li in buttons) {
   buttons[li].onclick = function() {
       buttons.forEach(function(btn){
         btn.classList.remove('color_change');
       })
       this.classList.add('color_change');
       error.classList.add('hidden');
   }
}

submitBtn.addEventListener('click', function(){
    var error = document.querySelector('.error_container');
    var ul = document.getElementById('rating_list');
    var items = ul.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('color_change')){
            if(thanksPage.classList.contains('hidden')){
                thanksPage.classList.remove('hidden');
                ratingPage.classList.add('hidden');
            }  

        }
        else if(ratingPage.classList.contains('hidden')) {
            error.classList.add('hidden');
        }


        else {
            error.classList.remove('hidden');
        }   
    }
});

var message = document.getElementById('submitted_rating');
var ul = document.getElementById('rating_list');
var items = ul.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('rating_1')) {
        message.innerHTML = "You selected 1 out of 5";
    }
}




/* var ul = document.getElementById('rating_list');
var items = ul.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('color_change'))
}
 */


/* submitBtn.addEventListener('click', function(){

    if(thanksPage.classList.contains('hidden')) {
        thanksPage.classList.remove('hidden');
        ratingPage.classList.add('hidden');
    }
}); */






/* submitBtn.addEventListener('click', function(){
    var error = document.querySelector('.error_container');
    var ul = document.getElementById('rating_list');
    var items = ul.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('color_change')){
            if(thanksPage.classList.contains('hidden')){
                thanksPage.classList.remove('hidden');
                ratingPage.classList.add('hidden');
            }  

        }

        else {
            error.classList.remove('hidden');
        }   
    }
}); */
