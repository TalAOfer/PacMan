'use strict'

function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell-' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function openModal(isVictory) {
  var strHTML = ''
  var elModal = document.querySelector('.modal-container')
  if (isVictory) {
    strHTML += `<span class="modal-text"> Victorious! </span> <br> <br> <button onclick="init()"> Play again </button>`
    elModal.innerHTML = strHTML
    elModal.style.display = 'block'

  } else {
    strHTML += `<span class="modal-text"> Game Over :( </span> <br> <br> <button onclick="init()"> Play again </button>`
    elModal.innerHTML = strHTML
    elModal.style.display = 'block'
  }
}

function closeModal() {
  var elModal = document.querySelector('.modal-container')
  elModal.style.display = 'none'
  elModal.innerHTML = ''
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


