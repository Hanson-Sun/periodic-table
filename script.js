var elements = {
	//[name, atomic number, atomic mass, electronegativity,atomic radius(pm),ionization energy kJ/mol, melting point C, conductivity S/m]
	"h": ["hydrogen", 1, 1.008, 2.20, 53, 1312, -259.14, "n/a"],
	"he": ["helium", 2, 4.003, "n/a", 31, 2372.3, "n/a", "n/a"],
	"li": ["lithium", 3, 6.931, 0.98, 167, 520.2, 180.54, 11000000],
	"be": ["beryllium", 4, 9.021, 1.57, 112, 899.5, 1287, 25000000],
	"b": ["boron", 5, 10.81, 2.04, 87, 800.6, 2075, 0.0001],
	"c": ["carbon", 6, 12.01, 2.55, 67, 1086.5, 3550, 100000],
	"n": ["nitrogen", 7, 14.01, 3.04, 56, 1402.3, -210.1, "n/a"],
	"o": ["oxygen", 8, 16.00, 3.44, 48, 1313.9, -218.3, "n/a"],
	"f": ["fluorine", 9, 19.00, 3.98, 42, 1681, -219.6, "n/a"],
	"ne": ["neon", 10, 20.18, "n/a", 38, 2080.7, -248.59, "n/a"],
	"na": ["sodium", 11, 22.99, 0.93, 190, 495.8, 97.72, 21000000],
	"mg": ["magnesium", 12, 24.31, 1.31, 145, 737.7, 650, 23000000],
	"al": ["aluminum", 13, 26.98, 1.61, 118, 577.5, 660.32, 38000000],
	"si": ["silicon", 14, 28.09, 1.90, 111, 786.5, 1414, 1000],
	"p": ["phosphorus", 15, 30.97, 2.19, 98, 1011.8, 44.2, 10000000],
	"s": ["sulfer", 16, 32.07, 2.58, 88, 999.6, 115.21, 0.000000000000001],
	"cl": ["chlorine", 17, 35.45, 3.16, 79, 1251.2, -101.5, 0.01],
	"ar": ["agron", 18, 39.95, "n/a", 71, 1520.6, -189.3, "n/a"],
	"k": ["potassium", 19, 39.10, 0.82, 243, 418.8, 63.38, 14000000],
	"ca": ["calcium", 20, 40.08, 1.00, 194, 589.8, 842, 29000000],
	"sc": ["scandium", 21, 44.96, 1.36, 184, 633.1, 1541, 1800000],
	"ti": ["titanium", 22, 47.87, 1.54, 176, 658.8, 1668, 2500000],
	"v": ["vanadium", 23, 50.94, 1.63, 171, 650.9, 1910, 5000000],
	"cr": ["chromium", 24, 52.00, 1.66, 166, 652.9, 1907, 7900000],
	"mn": ["manganese", 25, 54.94, 1.55, 161, 717.3, 1246, 620000],
	"fe": ["iron", 26, 55.85, 1.83, 156, 762.5, 1538, 10000000],
	"co": ["cobalt", 27, 58.93, 1.88, 152, 760.4, 1495, 17000000],
	"ni": ["nickel", 28, 58.69, 1.91, 149, 737.1, 1455, 14000000],
	"cu": ["copper", 29, 63.55, 1.90, 145, 745.5, 1084.62, 59000000],
	"zn": ["zinc", 30, 65.38, 1.65, 142, 906.4, 419.53, 17000000],
	"ga": ["gallium", 31, 69.71, 1.81, 136, 578.8, 29.76, 7100000],
	"ge": ["germanium", 32, 72.63, 2.01, 125, 762, 938.3, 2000],
	"as": ["arsenic", 33, 74.92, 2.18, 114, 947, 817, 3300000],
	"se": ["selenium", 34, 78.97, 2.55, 103, 941, 221, "n/a"],
	"br": ["bromine", 35, 79.90, 2.96, 94, 1139.9, -7.3, 0.0000000001],
	"kr": ["krypton", 36, 83.80, 3.00, 88, 1350.8, -157.36, "n/a"],
	"rb": ["rubidium", 37, 85.47, 0.82, 265, 403, 39.31, 8300000],
	"sr": ["strontium", 38, 87.62, 0.95, 219, 549.5, 777, 7700000],
	"y": ["yttrium", 39, 88.91, 1.22, 212, 600, 1526, 1800000],
	"zr": ["zirconium", 40, 91.22, 1.33, 206, 640.1, 1855, 2400000],
	"nb": ["niobium", 41, 92.91, 1.6, 198, 652.1, 2477, 6700000],
	"mo": ["molybdenum", 42, 95.95, 2.16, 190, 684.3, 2623, 20000000],
	"tc": ["technectium", 43, 98.00, 1.9, 183, 702, 2157, 5000000],
	"ru": ["ruthenium", 44, 101.1, 2.2, 178, 710.2, 2334, 14000000],
	"rh": ["rhodium", 45, 102.9, 2.28, 173, 719.7, 1964, 23000000],
	"pd": ["palladium", 46, 106.4, 2.20, 169, 804.4, 1554.9, 10000000],
	"ag": ["silver", 47, 107.9, 1.93, 165, 731, 961.78, 62000000],
	"cd": ["cadmium", 48, 112.4, 1.69, 155, 867.8, 321.07, 14000000],
	"in": ["indium", 49, 114.8, 1.78, 156, 558.3, 156.6, 12000000],
	"sn": ["tin", 50, 118.7, 1.96, 145, 708.6, 231.93, 9100000],
	"sb": ["antimony", 51, 121.8, 2.05, 133, 834, 630.63, 2500000],
	"te": ["tellurium", 52, 127.6, 2.1, 123, 869.3, 449.51, 10000],
	"i": ["iodine", 53, 126.9, 2.66, 115, 1008.4, 113.7, 0.0000001],
	"xe": ["xenon", 54, 131.3, 2.6, 108, 1170.4, -111.8, "n/a"],
	"cs": ["cesium", 55, 132.9, 0.79, 298, 375.7, 28.44, 5000000],
	"ba": ["barium", 56, 137.3, 0.89, 253, 502.9, 727, 2900000],
	"la": ["lanthanum", 57, 138.9, 1.10, "n/a", 538.1, 919, 1600000],
	"ce": ["cerium", 58, 140.1, 1.12, "n/a", 534.4, 798, 1400000],
	"pr": ["praseodymium", 59, 140.9, 1.13, 247, 527, 931, 1400000],
	"nd": ["neodymium", 60, 144.2, 1.14, 206, 533.1, 1021, 1600000],
	"pm": ["promethium", 61, 145, 1.13, 205, 540, 1100, 1300000],
	"sm": ["samarium", 62, 150.4, 1.17, 238, 544.5, 1072, 1100000],
	"eu": ["europium", 63, 152.00, 1.2, 231, 547.1, 822, 1100000],
	"gd": ["gadolnium", 64, 157.3, 1.2, 233, 593.4, 1313, 770000],
	"tb": ["terbium", 65, 158.9, 1.22, 255, 565.8, 1356, 830000],
	"dy": ["dysprosium", 66, 162.5, 1.23, 228, 573, 1412, 1100000],
	"ho": ["holmium", 67, 164.9, 1.24, 226, 581, 1474, 1100000],
	"er": ["erbium", 68, 167.3, 1.24, 226, 589.3, 1497, 1200000],
	"tm": ["thulium", 69, 168.9, 1.25, 222, 596.7, 1545, 1400000],
	"yb": ["ytterbium", 70, 173.04, 1.1, 222, 603.4, 819, 3600000],
	"lu": ["lutetium", 71, 175.00, 1.27, 217, 523.5, 1663, 1800000],
	"hf": ["hafnium", 72, 178.5, 1.3, 208, 658.5, 2233, 3300000],
	"ta": ["tantalum", 73, 180.9, 1.5, 200, 761, 3017, 7700000],
	"w": ["tungsten", 74, 183.8, 2.36, 193, 770, 3422, 20000000],
	"re": ["rhenium", 75, 186.2, 1.9, 188, 760, 3186, 5600000],
	"os": ["osmium", 76, 190.2, 2.2, 185, 840, 3033, 12000000],
	"ir": ["iridium", 77, 192.2, 2.2, 180, 880, 2466, 21000000],
	"pt": ["platinum", 78, 195.1, 2.28, 177, 870, 1768.3, 9400000],
	"au": ["gold", 79, 197.00, 2.54, 174, 890.1, 1064.18, 45000000],
	"hg": ["mercury", 80, 200.6, 2.00, 171, 1007.1, -38.83, 1000000],
	"tl": ["thallium", 81, 204.4, 1.62, 156, 589.4, 304, 6700000],
	"pb": ["lead", 82, 207.2, 2.33, 154, 715.6, 327.46, 4800000],
	"bi": ["bismuth", 83, 209.00, 2.02, 143, 703, 271.3, 770000],
	"po": ["polonium", 84, "(209)", 2.0, 135, 812.1, 254, 2300000],
	"at": ["astatine", 85, "(210)", 2.2, 127, 920, 320, "n/a"],
	"rn": ["radon", 86, "(222)", "n/a", "n/a", 1037, -71, "n/a"],
	"fr": ["francium", 87, "(223)", 0.7, "n/a", 380, "n/a", "n/a"],
	"ra": ["radium", 88, "(226)", 0.89, "n/a", 509.3, 700, 1000000],
	"ac": ["actinium", 89, "(227)", 1.1, "n/a", 499, 1050, "n/a"],
	"th": ["thorium", 90, 232, 1.3, "n/a", 587, 1750, 6700000],
	"pa": ["protactinium", 91, 231.00, 1.5, "n/a", 568, 1572, 5600000],
	"u": ["uranium", 92, 238.00, 1.38, "n/a", 597.6, 1135, 3600000],
	"np": ["neptunium", 93, "(237)", 1.36, "n/a", 604.5, 644, 830000],
	"pu": ["plutonium", 94, "(244)", 1.28, "n/a", 584.7, 640, 670000],
	"am": ["americium", 95, "(243)", 1.3, "n/a", 578, 1176, "n/a"],
	"cm": ["curium", 96, "(247)", 1.3, "n/a", 581, 1345, "n/a"],
	"bk": ["berkelium", 97, "(247)", 1.3, "n/a", 601, 1050, "n/a"],
	"cf": ["californium", 98, "(251)", 1.3, "n/a", 608, 900, "n/a"],
	"es": ["einsteinium", 99, "(252)", 1.3, "n/a", 619, 860, "n/a"],
	"fm": ["fermium", 100, "(257)", 1.3, "n/a", 627, 1527, "n/a"],
	"md": ["mendelevium", 101, "(258)", 1.3, "n/a", 635, 828, "n/a"],
	"no": ["nobelium", 102, "(259)", 1.3, "n/a", 642, 828, "n/a"],
	"lr": ["lawrencium", 103, "(262)", "n/a", "n/a", "n/a", 1627, "n/a"],
	"rf": ["rutherfordium", 104, "(267)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"db": ["dubnium", 105, "(268)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"sg": ["seaborgium", 106, "(269)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"bh": ["bohrium", 107, "(270)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"hs": ["hassium", 108, "(269)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"mt": ["meitnerium", 109, "(278)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"ds": ["darmstadium", 110, "(281)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"rg": ["roentgenium", 111, "(281)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"cn": ["copernicium", 112, "(285)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"nh": ["nihonium", 113, "(286)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"fl": ["flerovium", 114, "(289)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"mc": ["moscovium", 115, "(289)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"lv": ["livermorium", 116, "(293)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"ts": ["tennessine", 117, "(294)", "n/a", "n/a", "n/a", "n/a", "n/a"],
	"og": ["oganesson", 118, "(294)", "n/a", "n/a", "n/a", "n/a", "n/a"]
}

metals = ["li", "be", "na", "mg", "al", "k", "ca", "sc", "ti", "v", "cr", "mn", "fe", "co", "ni", "cu", "zn", "ga", "rb", "sr", "y", "zr", "nb", "mo", "tc", "ru", "rh", "pd", "ag", "cd", "in", "sn", "cs", "ba", "la", "ce", "pr", "nd", "pm", "sm", "eu", "gd", "tb", "dy", "ho", "er", "tm", "yb", "lu", "hf", "ta", "w", "re", "os", "ir", "pt", "au", "hg", "tl", "pb", "bi", "po", "fr", "ra", "ac", "th", "pa", "u", "np", "pu", "am", "cm", "bk", "cf", "es", "fm", "md", "no", "lr", "rf", "db", "sg", "bh", "bh", "hs", "mt", "ds", "rg", "cn", "nh", "fl", "mc", "lv"];

nonmetals = ["h", "he", "c", "n", "o", "f", "ne", "p", "s", "cl", "ar", "br", "kr", "i", "xe", "at", "rn", "ts", "og", "se"];

metalloids = ["b", "si", "ge", "as", "sb", "te", "po", "se"];

noblegases = ["he", "ne", "ar", "kr", "xe", "rn", "og"];

halogens = ["f", "cl", "br", "i", "at", "ts"];

alkali = ["li", "na", "k", "rb", "cs", "fr"];

alkaline = ["be", "mg", "ca", "sr", "ba", "ra"];

g13 = ["b", "al", "ga", "in", "tl", "nh"];

g14 = ["c", "si", "ge", "sn", "pb", "fl"];

g15 = ["n", "p", "as", "sb", "bi", "mc"];

g16 = ["o", "s", "se", "te", "po", "lv"];

//document.getElementById("music").volume = "0.6";
//document.getElementById("music").play();

//i should add explanations
//for my future self or anyone reading this
//but im too lazy so for whomever is reading, have fun!
//probably gonna end up be me reading this in the future and hating my past self for not documenting my code
cardlist = document.querySelectorAll(".element");



/*
cardlist.forEach(function (card) {
	var bgcolor = window.getComputedStyle(card).backgroundColor;
	
	card.addEventListener('mousemove', function (e) {
		console.log(bgcolor)
		card.style.transition = "transform 0.1s";
		let xpos = e.pageX - card.offsetLeft;
		let ypos = e.pageY - card.offsetTop;
		let xy = xpos + " " + ypos;
		let ratio = card.offsetWidth/15*card.offsetHeight/card.offsetWidth
		let rotx = (card.offsetWidth / 2 - xpos) / ratio;
		let roty = (card.offsetHeight / 2 - ypos) / ratio;
		let spread = card.offsetHeight/1.5;
		
		let bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", "+spread+", from(rgba(255,255,255,0.5)), to(rgba(255,255,255,0.0))), " + bgcolor;

		card.style.transform = "scale3D(2,2,1) rotateY(" + rotx + "deg) rotateX(" + roty + "deg) translateZ(10px)";
		card.style.background = bgWebKit;
		card.style.zIndex = "100";
	});
		card.addEventListener("mouseenter", function(e){
		card.style.transition = "transform 0.1s";
		let xpos = e.pageX - card.offsetLeft;
		let ypos = e.pageY - card.offsetTop;
		let xy = xpos + " " + ypos;
		let ratio = card.offsetWidth/35*card.offsetHeight/card.offsetWidth
		let rotx = (card.offsetWidth / 2 - xpos) / ratio;
		let roty = (card.offsetHeight / 2 - ypos) / ratio;
		
		card.style.transform = "scale3D(1.05,1.05,1.05) rotateY(" + rotx + "deg) rotateX(" + roty + "deg) translateZ(20px)";
	});
	card.addEventListener('mouseleave', function (e) {
		
		card.style.background = bgcolor;
		card.style.transition = " all 0.5s transform 0.5s box-shadow 0.5s"
		card.style.transform = "none";
		card.style.zIndex = "1";
	});



});

*/

for (var element in elements) {
	document.getElementById(element).innerHTML =
		"<div class = 'atmn'>" + elements[element][1] + "</div>" +
		"<div class = 'atmmass'>" + elements[element][2] + "</div>" +
		"<div class = 'electn'>" + elements[element][3] + "</div>" +
		"<p id = '" + element + "'>" + element.charAt(0).toUpperCase() + element.substring(1) + "</p>" +
		"<div class = 'name'>" + elements[element][0].charAt(0).toUpperCase() + elements[element][0].substring(1) + "</div>";
}
document.getElementById("g1").innerHTML += " (1)";
document.getElementById("g2").innerHTML += " (2)";
document.getElementById("g3").innerHTML += " (2)";
document.getElementById("g4").innerHTML += " (2)";
document.getElementById("g5").innerHTML += " (2)";
document.getElementById("g6").innerHTML += " (2)";
document.getElementById("g7").innerHTML += " (2)";
document.getElementById("g8").innerHTML += " (2)";
document.getElementById("g9").innerHTML += " (2)";
document.getElementById("g10").innerHTML += " (2)";
document.getElementById("g11").innerHTML += " (2)";
document.getElementById("g12").innerHTML += " (2)";
document.getElementById("g13").innerHTML += " (3)";
document.getElementById("g14").innerHTML += " (4)";
document.getElementById("g15").innerHTML += " (5)";
document.getElementById("g16").innerHTML += " (6)";
document.getElementById("g17").innerHTML += " (7)";
document.getElementById("g18").innerHTML += " (8)";
//for nonmetals, metals, noble gases, halogens, alkali metals, alkaline earth metals
// they all follow the same format
function nmetal() {
	//reseting table css
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	//adds values of each element in list
	for (i = 0; i < nonmetals.length; i++) {
		element = nonmetals[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}
	//adds title and more info
	document.getElementById("infoheading").innerHTML = "Nonmetals:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infononmetals'>Properties:<ul><li>Non-lustrous, with many colour variations</li><li>Brittle, hard or soft</li><li>Poor electrical conductors compared to metals</li><li>Nonmetal oxides react with water to form acidic solutions</li><li>Tends to gain electrons and form anions</li><li>Often very volatile</li><li>Generally a lower melting point than metals</li><li>Capable of forming covalent network lattice structures, such as diamond and quartz<div style='font-size:1vw;'><img style='height:8vw; width:auto' src = 'images/covalentnetwork.gif'></div></li></ul>&emsp;Non-metallic character is defined by how well and the element is reduced. Therefore, the nonmetallic character would follow the same trend as electronegativity and the opposite trends of metallic character. Non-metallic character increases towards the upper-right of the periodic table, with fluorine being the most non-metallic.";

}

function metal() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}

	for (i = 0; i < metals.length; i++) {
		element = metals[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Metals and Metallic Character:";
	document.getElementById("moreinfo").innerHTML = "Properties: <ul><li>Lustrous</li><li>Usually solid at room temperature except for mercury</li><li>Malleable and ductile</li><li>Good conductors of heat and electricity</li><li>opaque</li><li>Electrical resistance increases as the temperature increases</li><li>Metal oxides react with water to form basic solutions</li><li>Tend to lose electrons and form cations</li></ul><div style='font-size:1vw; text-align:center; float:left;'><img style='height:13vw; width:auto' src = 'images/metall.gif'><br></div>&emsp;Metals form metallic lattices with metallic bonding. The valence electrons of each metal delocalize and travel freely in a lattice of positive metal ions. The negative charge of the electrons and the positive charge of the metal ions attract, forming the structure of the lattice. The strength of the metallic bond is determined by the number of delocalized valence electrons, the effective nuclear charge, and the resulting ionic radius. More delocalized electrons and higher effective nuclear charge result in stronger electrostatic attraction. The smaller the ionic radii result in less displacement between ions, further strengthening the electrostatic attraction. Because the lattice is held together by electrostatic force, it is quite strong.<br><br> &emsp; Metallic Character is defined by how easily the element is oxidized. Therefore, the metallic character would follow the opposite trends as ionization energy. Metallic character increases towards the bottom-left of the periodic table, with the most metallic element being francium.";
}

function halogen() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	for (i = 0; i < halogens.length; i++) {
		element = halogens[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Halogens:";
	document.getElementById('moreinfo').innerHTML = "<div id = 'infohalogens'><div style='font-size:1vw; text-align:center; float:left;'><img style='height:16vw; width:auto' src = 'images/halogens.bmp'><br>The Halogens</div><br><br>&emsp;Halogens are a group of nonmetals that reside in group 17 in the periodic table. Halogens vary in colour as well as phase. They have seven valence electrons and a stable ion charge of 1-. Elements in the group exist in diatomic form. Halogens are readily reduced by the alkali metals to form ionic compounds, and they are potent oxidizing agents. They have relatively low melting points that increase going down the group.</div>";
}

function noblegas() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	for (i = 0; i < noblegases.length; i++) {
		element = noblegases[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Noble Gases:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infonoblegases'><div style='font-size:1vw; text-align:center; float:left;'><img style='height:16vw; width:auto' src = 'images/noble'><br>The Noble Gases</div><br>&emsp;The noble gases are a group of gases in group 18 of the periodic table. They are colourless, odourless, and tasteless. These gases have a full electron orbital and they generally do not form ions. Noble gases are unreactive and inert, with only a few exceptions able to form compounds. All elements strive to attain noble gas configurations because they are the most stable. As a result of its stability, this group possesses very high ionization energies, and some do not have an electronegativity. Under the presence of high voltage, noble gases fluoresce brilliantly, hence the term ‘neon signs’. The melting point increases going down this group.</div>"
}

function metalloid() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	for (i = 0; i < metalloids.length; i++) {
		element = metalloids[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Metalloids: ";
	document.getElementById('moreinfo').innerHTML = "<div id ='infosemiconductors'><div style='font-size:1vw; text-align:center; float:left;'><img style='height:16vw; width:auto' src = 'images/metalloids.jpg'><br>The Semi-conductors</div>(sometimes selenium is omitted)<br><br>&emsp;Often alternatively named as semiconductors and semi-metals. Metalloids reside on the 'staircase' separating the metals and nonmetals. As expected, they have a mixture of metallic and nonmetallic properties. Metalloids are usually solid, and they can form alloys with metals and compounds with nonmetals. Metalloids with over four valence electrons tend to act more like nonmetals, while metalloids with less than four valence electrons act more like metals. For the special cases of metalloids with four valence electrons can act like both metals and nonmetals depending on the reaction. Metalloids with specific conductive properties are called semiconductors. Under the correct conditions, semiconductors can conduct electricity. Opposite of metals, the electrical resistance of a semiconductor decreases as the temperature increases.</div>";
}

function alkalim() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	for (i = 0; i < alkali.length; i++) {
		element = alkali[i]
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Alkali Metals:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoalkalimetals'>&emsp;The alkali metals are a group of metals - excluding hydrogen - that reside in group 2 of the periodic table. The metals themselves are very soft and silvery. As a result of their low ionization energies, they are extremely reactive. Alkali metals are never found in pure form in nature due to their reactivity. They have one single valence electron and a stable ion charge of 1+. This group of metals is extremely reactive, and under the contact of water, it would react vigorously by the reaction 2X<sub>(s)</sub>+2H2O<sub>(l)</sub> → 2XOH<sub>(aq)</sub> + H<sub>2</sub>. They also react readily with the halogens to form a salt. Alkali metal oxides react with water forming acidic solutions. They have relatively low melting points for metals, which generally decreases going down the group. Alkali metals have strong metallic characters.</div><div style='font-size:1vw; text-align:center; float:left; width:50%;'><img style='height:13vw; width:auto' src = 'images/ali.gif'><br>Lithium Metal</div><div style='font-size:1vw; text-align:center; float:left; width:50%;'><img style='height:13vw; width:auto' src = 'images/alrb.gif'><br>Rubidium In Water</div>";
}

function alkalinem() {

	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.animation = "none";
		//item.style.transform = "none";
		item.style.opacity = 0.4;
		item.style.backgroundColor = "grey";
		item.style.boxShadow = "none";
	}
	for (i = 0; i < alkaline.length; i++) {
		element = alkaline[i];
		item = document.getElementById(element);
		item.style.opacity = 1;
		item.style.backgroundColor = "white";
		item.style.boxShadow = "box-shadow:0rem 0rem 4rem #ffffff;";
		item.style.animation = "pulse 1.7s linear 0s infinite alternate";
	}

	document.getElementById("infoheading").innerHTML = "Alkaline Earth Metals:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoalkalineearthmetals'></div><div style='font-size:1vw; text-align:center; float:left;'><img style='height:16vw; width:auto' src = 'images/alkaline.jpg'><br>The Alkaline Earth Metals</div><br>&emsp;The alkaline earth metals are a group of metals that reside in group 2 of the periodic table. The metals themselves are silvery and quite soft. Because of their low ionization energies, the metals are fairly reactive. The alkaline earth metals are found in the earth’s crust, but never in pure form due to its reactivity. Under the contact of water, alkaline earth metals react moderately. They have two valence electrons and a stable ion charge of 2+. They also react readily with the chalcogens in group 16 to form a salt. Alkaline metal oxides react with water forming acidic solutions. Melting points generally decrease going down the group.";
}

function normal() {
	location.reload();

}
//trends 
function electneg() {
	for (var element in elements) {
		//rest styling
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		//pulls property from dictionary
		electroneg = elements[element][3];
		if (electroneg != "n/a") {
			item.style.opacity = 1;
			//scaling which is basically mapping the range to 0.4 - 4
			item.style.boxShadow = "0rem 0rem " + electroneg * 1.2 + "vw #ffffff";
			item.style.transform = "scale(" + electroneg / 3.98 + ")";
			//color mapping across for color gradient
			//travel the edges of rgb spectrum visualized as a cube with dimensions 255x255x255
			//map range of values to range of rgb values
			//we travel on 4 edges so rgb value is 4*255
			//remember to subtract so rgb values do not exceed 
			var color = 1020 * (electroneg - 0.7) / 3.28;
			if (electroneg <= 1.52) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (electroneg <= 2.34) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (electroneg <= 3.16) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (electroneg <= 3.98) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}

	document.getElementById("infoheading").innerHTML = "Electronegativity: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoelectronegativity'><div style='font-size:1vw; text-align:center; float:left;'><img style='height:14vw; width:auto' src = 'images/electroneg.gif'></div> &emsp;Electronegativity, χ, is the relative attraction an atom has for the pair of electrons in bonding. Electronegativity has no units because it is based on a relative scale created by Linus Pauling. Because some elements cannot form covalent bonds, this arbitrary measurement scale for electronegativity is majorly flawed. This means that some elements - such as most noble gases - do not have a measured electronegativity. Alternative measurement systems, such as the Mulliken electronegativity scale, have been developed to fix these inconsistencies. The greater the electronegativity, the stronger the attraction towards the electrons. The trends of electronegativity is similar to that of ionization energy, that is, increasing towards the top-right of the table. To explain, the effective nuclear charge increases towards the top-right of the table; and as a result, the atom would be more attracted to the pair of shared electrons. Electronegativity is responsible for dipole forces, types of bonding, and polarity of the bonds. Elements with high electronegativity have weak metallic character, while elements with low electronegativity have strong metallic character.</div>";
}

function melts() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		meltpt = elements[element][6];
		if (meltpt != "n/a") {
			item.style.opacity = 1;
			item.style.width = "5.5%";
			item.style.transform = "scale(" + 1 + ")";
			meltpt = meltpt + 273.15;
			scale = 0.15 + (3.6 * meltpt) / (4 * 3809.14);
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "vw #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (meltpt - 14.01) / 3809.14;
			if (meltpt <= 966.295) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (meltpt <= 1918.58) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (meltpt <= 2870.865) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (meltpt <= 3824.14) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	document.getElementById("infoheading").innerHTML = "Melting Point:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infomeltingpoint'><div style='font-size:1vw; text-align:center; float:left; margin:0.5vw;'><img style='height:13vw; width:auto;' src = 'images/melt.gif'><br>An ionic compound melting</div>&emsp;The melting point is the temperature when a solid turns liquid. The biggest factors affecting the melting point are the intermolecular and intramolecular forces. Melting can be described as the temperature where the molecules gain sufficient kinetic energy to break free of the molecular attractions holding it in place. This means that the higher the molecular attraction, the higher the melting point. Depending on the metallic character of the element, it can either form metallic bonds or covalent bonds. As described in Metals, metals form a lattice structure essentially held together by electrostatic force. Due to the strong intramolecular force combined with the uniform force distribution throughout, metals generally have a higher melting point than nonmetals. On the other hand, nonmetals tend to form covalent bonds that involve the sharing of electrons. Although covalent bonds can be extremely strong, the intermolecular forces between each molecule are small. Since the attractive forces holding the molecules together are weak, it is effortless to separate the molecules. As a result, nonmetals are often volatile, giving them a generally lower melting point. Although metals usually have higher melting points compared with nonmetals, there are exceptions regarding nonmetallic covalent network structures. Some nonmetals such as carbon can form highly stable allotropes with a covalent network lattice, i.e. diamonds. The network is essentially kept together with strong uniform intermolecular forces. The stable geometry, along with the powerful covalent bonding, makes carbon the element with the highest melting point of all.<br><br> Melting point trends in the periodic table not apparent, so to summarize, the melting points generally follow this order: <b>nonmetals < metals ≈ nonmetallic networks.</b></div>";
}

function ione() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		ion = elements[element][5];
		if (ion != "n/a") {
			item.style.opacity = 1;
			scale = (3.6 * ion) / (4 * 1996.6) - 0.05;
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "vw #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (ion - 375.7) / 1996.6;
			if (ion <= 874.85) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (ion <= 1374) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (ion <= 1873.15) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (ion <= 2372.3) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	document.getElementById("infoheading").innerHTML = " Ionization Energy: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoionizationenergy'><div style='font-size:1vw; text-align:center; float:left; margin:0.5vw;'><img style='height:17vw; width:auto' src = 'images/ion.gif'><br>&emsp;Ionization Process</div>&emsp; Ionization energy is the energy required to remove an electron from an element in its atomic form.<br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; X + energy → X<sup>+</sup> + e<sup>-</sup><br>The values in the table are only the first ionization energies of each element, and further ionization energies can exist when removing more electrons. As the degree of ionization increases, the energy required also increases. Ionization energies are always positive because ionization is an endothermic reaction. The unit of ionization energy is in kJ/mol, which is the amount of energy in kJ required to remove the electrons of 1 mol of atoms. Trends in ionization energy are the opposite of the trends in atomic radius. As the atomic radius decreases, the effective nuclear charge increases, making it harder to remove the electrons. Conversely, as the atomic radius increases, the attractive forces decrease, making electrons easier to remove. Advancing across a period from left to right increases the ionization energy, while going down a group decreases it.</div>";

}

function atomic() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		atom = elements[element][4];
		if (atom != "n/a") {
			item.style.opacity = 1;
			scale = (3.6 * atom) / (4 * 267) + 0.05;
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "vw #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (atom - 31) / 267;
			if (atom <= 97.75) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (atom <= 164.5) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (atom <= 231.25) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (atom <= 298) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			//dulls elements that are not part of the list
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	//show title and more info
	document.getElementById("infoheading").innerHTML = "Atomic Radius: ";
	document.getElementById("moreinfo").innerHTML = "&emsp;The atomic radius is the average distance between the center of two identically bonded atoms. Technically, the term bonding atomic radius is more accurate. The bonding atomic radius is determined because electrons have complex 3-D probability fields instead of simple circling orbitals, and as expected, calculating the distances of these probability fields alone is complicated. Elements that don’t bond with each other - such as the noble gases - use an alternative called the non-bonding atomic radius. The element is first solidified to minimize intermolecular spacing, and then the distance between the centers of two consecutive atoms are measured. For metals, the packing structure of the lattice, along with the experimental data determines the atomic radius. The generalized 'atomic radius' is, in fact, an average of empirical data from a wide range of experiments and compounds. Atomic radius is influenced by the nuclear charge and its attraction of the valence electrons. As the nuclear charge increases, more force is pulling the electrons closer to the nucleus itself. It is also important to take into consideration the charge screening effect by the core electrons. The core electrons effectively cancel part of the charge, and it decreases the net charge reaching the valence electrons. The effective nuclear charge is Z<sub>eff</sub> = Z - S, where S is the screening constant. Across a period from left to right, the atomic radius decreases. This is because the effective nuclear charge increases with the atomic number, consequently pulling the valence electrons closer to the nucleus. Down a group, the atomic radius increases. Although the nuclear charge also increases, so do the shielding from the core electrons. And due to the nuclear shielding effect, entering a higher quantum level has a greater effect than increasing the nuclear charge. This trend is less apparent in the transition metals because electrons can enter the d orbital with the (n-1) quantum number, and for that reason, the effective nuclear charge remains about the same.</div><div id = 'infoatomicradius'><div style = 'text-align:center'><div style='font-size:1vw; text-align:center; float:left;width:50%;'><img style='margin:0.5vw;height:14vw; width:auto' src = 'images/nr.jpg'><br>Bonding Atomic Radius</div><div id = 'infoatomicradius'><div style='font-size:1vw; text-align:center; float:left; width:50%;'><img style='margin:0.5vw;height:14vw; width:auto' src = 'images/charges.webp'><br>Charge Shielding</div><div>";
}
//convert to sciencetifuc notation
function scinotation(n) {

	sn = n.toExponential(2);
	//seperation by the letter e
	//convert to html superscript and stuff
	sn = sn.replace(/e\+?/, '×10<sup>');
	sn = sn + "</sup>";
	return sn;
}

//display elemental information at the top
function show() {
	//find id of element
	id = event.srcElement.id;
	idshow = id + "show";
	//elemental properties pulled from the dictionary
	name = elements[id][0].charAt(0).toUpperCase() + elements[id][0].substring(1);
	atmn = elements[id][1];
	mass = elements[id][2] + " g/mol";
	electroneg = elements[id][3];
	atmr = elements[id][4] + " pm";
	ion = elements[id][5] + " kJ/mol";
	melt = elements[id][6] + "°C";
	if (elements[id][7] != "n/a") {
		conduct = scinotation(elements[id][7]) + "&nbsp;S/n";
	} else {
		conduct = "n/a S/n";
	}
	//the three rows at the top of the table
	row1 = document.getElementById("row1");
	row2 = document.getElementById("row2");
	row3 = document.getElementById("row3");
	//shows speaker image
	document.getElementById("speakshow").innerHTML = "<img onclick = 'sayname(\"" + id + "\")' class = 'speaker' src = 'images/speaker.png' alt = 'say name'>";
	//row 1: name, atomic #, atomic mass
	row1.innerHTML =
		"<div class = 'flex'><div id = 'showname' class = 'show1'>" + name + " &nbsp;	&nbsp;" + id.charAt(0).toUpperCase() + id.substring(1) + "</div>" +
		"<div id = 'showatmn' class = 'show1'>" + "Atomic Number: " + atmn + "</div>" +
		"<div id = 'showatmmass' class = 'show1'>" + "Atomic Mass: " + mass + "</div></div>";
	//row2: atomic radius, ionization energy
	row2.innerHTML = "<div id = 'showatmr' class = 'show2'>" + "Atomic Radius: " + atmr + "</div>" +
		"<div id = 'showion' class = 'show2'>" + "Ionization Energy: " + ion + "</div>";
	//row 3: melting point, electronagativity, conductivity
	row3.innerHTML = "<div class = 'show3'><div id = 'showmelt' class = 'show3'>" + "Melting Point: " + melt + "</div>" +
		"<div id = 'showeneg' class = 'show3'>" + "Electronegativity: " + electroneg + "</div>" +
		"<div id = 'showconduct' class = 'show3'>" + "Conductivity: " + conduct + "</div></div>";

}

function atomicn() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		atomn = elements[element][1];
		if (atomn != "n/a") {
			item.style.opacity = 1;
			scale = (3.6 * atomn) / (4 * 117) + 0.1;
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "rem #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (atomn - 1) / 117;
			if (atomn <= 30.25) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (atomn <= 59.5) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (atomn <= 88.75) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (atomn <= 118) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	document.getElementById("infoheading").innerHTML = "Atomic Number: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoatomicnumber'>&emsp;The elements in the periodic table are ordered by the atomic number. The atomic number is the number of protons in the element. Changing the atomic number changes the element and its properties. Since the atomic number is the number of protons in an element, it is also the number of electrons in a neutral atom. The atomic number influences the nuclear charge of the atom, and as a result, it affects the properties such as the atomic radius and the ionization energy. The periodic table is ordered in terms of atomic number because it can show periodic trends the best in this way (additional information under History). </div>";
}

function atomicm() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		atomma = elements[element][2];
		if (atomma != "n/a") {
			//find atomic mass of those elements with ()
			if (isNaN(parseFloat(atomma)) == true) {
				atomma = atomma.slice(1, -1);
				var atomm = parseInt(atomma, 10);
			}
			var atomm = parseInt(atomma, 10);
			item.style.opacity = 1;
			scale = (3.6 * atomm) / (4 * 293) + 0.1;
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "rem #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (atomm - 1) / 293;
			if (atomm <= 74.25) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (atomm <= 147.5) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (atomm <= 220.75) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (atomm <= 294) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	document.getElementById("infoheading").innerHTML = "Atomic Mass:";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoatomicmass'>&emsp;The atomic mass is the average mass of the occurring isotopes of the element. The nucleus accounts for nearly all the mass of an atom. For this reason, the atomic mass is the combination of neutrons and protons in the nucleus. Given the atomic mass and the atomic number, it is possible to determine the number of neutrons in the isotope. The units for atomic mass is g/mol, the mass in grams for one mol of the element. Past periodic tables were ordered by atomic mass, but problems arose with this method.</div>";
}

function conductshow() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		conduct = elements[element][7];
		if (conduct != "n/a") {
			item.style.opacity = 1;
			scale = 0.13 + (3.6 * conduct) / (4 * 61999999.999999999999999);
			item.style.boxShadow = "0rem 0rem " + scale * 4 + "vw #ffffff";
			item.style.transform = "scale(" + scale + ")";
			var color = 1020 * (conduct - 0.00000000000001) / 61999999.999999999999999;
			if (conduct <= 15500000.00000000000000075) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (conduct <= 31000000.0000000000000005) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (conduct <= 46500000.00000000000000025) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (conduct <= 62000000) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
	}
	document.getElementById("infoheading").innerHTML = "Conductivity: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoconductivity'>(The visual representation above is only for electrical conductivity. Due the the massive range that conductivity has, the size and color is an inaccurate representation of the actual values)<br><br>&emsp;Conductivity can be further separated into three categories: electrical conductivity, thermal conductivity, and photoconductivity. The mechanism for the first two types of conductivity is similar to an extent, and they both follow similar trends in the periodic table.<br><br><div style='font-size:1vw; text-align:center; float:left;'><img style='height:17vw; width:auto' src = 'images/econduct.gif'><br>Electrical Conduction</div>&emsp;Electrical conductivity is determined by two major factors: how easily the electrons can move through the metallic lattice, and how many electrons can be moved. These factors already show that gases are horrible conductors. While for nonmetallic solids, electrons are localized and unable to flow.  Semiconductors, like their name, are semiconducting, and they often only conduct under specific conditions. For metals though, the movement through the metallic lattice is determined by the effective nuclear charge, the ionic radius, temperature, and its lattice structure. The lower the effective nuclear charge, the less the attraction that hinders the movement of electrons. Electron movement also depends on the ionic radius; the smaller the ionic radius, the least likely it would get in the way. The rate of electron transfer also depends on the available charge density, which is determined by the number of valence electrons delocalized in the lattice. Both of these factors are also affected by the lattice structure of the material. The metallic lattice is affected by the temperature; increasing the temperature increases the random vibrations of the lattice, which hinders electron flow. Certain superconductors have specific lattice structures that enable the formation of cooper pairs, with improved phonon (discrete vibrational energy wave) transfer explained by the Bardeen-Cooper-Schrieffer theory. The combination of Cooper pairs and phonons allows for near 100% energy transfer efficiency, resulting in extremely high electrical conductivity. These unique combinations of factors make trends of electrical conductivity quite ambiguous. There are very few cases with nonmetals that have good electrical conductivity; a common example is an allotrope of carbon, graphene (the table above uses graphite, which is a collection of graphene molecules stacked together). Graphene has a conjugated bond system with alternating pi and sigma bonds. Since the conjugated system of graphene allows for electron delocalization, it has good electrical conductivity. Generally speaking though, most nonmetals cannot form structures with delocalized electrons, so metals conduct significantly better than nonmetals. The unit for electrical conductivity is Siemens per meter (S/m), formerly and equivalent to, resistance<sup>-1</sup> per meter (mho/m).<br><br>&emsp;Thermal conductivity is the conductivity of heat through a material. Heat conduction occurs when atoms of high kinetic energy bumping into atoms of lower kinetic energy. In other words, thermal conductivity is the rate of energy diffusion through a material. Other than transferring kinetic energy by collisions, the whole crystal lattice can transfer energy in the form of phonons. This means the two factors affecting the thermal conduction are density (particles bump into each other easily), and propagation of phonons. Electrons can transfer kinetic energy, so to a small extent, the better the electrical conductivity, the better the thermal conductivity. Of course, the majority of thermal conductivity is facilitated by larger particles with availability dependent on the density. Furthermore, If the material forms a distinct geometric lattice (types of lattice structures that improve phonon transfer is beyond the understanding of this assignment), phonons can transfer waves of kinetic energy effectively. Phonons are so significant that diamond, a covalent crystal, has one of the highest thermal conductivities. Similar to electrical conductivity, thermal conductivity trends are also unclear. The unit for thermal conductivity is kilowatts per meter kelvin (W/(m⋅K)). <br><div style='font-size:1vw; text-align:center; float:left; width:50%'><img style='height:13vw; width:auto' src = 'images/phonon.gif'><br>Phonon Transfer</div><div style='font-size:1vw; text-align:center; float:left; width:50%'><img style='height:13vw; width:auto' src = 'images/hconduct.gif'><br>Heat Conductivity</div><br><br>&emsp;Photoconductivity is how a material’s electrical conductivity improves under the presence of photons. Materials that show this property are semiconductors. Since the exact mechanisms of this effect are very complex, it will be omitted.<br><br><b>Summary for electrical conductivity:<br>Gases < nonmetallic liquids < metallic liquids << specific nonmetallic covalent networks ≈ metals. With group 11 being the best conductors.<br><br>Summary for thermal conductivity:<br>Gases < liquids < metals < specific covalent networks that have efficient phonon transfer</b><br><br>Because this is chemistry, there are always exeptions that require complicated theories, so the description of the above trends are limited.</div>";
}

function historyreset() {
	//reset styling and add custom color
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		document.getElementById(element).style.opacity = "1";
		document.getElementById(element).style.boxShadow = "0rem 0rem 4vw #ffffff";
		document.getElementById(element).style.transform = "none";
		document.getElementById(element).style.animation = "none";
		document.getElementById(element).style.backgroundColor = "rgb(217, 72, 180)"
	}
	for (i = 0; i < alkali.length; i++) {
		document.getElementById(alkali[i]).style.backgroundColor = "rgb(217, 33, 20)";
	}
	for (i = 0; i < alkaline.length; i++) {
		document.getElementById(alkaline[i]).style.backgroundColor = "rgb(191, 42, 79)";
	}
	for (i = 0; i < nonmetals.length; i++) {
		document.getElementById(nonmetals[i]).style.backgroundColor = "rgb(61, 123, 217)";
	}
	for (i = 0; i < metalloids.length; i++) {
		document.getElementById(metalloids[i]).style.backgroundColor = "rgb(157, 74, 212)";
	}
	for (i = 0; i < noblegases.length; i++) {
		document.getElementById(noblegases[i]).style.backgroundColor = "rgb(0, 163, 103)";
	}
	for (i = 0; i < halogens.length; i++) {
		document.getElementById(halogens[i]).style.backgroundColor = "rgb(20, 197, 217)";
	}
}

function history() {
	historyreset();
	document.getElementById("infoheading").innerHTML = "History and Introduction:";
	document.getElementById("moreinfo").innerHTML = "<div id='infohistory'><table id= 'history'><tr><td class = 'showimage'><img src='images/johann-wolfgang-doebereiner.jpg' alt='Doebereiner'></td><td><b>J.W. Döbereiner (1780 - 1849)</b><br>&emsp;The German scientist Johann Döbereiner discovered that the elements of calcium, strontium and barium have similar properties. Furthermore, he realized that strontium’s atomic mass was approximately the average atomic mass of calcium and barium. He then discovered more triples of elements that exhibited these properties, such as chlorine, bromine, and iodine. He named this pattern the law of triads. Döbereiner’s law of triads was very limiting because many elements were left out, and the scientific community at that time did not pay much attention to it. Although the law was not the most accurate, it marked the beginning of classifying elements by their properties.</td></tr><tr><td class = 'showimage'><img src='images/John_newlands.jpg' alt='Newlands'></td><td><b>J.A.R Newlands (1837-1898)</b><br>&emsp;In 1864, the English chemist John Newlands discovered that when elements were ordered by atomic weight, there was a recurring pattern in octaves consisting of seven elements. The properties of each element were similar to the properties of the 8th element above or below it. In 1865, Newlands published his periodic results and termed the pattern, the law of octaves. Similar to Döbereiner’s law of triads, Newlands law of octaves was also limited and had many caveats. For example, highly reactive metals such as the alkali metals became grouped with unreactive metals like silver and copper. In 1866, Newlands presented his work to the chemical society and got rejected. He felt humiliated by this rejection, and as a result, he returned his position as the chief chemist at a sugar plant.</td></tr><tr><td class = 'showimage'><img src='images/Dmitri-Mendeleev.jpg' alt='Mendeleev'></td><td><b>Demitri Mendeleev (1834-1907)</b><br>&emsp;Four years after Newlands' rejection in 1869, the Russian chemist Demitri Mendeleev discovered that repeating patterns occurred if elements were ordered by atomic mass. Mendeleev termed this, the periodic law. Compared to Newlands, Mendeleev was careful and he ordered the elements with similar properties first, then he finalized and grouped the elements. Elements with similar properties were placed in columns, while elements with increasing atomic mass were ordered in rows. Mendeleev’s first periodic table of the elements was published in 1869. Mendeleev also improved his table over time and left gaps for undiscovered elements. Using the periodic trends that he discovered, Mendeleev was able to predict the properties of those undiscovered elements. Even though Mendeleev’s table was a huge improvement compared to the past, there were still some inconsistencies. To illustrate, iodine with an atomic mass of 126.90, had to be placed after tellurium, despite that tellurium having a higher atomic mass of 127.60. Mendeleev’s massive improvements of the periodic table, its relatively accurate periodic law, and its shocking predictive abilities deemed Mendeleev the founding father of the modern periodic table.</td></tr><tr><td class = 'showimage'><img src='images/Moseley.jpg' alt='Moseley'></td><td><b>Henry Moseley (1887-1915)</b><br>&emsp;From the previous versions of the periodic table, it soon became clear that arrangement by atomic mass was not the best option. In 1913 a British physicist, Henry Mosley, realized this problem and arranged the elements in terms of the atomic number instead. This adaptation fixed the previous issues, and it established the basis of the modern periodic table.</td></tr><tr><td colspan = '2'>&emsp;In the end, the hard work of many scientists has created the modern periodic table, a signature piece of scientific motif that is recognizable throughout the world.</td></tr><tr><td colspan='2'><b>The Modern Periodic Table of Elements:</b><br>&emsp;The modern table is arranged in the order of increasing atomic number, Z. Elements with similar properties are placed below each other in columns called families or groups, increasing going right of the table. Some groups have special names due to their striking physical properties, as seen in the interactive buttons at the top. The whole periodic table is separated into 18 distinct groups, currently totalling 118 elements. The periodic table is also separated into rows called periods. The period number represents the principal quantum number (shows the highest energy level occupied by the electrons) of the element, and it increases going down.</td></tr><tr><td colspan='2'><b>The periodic table doesn’t stop here, more elements could be discovered in the future! After the long introduction, let’s start your journey of discovery with this interactive periodic table.</b></td></tr></table></div>";
}

function ionreset() {
	for (var element in elements) {
		document.getElementById(element).style.color = "black";
		document.getElementById(element).style.opacity = "1";
		document.getElementById(element).style.boxShadow = "0rem 0rem 4vw #ffffff";
		document.getElementById(element).style.transform = "none";
		document.getElementById(element).style.animation = "none";
		document.getElementById(element).style.backgroundColor = "lightblue"
	}
	for (i = 0; i < alkali.length; i++) {
		document.getElementById("h").style.backgroundColor = "Lightgreen";
		document.getElementById(alkali[i]).style.backgroundColor = "Lightgreen";
	}
	for (i = 0; i < alkaline.length; i++) {
		document.getElementById(alkaline[i]).style.backgroundColor = "lightblue";
	}
	for (i = 0; i < noblegases.length; i++) {
		document.getElementById(noblegases[i]).style.backgroundColor = "rgb(0, 163, 103)";
	}
	for (i = 0; i < halogens.length; i++) {
		document.getElementById(halogens[i]).style.backgroundColor = "orange";
	}
	for (i = 0; i < g13.length; i++) {
		document.getElementById(g13[i]).style.backgroundColor = "rgb(157, 74, 212)";
	}
	for (i = 0; i < g14.length; i++) {
		document.getElementById(g14[i]).style.backgroundColor = "rgb(217, 72, 180)";
	}
	for (i = 0; i < g15.length; i++) {
		document.getElementById(g15[i]).style.backgroundColor = "rgb(219, 72, 72)";
	}
	for (i = 0; i < g16.length; i++) {
		document.getElementById(g16[i]).style.backgroundColor = "rgb(230, 111, 0)";
	}
}

function ioncharge() {
	ionreset();
	document.getElementById("infoheading").innerHTML = "Ion Charge: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'infoioncharge'>&emsp;The ion charge is the charge of the stable ion that the element tends to form. The two factors affecting ion charge are the metallic character of the element and the number of valence electrons. Because full electrons shells are very stable, all elements want to gain this formation. As to whether the atom loses or gains electrons, is determined by the metallic character of the element. Metals tend to lose electrons, and nonmetals tend to gain electrons. Elements in each group have the same number of valence electrons, as seen in numbers in brackets at the top. The transitional metals are an exception because partially filled d-shells can give stable ion configurations. In other words, transition metals are multivalent, and they have multiple stable ion charges. Special elements such as carbon and silicon can both gain or lose four electrons to reach a stable full shell. As an example, the element Thallium has three valence electrons, and since it is a metal, it oxidizes leaving a stable ion charge of Thallium 3+. Another example would be Tellurium; Tellurium has six valence electrons, and since it is a nonmetal, it tends to be reduced, leaving a stable ion charge of Tellurium 2-.</div>";

}

function reactreset() {

	for (var element in elements) {
		item = document.getElementById(element);
		item.style.transform = "none";
		item.style.animation = "none";
		sym = document.getElementById(element + "symbol");
		electroneg = elements[element][3];
		console.log("rgb(" + color + "," + color + "," + color + ")");
		if (electroneg != "n/a") {
			item.style.opacity = 1;
			item.style.boxShadow = "0rem 0rem " + electroneg * 1.2 + "vw #ffffff";
			item.style.transform = "scale(" + electroneg / 3.98 + ")";
			var color = 1020 * (electroneg - 0.7) / 3.28;
			if (electroneg <= 1.52) {
				item.style.backgroundColor = "rgb(" + Math.round(color) + ",0,255)";
			} else if (electroneg <= 2.34) {
				item.style.backgroundColor = "rgb(255,0," + Math.floor(255 - color - 255) + ")";
			} else if (electroneg <= 3.16) {
				item.style.backgroundColor = "rgb(255," + Math.floor(color - 510) + ",0)";
			} else if (electroneg <= 3.98) {
				item.style.backgroundColor = "rgb(255,255," + Math.floor(color - 765) + ")";
			}
			color = item.style.backgroundColor;
			color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
			rgbColors = color.split(',', 3);
			// Convert redValue to integer
			rgbColors[0] = parseInt(rgbColors[0]);
			// Convert greenValue to integer
			rgbColors[1] = parseInt(rgbColors[1]);
			// Convert blueValue to integer
			rgbColors[2] = parseInt(rgbColors[2]);
			brightness = (0.299 * rgbColors[0] + 0.587 * rgbColors[1] + 0.114 * rgbColors[2]);
			console.log(rgbColors, brightness);
			if (brightness < 76) {
				item.style.color = "white";
			} else {
				item.style.color = "black";
			}
		} else {
			item.style.backgroundColor = "grey";
			item.style.boxShadow = "none";
			item.style.opacity = 0.4;
		}
		document.getElementById(element).style.opactity = "1";
		document.getElementById(element).style.transform = "none";
		document.getElementById(element).style.animation = "none";
	}

}

function chemreact() {
	reactreset();
	document.getElementById("infoheading").innerHTML = "Chemical Reactivity: ";
	document.getElementById("moreinfo").innerHTML = "<div id = 'inforeactivity'>(Cool tones represent metal reactivity and warm tones represent nonmetal reactivity)<br><br> &emsp;Chemical reactivity is separated into two types: The reactivity of metals and the reactivity of nonmetals. The determining factor for the reactivity of metals is the ionization energy. The lower the ionization energy, the more the metal wants to be readily oxidized, making it a better reducing agent. Conversely, the reactivity of a nonmetal increases along with the electronegativity. The higher the electronegativity, the more the nonmetals want to be readily reduced by taking available electrons from the surrounding. This means as the electronegativity increases, the more potent of an oxidizing agent the nonmetals become. From the above properties, it may become obvious that reactive nonmetals react vigorously with reactive nonmetals. To illustrate, nonmetals want to be reduced, and metals want to be oxidized; the pairs of elements perfectly supplement each other to form an ionic bond. In summary, metallic reactivity increases towards the bottom-left of the periodic table, while nonmetallic reactivity increases towards the top-right of the periodic table (excluding the noble gases).</div>";
}
//function to speak any string
function speak(sentence) {
	var msg = new SpeechSynthesisUtterance(sentence);
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[200]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = 1; // 0.1 to 10
	msg.pitch = 0.8; //0 to 2
	msg.lang = 'en-US';
	speechSynthesis.speak(msg);
}
//says element name after clicking speaker
function sayname(id) {
	console.log(id)
	speak(elements[id][0]);
}
//oof
function rickroll() {
	window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank");
}