
$(document).ready(function  () {
    var inputNode = $('#input-text');
inputNode.on('blur', validateMail);
})

function validateMail() {
    var mailNode = $(this);
    var nodeValue = $(this).val();
    var containsMail = nodeValue.indexOf('@')&& nodeValue.indexOf('.com');
    if (containsMail != -1) {
        mailNode.addClass('border-success');
        mailNode.removeClass('border-danger');
    }else{
        mailNode.addClass('border-danger');
        mailNode.removeClass('border-success')
    }
}