document.addEventListener("DOMContentLoaded", function () {
    // Animação de Entrada
    setTimeout(function () {
        document.getElementById('entryAnimation').style.opacity = '0';
        setTimeout(function () {
            document.getElementById('entryAnimation').style.display = 'none';
        }, 1000);
    }, 3000);

    // Formulário de Mantra
    const form = document.getElementById("mantraForm");
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const birthDate = document.getElementById('birthDate').value;
        const purpose = document.getElementById('purpose').value;
        const chakrasActivation = document.getElementById("visualization").checked;

        const mantra = generateMantra(fullName, birthDate, purpose, chakrasActivation);
        sessionStorage.setItem('mantra', mantra);

        window.location.href = 'loading.html'; // Redireciona para a página de carregamento
    });
});

function calculateLifePathNumber(birthDate) {
    const nums = birthDate.split('-').join('');
    return nums.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

function calculateNameNumber(fullName) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return fullName.toLowerCase().split('').reduce((acc, curr) => {
        return alphabet.indexOf(curr) !== -1 ? acc + alphabet.indexOf(curr) + 1 : acc;
    }, 0);
}
function combineNumerology(fullName, birthDate) {
    const nameNumber = calculateNameNumber(fullName);
    const birthNumber = calculateLifePathNumber(birthDate);
    const today = new Date();
    const todayNumber = calculateLifePathNumber(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);

    // Combina os números e reduz a um único dígito
    let combinedNumber = nameNumber + birthNumber + todayNumber;
    while (combinedNumber > 9) {
        combinedNumber = combinedNumber.toString().split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    }
    return combinedNumber;
}

function generateMantra(fullName, birthDate, purpose, chakrasActivation) {
    const combinedNumber = combineNumerology(fullName, birthDate);

    let mantra = `Mantra Diário de Renovação, Crescimento e Alinhamento dos Chakras, sob a energia do número ${combinedNumber}:\n\n`;

    mantra += `“A cada amanhecer, celebro um novo nascimento, um convite fresco para abraçar a vida com vigor e propósito. Lembro-me de que cada dia é precioso, um presente efêmero para ser vivido plenamente, sob a guia do número ${combinedNumber}.\n\n`;

    mantra += `Nutro minha mente e alma com pensamentos virtuosos e ações amorosas, crescendo em direção à luz da verdade e do conhecimento, alinhados com o propósito de ${purpose}.\n\n`;

    if (chakrasActivation) {
        mantra += `Na ordem do meu espaço, encontro clareza e paz no meu interior, cada objeto e ação refletindo minha busca pela harmonia e compreensão, e alinhamento dos 7 Chakras:\n\n`;
        mantra += `Eu sou seguro e apoio meu caminho para ${purpose}.\n`;
        mantra += `Eu sinto prazer e gratidão em cada oportunidade para ${purpose}.\n`;
        mantra += `Eu ajo com confiança e determinação em minhas ações para ${purpose}.\n`;
        mantra += `Eu amo e acolho as bênçãos que ${purpose} traz para minha vida.\n`;
        mantra += `Eu expresso minha verdade e intenções claras para alcançar ${purpose}.\n`;
        mantra += `Eu vejo com clareza e intuição o caminho para ${purpose}.\n`;
        mantra += `Eu me conecto com a sabedoria universal para guiar minha jornada em ${purpose}.\n\n`;
    } else {
        mantra += `Na ordem do meu espaço, encontro clareza e paz no meu interior, cada objeto e ação refletindo minha busca pela harmonia e compreensão.\n\n`;
    }
    mantra += "Escolho a simplicidade, encontrando beleza e contentamento no essencial. Empenho-me em ser impecável com minhas palavras, inteligente em minhas ações, e pleno em minhas intenções.\n\n";

    mantra += `Abro meu coração para dar e receber amor, buscando ser atencioso e compassivo em todas as minhas interações. Busco pureza e leveza de ser, encontrando paz no equilíbrio e na moderação.\n\n`;

    mantra += `A cada dia, esforço-me para ser virtuoso, consistente, grato e sábio, reconhecendo cada momento como uma chance para crescer e melhorar. Aceito e abraço o desconforto do crescimento, sabendo que é através dos desafios que encontro força e sabedoria.\n\n`;

    mantra += "Busco o sucesso não como um destino, mas como uma jornada de autoaperfeiçoamento contínuo, iluminando meu caminho e inspirando outros.\n\n";

    mantra += `Ao final de cada dia, reconheço o adormecer como uma pequena morte, um momento para soltar, refletir e renovar. A cada acordar e adormecer, lembro-me da dança eterna da vida, abraçando cada dia como uma oportunidade única para viver com intenção, amor e gratidão, sob a luz do número ${combinedNumber}.\n\n`;

    return mantra;
}
