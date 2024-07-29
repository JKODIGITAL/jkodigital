let currentSlide = 1;
const totalSlides = 8;

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
function toggleFaq(element) {
    element.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const testosteroneCtx = document.getElementById('testosteroneGraph').getContext('2d');
    const neantropiaCtx = document.getElementById('neantropiaGraph').getContext('2d');
    const neantropiaCtx2 = document.getElementById('neantropiaGraph2').getContext('2d');
    new Chart(testosteroneCtx, {
        type: 'line',
        data: {
            labels: ['1950', '1970', '1990', '2010', '2020'],
            datasets: [{
                label: 'Níveis de Testosterona ao Longo dos Anos',
                data: [700, 650, 600, 550, 500],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 6,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 800,
                    min: 400,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Nível de Testosterona (ng/dL)',
                        color: '#ffffff'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Ano',
                        color: '#ffffff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            }
        }
    });
 
    new Chart(neantropiaCtx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Níveis de Testosterona com Neantropia',
                data: [450, 566, 720, 1083],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 5,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1100,
                    min:400,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Nível de Testosterona (ng/dL)',
                        color: '#ffffff'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Semanas',
                        color: '#ffffff'
                    }
                }
            },
       
        }
    });

    new Chart(neantropiaCtx2, {
        type: 'bar',
        data: {
            labels: ['Antes', 'Neantropia', 'Antes', 'Neantropia', 'Antes', 'Neantropia'],
            datasets: [{
                label: 'Testosterona (ng/dL)',
                data: [624, 1134, 456, 1056, 557, 1132],
                backgroundColor: ['rgba(255, 255, 255, 0.5)', '#4bc0c0', 'rgba(255, 255, 255, 0.5)', '#4bc0c0', 'rgba(255, 255, 255, 0.5)', '#4bc0c0'],
                borderColor: ['rgba(255, 255, 255, 0.5)', '#4bc0c0', 'rgba(255, 255, 255, 0.5)', '#4bc0c0', 'rgba(255, 255, 255, 0.5)', '#4bc0c0'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1300,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Nível de Testosterona (ng/dL)',
                        color: '#ffffff'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                annotation: {
                    annotations: {
                        arrow1: {
                            type: 'line',
                            xMin: 0,
                            xMax: 1,
                            yMin: 624,
                            yMax: 1134,
                            borderColor: 'rgb(43, 255, 1)',
                            borderWidth: 5,
                            label: {
                                content: '↑ +510',
                                enabled: true,
                                position: 'center',
                                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: 'white'
                            },
                            arrowHeads: {
                                end: {
                                    display: true,
                                    length: 20,
                                    width: 10
                                }
                            }
                        },
                        arrow2: {
                            type: 'line',
                            xMin: 2,
                            xMax: 3,
                            yMin: 456,
                            yMax: 1056,
                            borderColor: 'rgb(43, 255, 1)',
                            borderWidth: 5,
                            label: {
                                content: '↑ +600',
                                enabled: true,
                                position: 'center',
                                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: 'white'
                            },
                            arrowHeads: {
                                end: {
                                    display: true,
                                    length: 20,
                                    width: 10
                                }
                            }
                        },
                        arrow3: {
                            type: 'line',
                            xMin: 4,
                            xMax: 5,
                            yMin: 557,
                            yMax: 1132,
                            borderColor: 'rgb(43, 255, 1)',
                            borderWidth: 5,
                            label: {
                                content: '↑ +575',
                                enabled: true,
                                position: 'center',
                                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: 'white'
                            },
                            arrowHeads: {
                                end: {
                                    display: true,
                                    length: 20,
                                    width: 10
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    // Countdown Timer
    const countdownTimer = document.getElementById('countdown-timer');
    const endTime = new Date().getTime() + (12* 60 * 1000); // 24 hours from now

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTimer.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownTimer.innerText = '00:00:00';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set timer immediately
});


