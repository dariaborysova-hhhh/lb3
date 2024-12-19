window.onload = function() {
    
    setTimeout(function() {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'block';
    }, 1000);

    
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        document.body.style.backgroundColor = "#FFFAF0"; 
    } else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundColor = "#ADD8E6"; 
    } else {
        document.body.style.backgroundColor = "#2F4F4F"; 
    }
};

function startImageChange() {
    const interval = document.getElementById('interval').value * 1000;
    let images = [
        'https://i.pinimg.com/736x/63/1d/94/631d945ad758b0d1778fa30c2f89c8e3.jpg',
        'https://i.pinimg.com/236x/58/dc/80/58dc8071939a3d4d16397c27609963b9.jpg',
        'https://i.pinimg.com/236x/84/c0/93/84c0933fef05ae85495150380f089fd3.jpg'
    ]; 
    let currentImageIndex = 0;

    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('image').src = images[currentImageIndex];
    }, interval);

    
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
}

let generatedTable = [];

function generateTable() {
    const minValue = parseInt(document.getElementById('min-value').value);
    const maxValue = parseInt(document.getElementById('max-value').value);
    const tableContainer = document.getElementById('table-container');
    let table = '<table>';
    generatedTable = [];

    // генерація таблиці та пошук макс значення
    for (let i = 0; i < 10; i++) {
        table += '<tr>';
        let row = [];
        for (let j = 0; j < 10; j++) {
            let randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            let className = (i + j) % 2 === 0 ? 'even' : 'odd';
            row.push(randomValue);

            table += `<td class="${className}">${randomValue}</td>`;
        }
        generatedTable.push(row);
        table += '</tr>';
    }

    table += '</table>';
    tableContainer.innerHTML = table;

    
}




