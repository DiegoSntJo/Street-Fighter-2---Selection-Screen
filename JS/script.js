//PERSONAGENS
var ryu = document.getElementById("ryu");
var honda = document.getElementById("honda");
var blanka = document.getElementById("blanka");
var guile = document.getElementById("guile");
var balrog = document.getElementById("balrog");
var vega = document.getElementById("vega");
var ken = document.getElementById("ken");
var chunli = document.getElementById("chunli");
var zangief = document.getElementById("zangief");
var dhalsim = document.getElementById("dhalsim");
var sagat = document.getElementById("sagat");
var bison = document.getElementById("bison");

//SOM
var player = "" ;
var audio = document.getElementById("audio");
audio.volume = 0.35;

//ANIMÇÕES COM MOUSE
//MOUSE ON
ryu.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+ryu.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+ryu.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+ryu.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;


        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/1.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

honda.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+honda.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+honda.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+honda.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/2.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

blanka.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+blanka.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+blanka.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+blanka.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/3.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

guile.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+guile.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+guile.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+guile.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/4.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

balrog.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+balrog.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+balrog.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+balrog.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/5.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

vega.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+vega.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+vega.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+vega.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/6.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

ken.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+ken.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+ken.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+ken.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/7.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

chunli.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+chunli.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+chunli.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+chunli.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/8.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

zangief.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+zangief.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+zangief.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+zangief.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/9.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

dhalsim.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+dhalsim.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+dhalsim.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+dhalsim.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/10.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

sagat.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+sagat.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+sagat.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+sagat.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/11.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})

bison.addEventListener("mouseover", function(){
    if(player == ""){
        var addChar = "<img class='choosen' src='media/"+bison.innerHTML+".png'><br>";
        var addPortrait = "<img class='choosen' src='media/portraits/"+bison.innerHTML+".png'><br>";
        var addName = "<img class='name' src='media/names/"+bison.innerHTML+".png'><br>";
        var exibirChar = document.getElementById("lobby");
        var exibirPortrait = document.getElementById("portraits");
        var exibirName = document.getElementById("name");
        exibirChar.innerHTML = addChar;
        exibirPortrait.innerHTML = addPortrait;
        exibirName.innerHTML = addName;

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";

        var sfx = document.getElementById("sfx");
        sfx.innerHTML = "<audio autoplay><source src='media/sfx/selection.ogg' type='audio/ogg'></audio>";
    }
})


//MOUSE OFF
ryu.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

honda.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

blanka.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

guile.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

balrog.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

vega.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

ken.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

chunli.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

zangief.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

dhalsim.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

sagat.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

bison.addEventListener("mouseleave", function(){
    if(player == ""){
        var remover = document.getElementById("lobby");
        var removerPortrait = document.getElementById("portraits");
        var removerName = document.getElementById("name");
        remover.innerHTML = "";
        removerPortrait.innerHTML = "";
        removerName.innerHTML = "";

        var getMundo = document.getElementById("mundo");
        getMundo.style.backgroundImage = "url(media/backgrounds/world.png)";
    }
})

//HARD RESET
function reset (){
    history.go(0);
}

//SELECIONAR
function escolheu(){
    var country = document.getElementById("musica");
    country.innerHTML = "<audio autoplay><source src='media/sfx/"+player.innerHTML+".mp3' type='audio/mpeg'></audio>";
}

function vs(){
    var tocar = document.getElementById("musica");
    tocar.innerHTML = "<audio autoplay><source src='media/sfx/Start Battle.mp3' type='audio/mpeg'></audio>";
}

function charEscolhido(){
    var tocar = document.getElementById("musica");
    tocar.innerHTML = "<audio autoplay id='audio'><source src='media/themes/"+player.innerHTML+".mp3' type='audio/mpeg'></audio>";
    var audio = document.getElementById("audio");
    audio.volume = 0.35;
}

function selecionar (){
    var addChar = "<img class='choosen' src='media/"+player.innerHTML+".png'><br>";
    var addPortrait = "<img class='choosen' src='media/portraits/"+player.innerHTML+".png'><br>";
    var addName = "<img class='name' src='media/names/"+player.innerHTML+".png'><br>";
    var exibirChar = document.getElementById("lobby");
    var exibirPortrait = document.getElementById("portraits");
    var exibirName = document.getElementById("name");
    exibirChar.innerHTML = addChar;
    exibirPortrait.innerHTML = addPortrait;
    exibirName.innerHTML = addName;

    var getMundo = document.getElementById("mundo");
    getMundo.style.backgroundImage = "url(media/backgrounds/"+player.innerHTML+".png)";

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay><source src='media/sfx/choosen.ogg' type='audio/ogg'></audio>";
    setTimeout(escolheu, 1000);
    setTimeout(vs, 2000);
    setTimeout(charEscolhido, 6000);
}