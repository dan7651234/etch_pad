$(document).ready(function() {
  makeGrid(16);
  $('#newGridButton').click(function() {
    buttonClick();
  })

})

function makeGrid(squares) {
  for (var i=1; i<=squares**2; i++) {
    $('<div class="gridBlock"></div>').appendTo('#grid');
  }
  setBlockSize(squares);
  $('.gridBlock').hover(function() {
    $(this).css('background-color',getRandomColor());
  })
}

function setBlockSize(squares) {
  var blockHeight = 600/squares;
  var blockWidth = 800/squares;
  $('.gridBlock').css('height',blockHeight + 'px');
  $('.gridBlock').css('width',blockWidth + 'px');
}

function buttonClick() {
  $('.gridBlock').fadeOut('slow');
  $('#grid').empty();
  var newSquares = prompt("How many squares in each row?");
  /*if (newSquares !== parseInt(newSquares,10 || newSquares < 1) {
    alert("Please enter an integer greater than 0")
  }*/
  makeGrid(newSquares);
}

function getRandomColor() {
  var values = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random()*16)];
  }
  return color;
}
