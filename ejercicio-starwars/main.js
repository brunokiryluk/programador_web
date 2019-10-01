$(document).ready(function () {
    var btnNode = $('#delete');
    btnNode.on('click', deleteInputNode);
    function deleteInputNode(_event) {
        //var deleteNode = $(this);
        //var  style = $('#1');
      //  style.fadeout(2000);
        $('#tableBody').hide(3000,function () {
            $('tableBody').remove();
        });
    }
})


/**
 * $(document).ready(function () {
    var btnNode = $('#delete');
    btnNode.on('click', deleteInputNode);
    function deleteInputNode(_event) {
        $(this).parent().parent().hide(3000, function(){
            $(this).remove(); solucion profe
        });
        //var  style = $('#1');
      //  style.fadeout(2000);
        $('#tableBody').hide(3000,function () {
            $('tableBody').remove();
        });
    }
})
 */