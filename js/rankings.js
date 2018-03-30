function makeboldnames() {
	table = document.getElementById("t01");
	var lenrows = table.rows.length;
	for (i=1; i<lenrows; i++) {
    	var rx = document.getElementById("player"+i);
        cx = rx.getElementsByTagName("td");
		cx[1].style.fontWeight = "900";
    }
}
function updateoptions() {
    var theclass = document.getElementById("sclass");
    var displayclass = theclass.options[theclass.selectedIndex].text;
    var displayclassindex = theclass.options[theclass.selectedIndex].index;
  	// 0 = "All Classes, etc
    // 4 = frost dk, 11 = resto druid, 16 = frost mage, 23 = holy paladin
    // 26 = holy priest, 33 = resto shaman, 39 = prot warr, 24 = prot pala
    
    
    var theregion = document.getElementById("sregion");
    var displayregion= theregion.options[theregion.selectedIndex].text;
    
    var thedifficulty = document.getElementById("sdifficulty");
    var displaydifficulty = thedifficulty.options[thedifficulty.selectedIndex].text;
    
    var theboss = document.getElementById("sboss");
    var displayboss= theboss.options[theboss.selectedIndex].text;
    
    var thesetting = document.getElementById("sstype");
    displaytype = thesetting.options[thesetting.selectedIndex].text;
    
   	dpshps(displaytype);
    displayonly(displaydifficulty, displayregion, displayclass, displayclassindex);
    
    colorednames();
    rankthem(displaytype);
    initialpage();
}
function dpshps(disp) {
    table = document.getElementById("t01");
    len = table.rows.length;
    if (disp == "Damage Done") {
    	for (i = 1; i < (len); i++) {
        	var Row = document.getElementById("player"+i);
        	columns = Row.getElementsByTagName("td");
            columns[2].style.display = 'table-cell';
    		columns[3].style.display = 'none';
            var headrowd = document.getElementById("headings");
            var headcold = headrowd.getElementsByTagName("th");
            headcold[2].innerText = "DPS";
        }
    } else if (disp == "Healing Done") {
    	for (i = 1; i < (len); i++) {
        	/* alert(len); */
        	var Row = document.getElementById("player"+i);
        	columns = Row.getElementsByTagName("td");         
            columns[2].style.display = 'none';
            columns[3].style.display = 'table-cell';
            var headrowd = document.getElementById("headings");
            var headcold = headrowd.getElementsByTagName("th");
            headcold[2].innerText = "HPS";
        }
    } else if (disp == "Metric"){ 
    	//none
    }
}
function rankthem(disp) {
	var h;
    sortTable(displaytype);
    var myTable = document.getElementById('t01');
    for (h=1; h<=3; h++) {
    	myTable.rows[h].cells[0].innerHTML = h;
    }
}
function sortTable(disp) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("t01");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      if (disp == "Damage Done") {
    		x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
    	} else if (disp == "Healing Done") {
    		x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
    	} else if (disp == "Metric") {
        	//none
        }
      if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
     }
  }
}
function matchclass(disp) {
	classindex = 0;
    specindex = 0;
	table = document.getElementById("t01");
    var lenc = table.rows.length;
    for (i = 1; i < lenc; i++) {
        var mrow = document.getElementById("player"+i);
        mcol = mrow.getElementsByTagName("td");
        mcol[1].style.fontWeight = "800";
       	
        //DRUIDS = 4//
        //resto druid
        //box is all heals, druid is set resto..box is all healers, druid is set all healers..box is set all healers, druid is set all classes..box all classes druid is set resto.. box is all classes, druid is set all healers
        //alert("disp is "+disp+" "+mcol[8].innerText+" "+mcol[11].innerText);
        if (disp == "All Healers" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Restoration" || disp == "All Classes" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Restoration" || mcol[8].innerText == "Druid" && disp == mcol[11].innerText) {
        	
            mcol[12].innerText = 0;
            mcol[13].innerText = 0;
           //mcol[8].innerText = "Druid";
            //mcol[11].innerText = "Restoration";
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            // feral druid
        } else if (disp == "All DPS" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Feral" || disp == "All Classes" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Feral" || mcol[8].innerText == "Druid" && mcol[11].innerText == disp) {
          	mcol[12].innerText = 0;
            mcol[13].innerText = 1;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
        
        //balance druid
        } else if (disp == "All DPS" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Balance" || disp == "All Classes" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Balance" || mcol[8].innerText == "Druid" && mcol[11].innerText == disp) {
            mcol[12].innerText = 0;
            mcol[13].innerText = 2;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
          //guardian druid
          } else if (disp == "All Tanks" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Guardian" || disp == "All Classes" && mcol[8].innerText == "Druid" && mcol[11].innerText == "Guardian" || mcol[8].innerText == "Druid" && mcol[11].innerText == disp) {
           mcol[12].innerText = 0;
            mcol[13].innerText = 3;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
            //MONKS = 3//
            //mistweaver monk
        } else if (disp == "All Healers" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Mistweaver" || disp == "All Classes" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Mistweaver" || mcol[8].innerText == "Monk" && mcol[11].innerText == disp) {
          mcol[12].innerText = 1;
            mcol[13].innerText = 4;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
           
           //windwalker monk
          } else if (disp == "All DPS" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Windwalker" || disp == "All Classes" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Windwalker" || mcol[8].innerText == "Monk" && mcol[11].innerText == disp) {
            mcol[12].innerText = 1;
            mcol[13].innerText = 5;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
            //brewmaster monk
            } else if (disp == "All Tanks" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Brewmaster" || disp == "All Classes" && mcol[8].innerText == "Monk" && mcol[11].innerText == "Brewmaster" || mcol[8].innerText == "Monk" && mcol[11].innerText == disp) {
          mcol[12].innerText = 1;
            mcol[13].innerText = 6;
            alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
            //PRIESTS = 3//
            // disc priest
        } else if (disp == "All Healers" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Discpline" || disp == "All Classes" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Discpline" || mcol[8].innerText == "Priest" && mcol[11].innerText == disp) {
           mcol[12].innerText = 2;
            mcol[13].innerText = 7;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
       }     
       		//holy priest
            else if (disp == "All Healers" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Holy" || disp == "All Classes" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Holy" || mcol[8].innerText == "Priest" && mcol[11].innerText == disp) {
            mcol[12].innerText = 2;
            mcol[13].innerText = 8;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
                 
       }     
       		//shadow priest
            else if (disp == "All DPS" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Shadow" || disp == "All Classes" && mcol[8].innerText == "Priest" && mcol[11].innerText == "Shadow" || mcol[8].innerText == "Priest" && mcol[11].innerText == disp) {
         	mcol[12].innerText = 2;
            mcol[13].innerText = 9;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
            //SHAMANS = 3//
            // resto shaman
       } else if (disp == "All Healers" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Restoration" || disp == "All Classes" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Restoration" || mcol[8].innerText == "Shaman" && mcol[11].innerText == disp) {
           mcol[12].innerText = 3;
            mcol[13].innerText = 10;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
         }   // elemental shaman
            else if (disp == "All DPS" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Elemental" || disp == "All Classes" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Elemental" || mcol[8].innerText == "Shaman" && mcol[11].innerText == disp) {
            mcol[12].innerText = 3;
            mcol[13].innerText = 11;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);

			//enhancement shaman
        }   else if (disp == "All DPS" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Enhancement" || disp == "All Classes" && mcol[8].innerText == "Shaman" && mcol[11].innerText == "Enhancement" || mcol[8].innerText == "Shaman" && mcol[11].innerText == disp) {
    		mcol[12].innerText = 3;
            mcol[13].innerText = 12;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
        //PALADINS = 3    
     	//holy paladin
     	} else if (disp == "All Healers" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Holy" || disp == "All Classes" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Holy" || mcol[8].innerText == "Paladin" && mcol[11].innerText == disp) {
           mcol[12].innerText = 4;
            mcol[13].innerText = 13;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
        
        //ret paladin
     	} else if (disp == "All DPS" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Retribution" || disp == "All Classes" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Retribution" || mcol[8].innerText == "Paladin" && mcol[11].innerText == disp) {
          mcol[12].innerText = 4;
            mcol[13].innerText = 14;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
        //prot paladin
     	} else if (disp == "All Tanks" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Protection" || disp == "All Classes" && mcol[8].innerText == "Paladin" && mcol[11].innerText == "Protection" || mcol[8].innerText == "Paladin" && mcol[11].innerText == disp) {
           mcol[12].innerText = 4;
            mcol[13].innerText = 15;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
       //DEMON HUNTERS = 2//     
       //havoc dh
     	} else if (disp == "All DPS" && mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == "Havoc" || disp == "All Classes" && mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == "Havoc" || mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == disp) {
           mcol[12].innerText = 5;
            mcol[13].innerText = 16;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
       
       //veng dh
     	} else if (disp == "All Tanks" && mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == "Vengeance" || disp == "All Classes" && mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == "Vengeance" || mcol[8].innerText == "Demon Hunter" && mcol[11].innerText == disp) {
            mcol[12].innerText = 5;
            mcol[13].innerText = 17;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
            
       // WARRIORS //     
       //fury warrior
     	} else if (disp == "All DPS" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Fury" || disp == "All Classes" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Fury" || mcol[8].innerText == "Warrior" && mcol[11].innerText == disp) {
       		mcol[12].innerText = 6;
            mcol[13].innerText = 18;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
        
        //arms warrior
     	} else if (disp == "All DPS" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Arms" || disp == "All Classes" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Arms" || mcol[8].innerText == "Warrior" && mcol[11].innerText == disp) {
           mcol[12].innerText = 6;
            mcol[13].innerText = 19;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
       
        //prot warrior
     	} else if (disp == "All Tanks" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Protection" || disp == "All Classes" && mcol[8].innerText == "Warrior" && mcol[11].innerText == "Protection" || mcol[8].innerText == "Warrior" && mcol[11].innerText == disp) {
           mcol[12].innerText = 6;
            mcol[13].innerText = 20;
            //alert("we have a "+mcol[11].innerText+" "+mcol[8].innerText);
      
        } else { } // TODO DK, HUNTER, MAGE, ROGUE
        
    }		
}
function colorednames() {
	table = document.getElementById("t01");
    var lenc = table.rows.length;
   
    for (i = 1; i < (lenc); i++) {
        var crow = document.getElementById("player"+i);
        ccol = crow.getElementsByTagName("td");
        if (ccol[8].innerText == "Druid") {
			ccol[1].style.color = "#FF7D0A";
        } else if (ccol[8].innerText == "Monk") {
			ccol[1].style.color = "#00FF96";    
        } else if (ccol[8].innerText == "Death Knight") {
			ccol[1].style.color = "#C41F3B";  
        } else if (ccol[8].innerText == "Demon Hunter") {
			ccol[1].style.color = "#A330C9";
        } else if (ccol[8].innerText == "Hunter") {
			ccol[1].style.color = "#ABD473";
        } else if (ccol[8].innerText == "Mage") {
			ccol[1].style.color = "#69CCF0";
        } else if (ccol[8].innerText == "Paladin") {
			ccol[1].style.color = "#F58CBA";
        } else if (ccol[8].innerText == "Priest") {
			ccol[1].style.color = "#FFFFFF";
        } else if (ccol[8].innerText == "Rogue") {
			ccol[1].style.color = "#FFF569";
        } else if (ccol[8].innerText == "Shaman") {
			ccol[1].style.color = "#0070DE";
        } else if (ccol[8].innerText == "Warlock") {
			ccol[1].style.color = "#9482C9";
        } else if (ccol[8].innerText == "Warrior") {
			ccol[1].style.color = "#C79C6E";
        } else { ccol[1].style.color = "#000000"; }
    }		
}
function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function initialpage() {
	var table = document.getElementById("t01");
    var len = table.rows.length;

    if (usepage == table.rows.length - 1) {
    	document.getElementById("nextpage").disabled = true;
        document.getElementById("prevpage").disabled = true;
    }
    for (i = usepage + 1; i < len; i++) {
        table.rows[i].style.display = 'none';
    }
}
switches = 0;
    thedisplay = "";
    rankedsofar = 0;
    backswitches = 0;
    mswitches = 0;
	perpage = 3; // display how many per page
    minusval = 1;
    var table = document.getElementById("t01");
   	if (perpage == 1) {
    	usepage = 1;
        minusval = 2;
    } else if (perpage > table.rows.length - 1) {
    	usepage = table.rows.length - 1;
    } else { 
        usepage = perpage; 
        minusval = 1;
    }
    function displayonly(difficulty, region, whichclass, classindex) {
	
    matchclass(whichclass);
    len = table.rows.length;
 
    allHealers = ["Restoration", "Holy", "Mistweaver", "Discpline", "Restorationd", "Restorations", "Holypa", "Holypr"];
    allDPS = ["Havoc", "Fury", "Balance", "Arms", "Assassination", "Affliction", "Destruction", "Demonology", "Outlaw", "Subtlety", "Survival", "Marksmanship", "Beast Mastery", "Frost", "Fire", "Arcane", "Unholy", "Windwalker", "Frostm", "Frostd"];
    allTanks = ["Protection", "Vengeance", "Blood", "Brewmaster", "Guardian", "Protectionw", "Protectionp"];
    
    for (i = 1; i < len; i++) {
    	
        Row = document.getElementById("player"+i);
        columns = Row.getElementsByTagName("td");
        findx(whichclass, i);
       
   		if (whichclass == "All Healers") {
        	if (allHealers.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        		table.rows[i].style.display = 'table-row';
           	} else { 
          		table.rows[i].style.display = 'none';
           	}
        } else if (whichclass == "All Tanks") {
        	if (allTanks.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        		table.rows[i].style.display = 'table-row';
           	} else { 
          		table.rows[i].style.display = 'none';
        	}
        } else if (whichclass == "All DPS") {
        	if (allDPS.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        		table.rows[i].style.display = 'table-row';
           	} else { 
          		table.rows[i].style.display = 'none';
        	}
        } else if (whichclass == "All Classes") {
        	 if (allHealers.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region || allDPS.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region || allTanks.indexOf(columns[11].innerText) > -1 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        		table.rows[i].style.display = 'table-row';
           	} else { 
          		table.rows[i].style.display = 'none';
           	}
        } else if (columns[11].innerText == whichclass && classindex != 11 && classindex != 33 && classindex != 23 && classindex != 26 && classindex != 16 && classindex != 4 && classindex != 39 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
            // resto druid
        } else if (columns[11].innerText == "Restorationd" && classindex == 11 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
          // resto shaman
        } else if (columns[11].innerText == "Restorations" && classindex == 33 && columns[10].innerText == difficulty && columns[9].innerText == region) {	
        	//alert("shaman class index "+classindex);
        	table.rows[i].style.display = 'table-row';
      		//holy paladin
        } else if (columns[11].innerText == "Holypa" && classindex == 23 &&  columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
    		//holy priest
        } else if (columns[11].innerText == "Holypr" && classindex == 26 &&  columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
 		//frost mage
        } else if (columns[11].innerText == "Frostm" && classindex == 16 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
    	//frost dk
        } else if (columns[11].innerText == "Frostd" && classindex == 4 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
        	//prot warrior
        } else if (columns[11].innerText == "Protectionw" && classindex == 39 &&  columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
   			
            //prot pally
        } else if (columns[11].innerText == "Protectionp" && classindex == 24 && columns[10].innerText == difficulty && columns[9].innerText == region) {
        	table.rows[i].style.display = 'table-row';
          
        } else { 
        	table.rows[i].style.display = 'none';
        }
       
        		
	}
}
function findx(classindex, ind) {	
    players = document.getElementById("player"+ind);
	classinfo = players.getElementsByTagName("td");
        
    if (classindex == "Restoration") {  
    	if (classinfo[8].innerText == "Druid") {
        	classinfo[11].innerText = "Restorationd";
        } else if (classinfo[8].innerText == "Shaman") {
        	classinfo[11].innerText = "Restorations";   
        }
	} else if (classindex == "Frost") { 
    	if (classinfo[8].innerText == "Mage") {
        	classinfo[11].innerText = "Frostm";
        } else if (classinfo[8].innerText == "Death Knight") {
        	classinfo[11].innerText = "Frostd";   
        }
    } else if (classindex == "Protection") {
    	if (classinfo[8].innerText == "Warrior") {
    		classinfo[11].innerText = "Protectionw";
    	} else if (classinfo[8].innerText == "Paladin"){
           	classinfo[11].innerText = "Protectionp";
        }
    } else if (classindex == "Holy") {
    	if (classinfo[8].innerText == "Priest") {
        	classinfo[11].innerText = "Holypr";
        } else if (classinfo[8].innerText == "Paladin"){
        	classinfo[11].innerText = "Holypa";
        }
    } else { }
}
