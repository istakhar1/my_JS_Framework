var g= G$('jhon','dove');
g.greet().setLang('es').greet(true).log();
$('#login').click(function(){
    var loginGretr =G$('Ishu','Ansari');

    $('#logindiv').hide();
    loginGretr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
})