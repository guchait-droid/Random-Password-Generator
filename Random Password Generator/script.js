function generatePassword(){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[^_`{|}~";

    var passwordLength = 7;
    
    var password = "";
    
    for (var i = 0; i <= passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      console.log(randomIndex,randomIndex + 1);
      password += chars.substring(randomIndex, randomIndex + 1);
    }
    
    document.getElementById("password").value = password;
}

