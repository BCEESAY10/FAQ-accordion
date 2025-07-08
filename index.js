const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item) => {
    let button = item.querySelector("button");

    button.addEventListener('mouseenter', () => {
        button.focus();
    })

    button.addEventListener('click', () => {
        expand(item);
    })
})

// Expan Answers
const expand = (item) => {
    let answer = item.querySelector('p');
    let icon = item.querySelector('img');
    let isOpen = false;
    answer.classList.contains('hidden') ? isOpen=false : isOpen=true;

    if(!isOpen){
        answer.classList.remove('hidden');
        icon.src = icon.src.replace('assets/images/icon-plus.svg', 'assets/images/icon-minus.svg');
    } else{
        answer.classList.add('hidden');
        icon.src = icon.src.replace('assets/images/icon-minus.svg', 'assets/images/icon-plus.svg');
    }

}