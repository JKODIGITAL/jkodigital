let currentSlide = 1;
const totalSlides = 4;

function nextSlide() {
    if (currentSlide < totalSlides) {
        document.getElementById(`slide${currentSlide}`).classList.remove('active');
        currentSlide++;
        document.getElementById(`slide${currentSlide}`).classList.add('active');
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        document.getElementById(`slide${currentSlide}`).classList.remove('active');
        currentSlide--;
        document.getElementById(`slide${currentSlide}`).classList.add('active');
    }
}

function showCTA() {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    document.getElementById('cta').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const testosteroneCtx = document.getElementById('testosteroneGraph').getContext('2d');
    const neantropiaCtx = document.getElementById('neantropiaGraph').getContext('2d');

    new Chart(testosteroneCtx, {
        type: 'line',
        data: {
            labels: ['1990', '2000', '2010', '2020'],
            datasets: [{
                label: 'Níveis de Testosterona',
                data: [600, 550, 500, 450],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 800
                }
            }
        }
    });

    new Chart(neantropiaCtx, {
        type: 'bar',
        data: {
            labels: ['Aluno Roberto', 'Aluno Cleiton', 'Aluno Nilton'],
            datasets: [{
                label: 'Testosterona (ng/dL)',
                data: [1100, 1050, 1150],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1200
                }
            }
        }
    });
});
