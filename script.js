document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
    const summaryContainer = document.getElementById('summary');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const summary = [];
        for (const [key, value] of formData.entries()) {
            summary.push(`<strong>${key}:</strong> ${value}`);
        }
        summaryContainer.innerHTML = summary.join('<br>');
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        form.reset();
    });

    form.addEventListener('reset', function() {
        summaryContainer.innerHTML = '';
    });
});