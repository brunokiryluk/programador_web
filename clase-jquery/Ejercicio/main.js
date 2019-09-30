var squareNode = $('.square');
squareNode.on('click', circleOrCross);
var player = true;


function circleOrCross(_event) {

  var mySquareNode = $(this);
  console.log('AAAAAAAAAAAAAA');
  //(!player);
  if (player) {
    mySquareNode.addClass('circle');
    mySquareNode.removeClass('cross');
    console.log('BUUUUUUUUUUU');
    //(!player);
  player = false;
  } else {
    mySquareNode.addClass('cross');
    mySquareNode.removeClass('circle');
    console.log('CCCCCCCCCCCCCCCCCCC');
  //  (!player);
  player = true;
   
  
  }

}

