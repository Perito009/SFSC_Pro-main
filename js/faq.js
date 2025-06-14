function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = '-';
    }
}
