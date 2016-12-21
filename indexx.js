var G = function(arg) {

	var element;
	var elements = [];
	var StringEnObjet = function(arg) {
		var premCaractere = arg.substring(0, 1);
		var reste = arg.substring(1, arg.length),
		tout = arg;
		console.log('tout', tout);
		var arg = {}
		premCaractere == "#" ? arg = {
				id: reste
			} :
			premCaractere == "." ? arg = {
				class: reste
			} :
			premCaractere == "@" ? arg = {
				href: reste
			} :
			arg = {
				tag: tout
			};
		return arg;
	}

	var selection = function(arg) {
		var select, selects = [];
		var k = Object.keys(arg)[0];
		var v = Object.values(arg)[0];

		(k === "id") ? select = document.getElementById(v):
		(k === "class") ? select = document.getElementsByClassName(v):
			(k === "tag") ? select = document.getElementsByTagName(v) : "";

		if (select.length) {
			for (var s = 0; s < select.length; s++) {
				selects.push(select[s])
			}
		} else {
			typeof(select) == "array" ? selects.push([select]): selects.push(select);
		}

		return selects;
	};

	args = []
	if (!Array.isArray(arg)) {
		typeof(arg) == "string" ? arg = StringEnObjet(arg): "";
		args.push(arg)

	} else {
		for (var i = 0; i < arg.length; i++) {
			typeof(arg[i]) == "string" ? arg[i] = StringEnObjet(arg[i]): "";
			if (typeof(arg[i] == "object")) {
				for (a in arg[i]) {
					args.push({
						[a]: arg[i][a]
					})
				}
			} else {
				args.push(arg)
			}
		}
	}

	for (var i = 0; i < args.length; i++) {
		var selectionne = selection(args[i])


		for (var z = 0; z < selectionne.length; z++) {
			selectionne[z] ? elements.push(selectionne[z]) : "";
		}
	}
	elements.length==1?elements=elements[0]:"";




	elements.elthtml = function(arg) {

		var init = function(arg) {
			var contenu = arg.contenu,
				tag = arg.tag,
				prop = arg.prop;
				console.log('arg.prop', arg.prop);
				console.log('arg.prop', typeof(arg.prop));
			return {
				contenu: contenu,

					tag: tag,
					prop: prop

			};
		};

	/*une fonction pour faciliter la creation d'element dans le DOM
	Son argument est un objet:
		{
			contenu: "text ou html",
			tag: "nom du tag de l'element à creer exemple: div"
			prop: [".nom" ou "#nom" ou "@cible" ou {class: nom} ou {id: nom} ou {href: cible} ou {title: titre} ... ] ce tableau regroupe toutes les proprietées à ajouter à notre élément, il peut contenir plusieurs elements et les objets qui s'y trouvent aussi!!

		};
	On peut donc creer un element avec plusieurs proprietees a plusieurs endroits
	DONC FAIRE ATTENTION A NE PAS AVOIR PLUSIEURS FOIS LE MEME ID!!
		*/
	var prepElt=function(arg){
		console.log('arg', arg);
		arg = init(arg);
		var tag, prop="",
			tag = arg.tag;
		arg.prop ? prop = arg.prop : prop = "";
		arg.contenu ? contenu = arg.contenu : contenu = "";
		var monLien = document.createElement(tag); /*cree un element => var tag*/
					console.log('typeof(prop)', typeof(prop));

		if (typeof(prop) == "string") {
			console.log('prop', prop);

			prop = StringEnObjet(prop);
		}
			if(prop.length){
			for (var i = 0; i < prop.length; i++) { /*pour chaque prop*/
				if (typeof(prop[i]) == "string") { /*si la proprieté est un string*/
					prop[i] = StringEnObjet(prop[i]);
				}

				if (typeof(prop[i]) == "object") {
					var cles = Object.keys(prop[i]),
						valeur = Object.values(prop[i]);
					for (var cle = 0; cle < cles.length; cle++) {
						monLien.setAttribute(cles[cle], valeur[cle]);
					}
				}
			}
			}else{
				var cles = Object.keys(prop),
						valeur = Object.values(prop);
						monLien.setAttribute(cles[0], valeur[0]);
			}

		monLien.innerHTML = contenu; /*rempli la div avec le texte a afficher*/
	return monLien
	}



			if (this.length) {
				console.log("zerezez")
			for (var s = 0; s < this.length; s++) {
				monLien=prepElt(arg)
				console.log(this[s])
						this[s].appendChild(monLien)
			}
		} else {
			monLien=prepElt(arg)
			typeof(this) == "array" ? this[0].appendChild(monLien): this.appendChild(monLien);
		}


	}

	return elements;

};

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

divi.push(CreerDiv({
	titre: "Acceuil",
 	textAcceuil:  "CV<br>HTML<br><img class='im' src='img/html5.jpg' alt='html5'>",
  	imageBackground: "img/cv-bg-3.jpg"
}));
divi.push(CreerDiv({
	titre: "Formation",
 	textAcceuil:  "Formation",
  	imageBackground: "img/cv-bg-3.jpg"
}));
divi.push(CreerDiv({
	titre: "Travaux",
 	textAcceuil:  "Travaux",
  	imageBackground: "img/cv-bg-3.jpg"
}));
divi.push(CreerDiv({
	titre: "Contact",
 	textAcceuil:  "Contact",
  	imageBackground: "img/cv-bg-3.jpg"
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

for (var i = 0; i < menus.length; i++) {

	G("#menu").elthtml({
		contenu: menus[i].titre,

		tag: "a",
		prop: [{
			class: "bar e",
			title: "test"
				},
		"@#" + menus[i].titre.toLowerCase()
		]

	});
}





for(var i=0;i<divi.length;i++){
	G(".sections").elthtml({
		contenu:"",
	 	tag: "div",
	 	prop: [".section","#"+divi[i].titre.toLowerCase()]

	 });

	G("#"+divi[i].titre.toLowerCase()).elthtml({
		contenu:"",
	 	tag: "div",
	 	prop: [".alig","#alig"+i]

	 });

		if (i==0){
			G("#alig"+i).elthtml({
			contenu: divi[i].textAcceuil,
		 	tag: "h1",
		 	prop: "#prem"
			 });
	}else{
		G("#alig"+i).elthtml({
		contenu: divi[i].textAcceuil,
	 	tag: "h1",
		 });
	}
}

for (var i = 0; i < travaux.length; i++) {
	G("#travaux").elthtml({
			tag: "tr",
			prop: ["#lig" + i]
	});

	for (var t in travaux[i]) {
		var contenu = travaux[i][t];
		console.log('%ct', "background: rgba(200,100,55,1); color: #bada55", t);
		if (t == "vignette" && i > 0) {

			contenu = ('<img src="' + contenu + '" alt="html5">');
			console.log(contenu);
		}
		G("#lig" + i).elthtml({
			contenu: contenu,
				tag: "td"
		});
	}

}
