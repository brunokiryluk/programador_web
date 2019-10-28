export default  function hideFunction() {
    $('.btn').on('click',function () {
        let trNode = $(this).parent().parent();
        trNode.hide(500);
        
    })
}