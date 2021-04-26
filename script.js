var adresse = "yessine.agrebi@gmail.com";
var mot_de_passe = "123456789";

function connect(){
    var add = document.getElementById("adresse").value;
    var mdp = document.getElementById("mdp").value;
    if (add == adresse & mot_de_passe == mdp){
        alert("Hello");
    }
    else if (mdp != mot_de_passe){
        alert("wrong password");
    }
    else{
        alert("wrong adress")
    }
}
