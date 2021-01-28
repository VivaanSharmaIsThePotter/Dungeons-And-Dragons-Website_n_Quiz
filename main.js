Question = "";
span_option1 = "";
span_option2 = "";
span_option3 = "";
Div = "";

function start() {
    document.getElementById("other_text").innerHTML = "Find out right here!";
    Question = "<h4>Do you want to cast magic or smash things?</h4><br>";
    span_option1 = "<span><button id='Magic' onclick='Religious_magic()'>Cast Magic!</button>";
    span_option2 = "<button id='Both' onclick='Good_w_peeps()'>Can't I do both?</button>";
    span_option3 = "<button id='Smash' onclick='Melee_Ranged()'>Me Smash!</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2 + span_option3;
    document.getElementById("questions").innerHTML = Div;
}

function Religious_magic() {
    Question = "<h4>Are you religious</h4><br>";
    span_option1 = "<span><button id='Cleric_option' onclick='Cleric()'>Would you like to hear about my god?</button>";
    span_option2 = "<button id='Cleric_option_no' onclick='Study_Q()'>No, not really.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Good_w_peeps() {
    document.getElementById("other_text").innerHTML = "Sure!";
    Question = "<h4>Are you good with people?</h4><br>";
    span_option1 = "<span><button id='no_gw_peeps' onclick='Animal_Q()'>No, not really.</button>";
    span_option2 = "<button id='V_GW_Peeps' onclick='Sneaky_Q()'>Yes! People usually like me.</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Melee_Ranged() {
    Question = "<h4>Melee or Ranged?</h4><br>";
    span_option1 = "<span><button id='rangy' onclick='GW_peeps2()'>Ranged</button>";
    span_option2 = "<button id='meleee' onclick='Fight_Cause_Q()'>Melee</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Study_Q() {
    Question = "<h4>Do you like to study?</h4><br>";
    span_option1 = "<span><button id='No_Study' onclick='Magic_Q()'>No, studying is for losers.</button>";
    span_option2 = "<button id='Yes_Study' onclick='Music_Q()'>Yes, I love learning!</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Magic_Q() {
    Question = "<h4>Were you born with magic?</h4><br>";
    span_option1 = "<span><button id='Warlock_Op' onclick='WarlockFinal()'>Not exactly.</button>";
    span_option2 = "<button id='Sorcerer_Op' onclick='SorcererFinal()'>Yes, it's in my blood.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Music_Q() {
    Question = "<h4>Are you musically inclined?</h4><br>";
    span_option1 = "<span><button id='No_Music' onclick='Animal_Q2()'>Not really.</button>";
    span_option2 = "<button id='Yes_Music' onclick='Bard()'>Yes! I write poetry too.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Animal_Q2() {
    Question = "<h4>Do you like animals?</h4><br>";
    span_option1 = "<span><button id='Wizard_Op' onclick='WizardFinal()'>I prefer magic creatures.</button>";
    span_option2 = "<button id='Druid_Op' onclick='DruidFinal()'>I actually prefer animals to humans.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Animal_Q() {
    Question = "<h4>Do you like animals?</h4><br>";
    span_option1 = "<span><button id='Drui_Op' onclick='Druid()'>They're so FLUFFY!</button>";
    span_option2 = "<button id='okay_op' onclick='Sneaky_Q()'>Eh, they're okay.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Sneaky_Q() {
    Question = "<h4>Are you sneaky?</h4><br>";
    span_option1 = "<span><button id='No_sneak' onclick='Spells_Melee_Q()'>Not so much.</button>";
    span_option2 = "<button id='yes_sneak' onclick='Rogue()'>I am the Night!</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Spells_Melee_Q() {
    Question = "<h4>Do you prefer spells over melee?</h4><br>";
    span_option1 = "<span><button id='Yes_spells' onclick='BardFinal()'>Yes, melee is for losers.</button>";
    span_option2 = "<button id='no_spells' onclick='Wealthy_Q()'>No, spells are a bonus.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Wealthy_Q() {
    Question = "<h4>Do you want to be wealthy?</h4><br>";
    span_option1 = "<span><button id='Yes_money' onclick='RogueFinal()'>Is that a question?</button>";
    span_option2 = "<button id='no_money' onclick='MartialArt_Q()'>Meh.</button></span><br><br><br>";
    
    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function GW_peeps2() {
    Question = "<h4>So, are you good with people?</h4><br>";
    span_option1 = "<span><button id='Yes_peepees' onclick='Sneaky_Q()'>Yes! People usually like me.</button>";
    span_option2 = "<button id='No_anees' onclick='RangerFinal()'>No, I prefer animals.</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Fight_Cause_Q() {
    Question = "<h4>Do you fight for a cause?</h4><br>";
    span_option1 = "<span><button id='Yes_cause' onclick='MartialArt_Q()'>Yes, my beliefs define me.</button>";
    span_option2 = "<button id='money_cause' onclick='Civilised_Q()'>Is money a cause?</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function MartialArt_Q() {
    Question = "<h4>Do you know martial arts?</h4><br>";
    span_option1 = "<span><button id='NO_marsha' onclick='PaladinFinal()'>Nope.</button>";
    span_option2 = "<button id='mo_marsha' onclick='MonkFinal()'>My fists hunger for justice.</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Civilised_Q() {
    Question = "<h4>Are you civilized?</h4><br>";
    span_option1 = "<span><button id='Yes_civi' onclick='Fighter()'>I mean, I don't eat people or anything...</button>";
    span_option2 = "<button id='no_civi' onclick='BarbarianFinal()'>No, I was raised in the wilds.</button></span><br><br><br>";

    Div = Question + span_option1 + span_option2;
    document.getElementById("questions").innerHTML = Div;
}

function Cleric() {
    document.getElementById("other_text").innerHTML = "Maybe later";
    Proceed_Button = "<button id='proceed' onclick='ClericFinal()'>Proceed</button>";
    document.getElementById("questions").innerHTML = Proceed_Button;
}

function ClericFinal() {
    document.getElementById("other_text").innerHTML = "You are a Cleric!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //1

function WarlockFinal() {
    document.getElementById("other_text").innerHTML = "You are a Warlock!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //2

function SorcererFinal() {
    document.getElementById("other_text").innerHTML = "You are a Sorcerer!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //3

function Bard() {
    document.getElementById("other_text").innerHTML = "Oh great";
    Proceed_Button = "<button id='proceed' onclick='BardFinal()'>Proceed</button>";
    document.getElementById("questions").innerHTML = Proceed_Button;
} 

function BardFinal() {
    document.getElementById("other_text").innerHTML = "You are a Bard!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //4

function WizardFinal() {
    document.getElementById("other_text").innerHTML = "You are a Wizard!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //5

function Druid() {
    document.getElementById("other_text").innerHTML = "Except, ya know, when they're not";
    Proceed_Button = "<button id='proceed' onclick='DruidFinal()'>Proceed</button>";
    document.getElementById("questions").innerHTML = Proceed_Button;
}

function DruidFinal() {
    document.getElementById("other_text").innerHTML = "You are a Druid!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //6

function Rogue() {
    document.getElementById("other_text").innerHTML = "Batman is not a class";
    Proceed_Button = "<button id='proceed' onclick='RogueFinal()'>Proceed</button>";
    document.getElementById("questions").innerHTML = Proceed_Button;
}

function RogueFinal() {
    document.getElementById("other_text").innerHTML = "You are a Rogue!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //7

function RangerFinal() {
    document.getElementById("other_text").innerHTML = "You are a Ranger!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //8

function PaladinFinal() {
    document.getElementById("other_text").innerHTML = "You are a Paladin!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //9

function MonkFinal() {
    document.getElementById("other_text").innerHTML = "You are a Monk!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //10

function Fighter() {
    document.getElementById("other_text").innerHTML = "Well, that's a relief...";
    Proceed_Button = "<button id='proceed' onclick='FighterFinal()'>Proceed</button>";
    document.getElementById("questions").innerHTML = Proceed_Button;
}

function FighterFinal() {
    document.getElementById("other_text").innerHTML = "You are a Fighter";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //11

function BarbarianFinal() {
    document.getElementById("other_text").innerHTML = "You are a Barbarian!";
    Retry_Button = "<button id='retry' onclick='start()'>Retry the Quiz</button>";
    document.getElementById("questions").innerHTML = Retry_Button;
} //12