(function() {
    var cards = document.querySelectorAll('.value-card');
    var modal = document.getElementById('valueModal');
    var closeBtn = document.getElementById('closeValueModal');
    var modalTitle = document.getElementById('modalValueTitle');
    var modalDesc = document.getElementById('modalValueDesc');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            modalTitle.textContent = card.getAttribute('data-title');
            modalDesc.textContent = card.getAttribute('data-desc');
            modal.classList.add('active');
        });
    });
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', function(e) {
        if(e.target === modal) modal.classList.remove('active');
    });
})();