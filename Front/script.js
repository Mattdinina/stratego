let player1Name;  // variable joueur 1 
let player2Name;  // variable joueur 2
let currentPlayer;  // variable à quel joueur est-ce le tour  
//let diceResult;  // variable p

document.getElementById('player1').addEventListener('change', (event) => {
    player1Name = event.target.value;
});

document.getElementById('player2').addEventListener('change', (event) => {
    player2Name = event.target.value;
});

// Lance la partie 
function startGame() {
    if (!player1Name || !player2Name) { // lance la partie uniquement si les deux nom ont été enregistré 
        alert('Entrez votre nom avant de commencer le jeu');
        return;
    }

    currentPlayer = Math.random() < 0.5 ? player1Name : player2Name;  // donne le tour à un des deux joueur 

    createGameBoard();   // Crée un tabler de 10x10 
}

function createGameBoard() {

    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;
        // Ajoutez une classe pour le style
        cell.classList.add('number');
        // Ajoutez la numérotation avec un point
        cell.textContent = i + '.';
        cell.addEventListener('click', handleCellClick);
        gameContainer.appendChild(cell);
    }

    tour();  // éxecute la fonction tour ( change le tour)
}

function handleCellClick(event) {

    const clickedCell = event.target;
    const cellValue = parseInt(clickedCell.dataset.value);
    alert(`${cellValue} `);

    // Si le joueur actuel a déjà gagné, on ne shuffle pas les cellules
    if (cellValue === 10) {
        alert(`Félicitations, ${currentPlayer} a gagné!`);
        location.reload(); // Réinitialise l'application

        return;
    }

    switchPlayer(); 
}


function shuffleCells(currentPlayer) {

    const possibleValues = currentPlayer === player1Name ? possibleValuesPlayer1 : possibleValuesPlayer2;

    const gameContainer = document.getElementById('game-container');
    const cells = gameContainer.getElementsByClassName('cell');

    for (let i = 0; i < cells.length; i++) {
        // Utilisez modulo pour boucler à travers les valeurs disponibles
        const valueIndex = i % possibleValues.length;
        const cellValue = possibleValues[valueIndex];

        cells[i].dataset.value = cellValue;
        console.log(`Cell ${i + 1}: ${cellValue}`);
    }
}


function fill(currentPlayer) {
    const gameContainer = document.getElementById('game-container');
    const cells = gameContainer.getElementsByClassName('cell');

    if (currentPlayer === player1Name) {
        // Remplissage des 10 premiers éléments avec [1, 0, 3, 2, 5, 1, 3, 5, 7, 12]
        for (let i = 0; i < 10; i++) {
            cells[i].dataset.value = [1, 0, 3, 2, 5, 1, 3, 5, 7, 12][i % 10];
            //cells[i].textContent = cells[i].dataset.value;
        }
    } else {
        // Remplissage des 10 derniers éléments avec [1, 9, 0, 1, 93, 7, 2, 8, 31, 92]
        for (let i = cells.length - 10, j = 0; i < cells.length; i++, j++) {
            cells[i].dataset.value = [1, 9, 0, 1, 93, 7, 2, 8, 31, 92][j % 10];
        // cells[i].textContent = cells[i].dataset.value;
        }
    }
}


// Exemple d'utilisation
const player1Array = fillArray(player1Name, player1Name);
const player2Array = fillArray(player2Name, player1Name);

console.log(player1Array); // Affiche le tableau rempli pour player1
console.log(player2Array); // Affiche le tableau rempli pour player2


function un() {
    for (var i = 0; i < 40; i++) {
        tableauPrincipal[i] = tab1[i % tab1.length];
    }
}

function deux() {
    for (var i = 60; i < 100; i++) {
        tableauPrincipal[i] = tab2[i % tab2.length];
    }
}

function tour() {
    document.getElementById('tour').innerText = `${currentPlayer} à ton tour ! `;
}

function switchPlayer() {
    currentPlayer = currentPlayer === player1Name ? player2Name : player1Name;
    tour();
}

function resetGame() {
    player1Name = '';
    player2Name = '';
    currentPlayer = '';
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.getElementById('tour').innerText = '';
    document.getElementById('game-container').innerHTML = '';
}

function fetchData() {
    fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données:', error);
        });
}

const data = {
    redPlayerName: player1Name,  // enregistre le nom du joueur 1
    bluePlayerName: player2Name, // enregistre le nom du joueur 2 
  };
  
  // Configuration de la requête Fetch
  const requestOptions = {
    method: 'POST', // également utiliser 'PUT' ou 'PATCH' en fonction de l'API
    headers: {
      'Content-Type': 'application/json',
      // autres en-têtes nécessaires ici
    },
    body: JSON.stringify(data),
  };
  
  // Envoi de la requête Fetch
  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Traitement de la réponse de l'API pour plus tard 
      console.log('Réponse de l\'API:', data);
    })
    .catch(error => {
      console.error('Erreur lors de la requête Fetch:', error);
    });