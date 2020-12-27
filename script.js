
window.onload = function () {
    
    document.querySelectorAll('.voting-option-container')
        .forEach(voted => voted.addEventListener('click', function(){
            voted.querySelector('.voting-option-percent').classList.add('voting-option-voted');
            document.querySelector('.voting-options').style.pointerEvents = 'none';
    
            document.querySelectorAll('.voting-option-container').forEach((option) => {
                option.querySelector('.progress-bar').style.width = '33%';
                option.querySelector('.voting-separator').style.display = 'inline-block';
                option.querySelector('.voting-option-counter').style.display = 'inline-block';
                option.querySelector('.voting-option-percent').style.display = 'block';
            })
        }));
}