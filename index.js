var menus = [],
	travaux = [];
	divi=[];
/*console.log('%cmenus', "background: rgba(200,100,55,1); color: #bada55", menus);
*/
var CreerMenu = function(arg) {
	var titre = arg.titre,
		actif = arg.actif;
	return {
		titre: titre,
		actif: actif
	};

};

var CreerDiv = function(arg) {
	var titre = arg.titre,
		textAcceuil = arg.textAcceuil,
		imageBackground= arg.imageBackground;
	return {
		titre: titre,
		textAcceuil: textAcceuil,
		imageBackground: imageBackground
	};
};

var CreerTravail = function(arg) {
	var titre = arg.titre,
		vignette = arg.vignette,
		technologie = arg.technologie,
		date = arg.date;
	return {
		titre: titre,
		vignette: vignette,
		technologie: technologie,
		date: date
	};

}



menus.push(CreerMenu({
	titre: "Acceuil",
	actif: false
}));
menus.push(CreerMenu({
	titre: "Formation",
	actif: false
}));
menus.push(CreerMenu({
	titre: "Travaux",
	actif: false
}));
menus.push(CreerMenu({
	titre: "Contact",
	actif: false
}));


travaux.push(CreerTravail({
	titre: "Titre",
	vignette: "Vignette",
	technologie: "Technologie",
	date: "Date"
}));
travaux.push(CreerTravail({
	titre: "cv",
	vignette: "img/html5.jpg",
	technologie: "HTML CSS JS",
	date: "novembre 2016"
}));
travaux.push(CreerTravail({
	titre: "cv",
	vignette: "img/html5.jpg",
	technologie: "HTML CSS JS",
	date: "novembre 2016"
}));

travaux.push(CreerTravail({
	titre: "cv",
	vignette: "img/html5.jpg",
	technologie: "HTML CSS JS",
	date: "novembre 2016"
}));


for (var i = 0; i < menus.length; i++) {

	G("#menu").elthtml({
		contenu: menus[i].titre,

		tag: "a",
		prop: [{
			class: "nava",
			title: "test"
				},
		"@#" + menus[i].titre.toLowerCase()
		]

	});
}


for (var i = 0; i < travaux.length; i++) {
	G("#ttrav").elthtml({
			tag: "tr",
			prop: ["#lig" + i]
	});

	for (var t in travaux[i]) {
		var contenu = travaux[i][t];
		console.log('%ct', "background: rgba(200,100,55,1); color: #bada55", t);
		if (t == "vignette" && i > 0) {

			contenu = ('<img src="' + contenu + '" alt="html5">');
		}
		G("#lig" + i).elthtml({
			contenu: contenu,
				tag: "td"
		});
	}

}
