
function Event(){
    txt = document.getElementById('input').value;
    count = txt.length;

    if (count<=20){
        document.getElementById('output').innerHTML = '<h1>Senha muito fraca</h1>';
    if (txt==''){
        document.getElementById('output').innerHTML = '<h1>Digite alguma coisa !</h1>';
    }

    }
    else{
        document.getElementById('output').innerHTML = '<h1>Senha muito forte !</h1>';
    }
}
    function Event_2(){
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$%#@!*?";
        var string_length = 30;
        var randomstring = '';
        for (var i=0; i<=string_length; i++) {
        var randomNum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(randomNum,randomNum+2);   
        }
         document.getElementById('output').innerHTML = '<h1>This is your new password </h1> ' + randomstring;
      } 