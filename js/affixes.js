window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var day;
imglink0 = "";
imglink1 = "";
imglink2 = "";
var desc0, desc1, desc2;
var cl0, cl1, cl2;
var startDateTime = new Date(2018, 2, 20, 11, 0, 0, 0);
var startStamp = startDateTime.getTime();
var timer;
let incweek = 0;
var d, h, m, s;
    
	function daysInMonth (month, year) {
    		return new Date(year, month, 0).getDate();
	}
    
	function updateClock() {
    		newDate = new Date();
    		newStamp = newDate.getTime();
    		var diff = Math.round((newStamp-startStamp)/1000);
    
     		d = Math.floor(diff/(24*60*60));
    		diff = diff-(d*24*60*60);
    		h = Math.floor(diff/(60*60));
    		diff = diff-(h*60*60);
    		m = Math.floor(diff/(60));
    		diff = diff-(m*60);
    		s = diff;
    
    		if (d/7 >= 1) {
    			startDateTimedate = startDateTime.getDate() + 7;
        		if (startDateTimedate > daysInMonth(startDateTime.getMonth+1, startDateTime.getFullYear)) {
        			startDateTime.setDate(startDateTimedate - daysInMonth(startDateTime.getMonth+1, startDateTime.getFullYear));
        			startDateTime.setMonth(startDateTime.getMonth+1);
        		} else { 
        			startDateTime.setDate(startDateTimedate);
        		}
        		startStamp = startDateTime.getTime();
        		incweek = incweek + 1;
        		if (incweek == 11) {
        			incweek = 0;
        		}
        			updateClock();
    		} else {
    		}

    		allweeks = [["Sanguine", "Necrotic", "Fortified"], ["Bursting", "Skittish", "Tyrannical"], ["Teeming", "Quaking", "Fortified"], ["Raging", "Necrotic", "Tyrannical"], ["Bolstering", "Skittish", "Fortified"], ["Teeming", "Volcanic", "Tyrannical"], ["Sanguine", "Grevious", "Fortified"], ["Bolstering", "Explosive", "Tyrannical"], ["Bursting", "Quaking", "Fortified"],["Raging", "Volcanic", "Tyrannical"], ["Teeming", "Explosive", "Fortified"], ["Bolstering", "Grevious", "Tyrannical"]];

		thisweek = allweeks[incweek];
		nextweek = allweeks[incweek+1];
		twoweeks = allweeks[incweek+2];

		if (thisweek[0] == "Sanguine") {
        		imglink0 = "../img/sanguine.jpg"; 
        		desc0 = "• When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players";
        		cl0 = "green";
        //sanguine
		} else if (thisweek[0] == "Bolstering") {
        		imglink0 = "../img/bolstering.jpg"; 
        		desc0 = "• When any non-boss enemy dies, its death cry empowers nearby allies, increasing their maximum health and damage by 20%";
        		cl0 = "orange";
        //bolstering
		} else if (thisweek[0] == "Raging") {
       			imglink0 = "../img/raging.jpg"; 
        		desc0 = "• Non-boss enemies enrage at 30% health remaining, dealing 100% increased damage until defeated"; 
        		cl0 = "orange";
        //raging
		} else if (thisweek[0] == "Teeming") {
        		imglink0 = "../img/teeming.jpg"; 
        		desc0 = "• Additional non-boss enemies are present throughout the dungeon";
        		cl0 = "orange";
        //teeming
		} else if (thisweek[0] == "Bursting") {
        		imglink0 = "../img/bursting.jpg"; 
        		desc0 = "• When slain, non-boss enemies explode, causing all players to suffer 10% of their max health in damage over 4 sec. This effect stacks"
        		cl0 = "orange";
        //bursting
		}

// ------------------------------------------------------------------ //

		if (thisweek[1] == "Necrotic" ) {
			imglink1 = "../img/necrotic.jpg"; 
        		desc1 = "• All enemies' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received";
        		cl1 = "red";
        //necrotic
		} else if (thisweek[1] == "Skittish" ) {
        		imglink1 = "../img/skittish.jpg"; 
        		desc1 = "• Enemies pay far less attention to threat generated by tanks";
        		cl1 = "orange";
        //skittish
		} else if (thisweek[1] == "Volcanic" ) {
        		imglink1 = "../img/volcanic.jpg"; 
        		desc1 = "• While in combat, enemies periodically cause gouts of flame to erupt beneath the feet of distant players"; 
        		cl1 = "green";
        //volcanic
		} else if (thisweek[1] == "Explosive" ) {
        		imglink1 = "../img/explosive.jpg"; 
        		desc1 = "• While in combat, enemies periodically summon Explosive Orbs that will detonate if not destroyed";
        		cl1 = "orange";
        //explosive
		} else if (thisweek[1] == "Quaking" ) {
        		imglink1 = "../img/quaking.jpg"; 
        		desc1 = "• Periodically, all players emit a shockwave, inflicting damage and interrupting nearby allies";
        		cl1 = "green";
        //quaking
		} else if (thisweek[1] == "Grevious" ) {
        		imglink1 = "../img/grevious.jpg"; 
        		desc1 = "• When injured below 90% health, players will suffer increasing damage over time until healed above 90% health";
        		cl1 = "orange";
		}

// ------------------------------------------------------------------ //

		if (thisweek[2] == "Fortified" ) {
        		imglink2 = "../img/fortified.jpg"; 
        		desc2 = "• Non-boss enemies have 20% more health and inflict up to 30% increased damage";
        		cl2 = "orange";
        //fortified
		} else if (thisweek[2] == "Tyrannical" ) {
        		imglink2 = "../img/tyrannical.jpg"; 
        		desc2 = "• Boss enemies have 40% more health and inflict up to 15% increased damage";
        		cl2 = "red";
        //tyrannical
		}
	
		//alert("this week "+thisweek[0]+" "+thisweek[1]+" "+thisweek[2]);
			document.getElementById('hone').innerHTML = thisweek[0];
			document.getElementById('hone').style.color = cl0;
			document.getElementById('pdone').innerHTML = desc0;
			document.getElementById('pone').src = imglink0;
			document.getElementById('htwo').innerHTML = thisweek[1];
			document.getElementById('htwo').style.color = cl1;
		document.getElementById('pdtwo').innerHTML = desc1;
		document.getElementById('ptwo').src = imglink1;
		document.getElementById('hthree').innerHTML = thisweek[2];
		document.getElementById('hthree').style.color = cl2;
		document.getElementById('pdthree').innerHTML = desc2;
		document.getElementById('pthree').src = imglink2;
	}
  function setweek(num) {
	alert("setting week "+num);
	 allweeks = [["Sanguine", "Necrotic", "Fortified"], ["Bursting", "Skittish", "Tyrannical"], ["Teeming", "Quaking", "Fortified"], ["Raging", "Necrotic", "Tyrannical"], ["Bolstering", "Skittish", "Fortified"], ["Teeming", "Volcanic", "Tyrannical"], ["Sanguine", "Grevious", "Fortified"], ["Bolstering", "Explosive", "Tyrannical"], ["Bursting", "Quaking", "Fortified"],["Raging", "Volcanic", "Tyrannical"], ["Teeming", "Explosive", "Fortified"], ["Bolstering", "Grevious", "Tyrannical"]];
	testweek[0] =  allweeks[num-1][0];
	 testweek[1] =  allweeks[num-1][1];
	  testweek[2] =  allweeks[num-1][2];
	  alert("test week "+testweek[0]+" "+testweek[1]+" "+testweek[2]);
        	document.getElementById('hone').innerHTML = testweek[0];
		document.getElementById('hone').style.color = cl0;
		document.getElementById('pdone').innerHTML = desc0;
		document.getElementById('pone').src = imglink0;
		document.getElementById('htwo').innerHTML = testweek[1];
		document.getElementById('htwo').style.color = cl1;
		document.getElementById('pdtwo').innerHTML = desc1;
		document.getElementById('ptwo').src = imglink1;
		document.getElementById('hthree').innerHTML = testweek[2];
		document.getElementById('hthree').style.color = cl2;
		document.getElementById('pdthree').innerHTML = desc2;
		document.getElementById('pthree').src = imglink2;
}
  function loadTable() {
	for (i=0;i<=11; i++) {
        for (j=0; j<=2;j++) {
        	document.getElementById("week"+i+j).innerHTML = allweeks[i][j];
            if (document.getElementById("week"+i+0).innerHTML == document.getElementById('hone').innerHTML & document.getElementById("week"+i+1).innerHTML == document.getElementById('htwo').innerHTML & document.getElementById("week"+i+2).innerHTML == document.getElementById('hthree').innerHTML) {
                document.getElementById('week'+i+0).style.background = "#4CAF50";
                document.getElementById('week'+i+1).style.background = "#4CAF50";
                document.getElementById('week'+i+2).style.background = "#4CAF50";   // highlight current week
            }
        } //header invis
    }
}
