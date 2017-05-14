$(document).ready(function() {

  $('<div id="pageContainer"></div').appendTo('body');
  createButton();
  $('#pageContainer').append('<div id="container"></div>');

  makeGrid(10);
  /*$('.gridSquare').hover(function() {
    $(this).css('background-color', '#1b2f32');
  })*/
  $('#newGridButton').click(function() {
    buttonClick();
    return false;
  })
  $('#buttonForm').submit(function() {
    submitClick();
    return false;
  })
})

function makeGrid(squares) {
  for (var i = 1; i <= squares; i++) {
    $('<div></div>').addClass('row' + i).appendTo('#container');
    $('.row'+i).css('margin', '0px 0px 0px 0px');
    for (var j =1; j <= squares; j++) {
      $('<div></div>').addClass('gridSquare').appendTo('.row' + i);
    }
  }
  setGridCss(squares);
  $('.gridSquare').hover(function() {
    $(this).css('background-color', '#1b2f32');
  })
}

function setGridCss(squares) {
  var screenPX = 800;
  var size = screenPX/squares;

  $('#container').css('width', screenPX + 'px');
  $('#container').css('height', screenPX + 'px');
  $('.gridSquare').css('width', size +'px');
  $('.gridSquare').css('height', size + 'px');
  $('.gridSquare').css('background-color', '#a33030');
  $('.gridSquare').css('display', 'inline-block');
  $('.gridSquare').css('text-align', 'center');
  $('.row').css('float', 'left');
  /*$(window).resize(function() {
    $('#container').css('height', window.innerHeight+'px');
  });*/
}

function createButton() {
  $('<div id="resetContainer"></div>').appendTo('#pageContainer');
  $('<form id="buttonForm"></form>').appendTo('#resetContainer');
  $('<button id="newGridButton">Get a New Grid</button>').appendTo('#buttonForm');

}

function buttonClick() {
  $('<input type = "text" id="rowCount">Enter Number of Rows for New Grid</input>').appendTo('#buttonForm');
  $('<input type="submit" id="gridSubmit"></input>').appendTo('#buttonForm');
}
function submitClick() {
  $('#container').html("");
  var newGridSize = $('#rowCount').val();
  makeGrid(newGridSize);
  $('#buttonForm').remove();
  createButton();
}
