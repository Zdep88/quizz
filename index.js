const quizz = [
    {
        "theme": "html",
        "number": 1,
        "question": "Que signifie HTML ?",
        "options": [
            "HyperText Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "HyperText Markdown Language"
        ],
        "answer": "HyperText Markup Language"
    },
    {
        "theme": "html",
        "number": 2,
        "question": "Quelle balise HTML est utilisée pour insérer une image ?",
        "options": ["<img>", "<image>", "<pic>", "<src>"],
        "answer": "<img>"
    },
    {
        "theme": "html",
        "number": 3,
        "question": "Quelle balise HTML est utilisée pour insérer un lien hypertexte ?",
        "options": ["<a>", "<link>", "<href>", "<url>"],
        "answer": "<a>"
    },
    {
        "theme": "html",
        "number": 4,
        "question": "Quelle est la balise HTML correcte pour un titre de niveau 1 ?",
        "options": ["<h1>", "<header>", "<head>", "<title>"],
        "answer": "<h1>"
    },
    {
        "theme": "html",
        "number": 5,
        "question": "Quel attribut HTML est utilisé pour définir un lien hypertexte ?",
        "options": ["href", "src", "link", "url"],
        "answer": "href"
    },
    {
        "theme": "html",
        "number": 6,
        "question": "Quelle balise HTML est utilisée pour insérer une liste non ordonnée ?",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "answer": "<ul>"
    },
    {
        "theme": "html",
        "number": 7,
        "question": "Quelle balise HTML est utilisée pour insérer une liste ordonnée ?",
        "options": ["<ol>", "<ul>", "<li>", "<list>"],
        "answer": "<ol>"
    },
    {
        "theme": "html",
        "number": 8,
        "question": "Quelle balise HTML est utilisée pour insérer un tableau ?",
        "options": ["<table>", "<tab>", "<grid>", "<tr>"],
        "answer": "<table>"
    },
    {
        "theme": "html",
        "number": 9,
        "question": "Quelle balise HTML est utilisée pour insérer une cellule dans un tableau ?",
        "options": ["<td>", "<tr>", "<table>", "<cell>"],
        "answer": "<td>"
    },
    {
        "theme": "html",
        "number": 10,
        "question": "Quelle balise HTML est utilisée pour insérer un formulaire ?",
        "options": ["<form>", "<input>", "<fieldset>", "<button>"],
        "answer": "<form>"
    },
    {
        "theme": "html",
        "number": 11,
        "question": "Quel est le bon format pour un commentaire en HTML ?",
        "options": [
            "<!-- Commentaire -->",
            "// Commentaire",
            "/* Commentaire */",
            "# Commentaire"
        ],
        "answer": "<!-- Commentaire -->"
    },
    {
        "theme": "html",
        "number": 12,
        "question": "Quelle balise HTML est utilisée pour insérer une vidéo ?",
        "options": ["<video>", "<media>", "<movie>", "<vid>"],
        "answer": "<video>"
    },
    {
        "theme": "html",
        "number": 13,
        "question": "Quelle balise HTML est utilisée pour insérer une ligne horizontale ?",
        "options": ["<hr>", "<line>", "<break>", "<horizontal>"],
        "answer": "<hr>"
    },
    {
        "theme": "html",
        "number": 14,
        "question": "Quelle balise HTML est utilisée pour insérer une image de fond ?",
        "options": ["<img>", "<background>", "<div>", "<style>"],
        "answer": "<img>"
    },
    {
        "theme": "html",
        "number": 15,
        "question": "Quelle balise HTML est utilisée pour insérer un bouton ?",
        "options": ["<button>", "<input>", "<form>", "<click>"],
        "answer": "<button>"
    },
    {
        "theme": "html",
        "number": 16,
        "question": "Quelle balise HTML est utilisée pour insérer un titre de niveau 2 ?",
        "options": ["<h2>", "<header>", "<head>", "<title>"],
        "answer": "<h2>"
    },
    {
        "theme": "html",
        "number": 17,
        "question": "Quelle balise HTML est utilisée pour insérer un paragraphe ?",
        "options": ["<p>", "<para>", "<text>", "<paragraph>"],
        "answer": "<p>"
    },
    {
        "theme": "html",
        "number": 18,
        "question": "Quelle balise HTML est utilisée pour insérer une liste de définition ?",
        "options": ["<dl>", "<list>", "<ul>", "<ol>"],
        "answer": "<dl>"
    },
    {
        "theme": "html",
        "number": 19,
        "question": "Quelle balise HTML est utilisée pour insérer une citation ?",
        "options": ["<blockquote>", "<quote>", "<cite>", "<q>"],
        "answer": "<blockquote>"
    },
    {
        "theme": "html",
        "number": 20,
        "question": "Quelle balise HTML est utilisée pour insérer un champ de saisie de texte ?",
        "options": ["<input>", "<textarea>", "<text>", "<field>"],
        "answer": "<input>"
    },
    {
        "theme": "css",
        "number": 1,
        "question": "Quelle propriété CSS est utilisée pour changer la couleur de fond ?",
        "options": ["background-color", "color", "bgcolor", "background"],
        "answer": "background-color"
    },
    {
        "theme": "css",
        "number": 2,
        "question": "Quelle propriété CSS est utilisée pour changer la taille de la police ?",
        "options": ["font-size", "text-size", "size", "font"],
        "answer": "font-size"
    },
    {
        "theme": "css",
        "number": 3,
        "question": "Quelle propriété CSS est utilisée pour centrer un texte ?",
        "options": ["text-align", "align", "center", "vertical-align"],
        "answer": "text-align"
    },
    {
        "theme": "css",
        "number": 4,
        "question": "Quelle propriété CSS est utilisée pour ajouter de l'espace à l'intérieur d'un élément ?",
        "options": ["padding", "margin", "border", "spacing"],
        "answer": "padding"
    },
    {
        "theme": "css",
        "number": 5,
        "question": "Quelle propriété CSS est utilisée pour ajouter de l'espace à l'extérieur d'un élément ?",
        "options": ["margin", "padding", "border", "spacing"],
        "answer": "margin"
    },
    {
        "theme": "css",
        "number": 6,
        "question": "Quelle propriété CSS est utilisée pour définir la largeur d'un élément ?",
        "options": ["width", "height", "size", "max-width"],
        "answer": "width"
    },
    {
        "theme": "css",
        "number": 7,
        "question": "Quelle propriété CSS est utilisée pour définir la hauteur d'un élément ?",
        "options": ["height", "width", "size", "max-height"],
        "answer": "height"
    },
    {
        "theme": "css",
        "number": 8,
        "question": "Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
        "options": ["color", "text-color", "font-color", "foreground"],
        "answer": "color"
    },
    {
        "theme": "css",
        "number": 9,
        "question": "Quelle propriété CSS est utilisée pour définir le style de bordure d'un élément ?",
        "options": ["border-style", "border", "outline", "border-width"],
        "answer": "border-style"
    },
    {
        "theme": "css",
        "number": 10,
        "question": "Quelle propriété CSS est utilisée pour définir l'espace entre les lignes de texte ?",
        "options": ["line-height", "letter-spacing", "text-spacing", "spacing"],
        "answer": "line-height"
    },
    {
        "theme": "css",
        "number": 11,
        "question": "Quelle propriété CSS est utilisée pour définir l'alignement horizontal d'un élément ?",
        "options": ["text-align", "align", "horizontal-align", "justify"],
        "answer": "text-align"
    },
    {
        "theme": "css",
        "number": 12,
        "question": "Quelle propriété CSS est utilisée pour définir la police d'un texte ?",
        "options": ["font-family", "font", "text-font", "font-style"],
        "answer": "font-family"
    },
    {
        "theme": "css",
        "number": 13,
        "question": "Quelle propriété CSS est utilisée pour rendre un élément invisible ?",
        "options": ["visibility: hidden;", "display: none;", "opacity: 0;"],
        "answer": "visibility: hidden;"
    },
    {
        "theme": "css",
        "number": 14,
        "question": "Quelle propriété CSS est utilisée pour définir la transparence d'un élément ?",
        "options": ["opacity", "visibility", "display", "transparent"],
        "answer": "opacity"
    },
    {
        "theme": "css",
        "number": 15,
        "question": "Quelle propriété CSS est utilisée pour définir la position d'un élément ?",
        "options": ["position", "top", "left", "float"],
        "answer": "position"
    },
    {
        "theme": "css",
        "number": 16,
        "question": "Quelle propriété CSS est utilisée pour définir le type de positionnement d'un élément ?",
        "options": ["position", "display", "float", "z-index"],
        "answer": "position"
    },
    {
        "theme": "css",
        "number": 17,
        "question": "Quelle propriété CSS est utilisée pour définir l'ordre d'empilement d'un élément ?",
        "options": ["z-index", "position", "display", "order"],
        "answer": "z-index"
    },
    {
        "theme": "css",
        "number": 18,
        "question": "Quelle propriété CSS est utilisée pour définir le type d'affichage d'un élément ?",
        "options": ["display", "visibility", "opacity", "type"],
        "answer": "display"
    },
    {
        "theme": "css",
        "number": 19,
        "question": "Quelle propriété CSS est utilisée pour définir l'ombrage d'un élément ?",
        "options": ["box-shadow", "shadow", "text-shadow", "opacity"],
        "answer": "box-shadow"
    },
    {
        "theme": "css",
        "number": 20,
        "question": "Quelle propriété CSS est utilisée pour définir la taille maximale d'un élément ?",
        "options": ["max-width", "max-height", "size", "width"],
        "answer": "max-width"
    },
    {
        "theme": "javascript",
        "number": 1,
        "question": "Quelle méthode JavaScript est utilisée pour afficher un message dans la console ?",
        "options": ["console.log()", "alert()", "print()", "log()"],
        "answer": "console.log()"
    },
    {
        "theme": "javascript",
        "number": 2,
        "question": "Quelle est la syntaxe correcte pour déclarer une variable en JavaScript ?",
        "options": ["let x = 10;", "var x = 10;", "const x = 10;"],
        "answer": "let x = 10;"
    },
    {
        "theme": "javascript",
        "number": 3,
        "question": "Quelle méthode JavaScript est utilisée pour vérifier si un tableau contient un élément ?",
        "options": ["includes()", "contains()", "has()", "find()"],
        "answer": "includes()"
    },
    {
        "theme": "javascript",
        "number": 4,
        "question": "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        "options": ["push()", "pop()", "append()", "add()"],
        "answer": "push()"
    },
    {
        "theme": "javascript",
        "number": 5,
        "question": "Quelle méthode JavaScript est utilisée pour ajouter un élément au début d'un tableau ?",
        "options": ["unshift()", "push()", "shift()", "prepend()"],
        "answer": "unshift()"
    },
    {
        "theme": "javascript",
        "number": 6,
        "question": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        "options": ["pop()", "remove()", "delete()", "splice()"],
        "answer": "pop()"
    },
    {
        "theme": "javascript",
        "number": 7,
        "question": "Quelle méthode JavaScript est utilisée pour convertir un objet en chaîne JSON ?",
        "options": [
            "JSON.stringify()",
            "JSON.parse()",
            "toString()",
            "serialize()"
        ],
        "answer": "JSON.stringify()"
    },
    {
        "theme": "javascript",
        "number": 8,
        "question": "Quelle méthode JavaScript est utilisée pour trier un tableau ?",
        "options": ["sort()", "order()", "arrange()", "filter()"],
        "answer": "sort()"
    },
    {
        "theme": "javascript",
        "number": 9,
        "question": "Quelle méthode JavaScript est utilisée pour fusionner deux tableaux ?",
        "options": ["concat()", "merge()", "join()", "combine()"],
        "answer": "concat()"
    },
    {
        "theme": "javascript",
        "number": 10,
        "question": "Quelle méthode JavaScript est utilisée pour trouver l'index d'un élément dans un tableau ?",
        "options": ["indexOf()", "findIndex()", "search()", "locate()"],
        "answer": "indexOf()"
    },
    {
        "theme": "javascript",
        "number": 11,
        "question": "Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID ?",
        "options": [
            "document.getElementById()",
            "document.querySelector()",
            "document.getElementByClass()",
            "document.getElementByTag()"
        ],
        "answer": "document.getElementById()"
    },
    {
        "theme": "javascript",
        "number": 12,
        "question": "Quelle méthode JavaScript est utilisée pour convertir une chaîne en nombre ?",
        "options": ["parseInt()", "Number()", "parseFloat()"],
        "answer": "parseInt()"
    },
    {
        "theme": "javascript",
        "number": 13,
        "question": "Quelle méthode JavaScript est utilisée pour supprimer un élément d'un tableau par son index ?",
        "options": ["splice()", "remove()", "delete()", "pop()"],
        "answer": "splice()"
    },
    {
        "theme": "javascript",
        "number": 14,
        "question": "Quelle méthode JavaScript est utilisée pour parcourir un tableau ?",
        "options": ["forEach()", "map()", "filter()", "reduce()"],
        "answer": "forEach()"
    },
    {
        "theme": "javascript",
        "number": 15,
        "question": "Quelle méthode JavaScript est utilisée pour filtrer les éléments d'un tableau ?",
        "options": ["filter()", "map()", "reduce()", "forEach()"],
        "answer": "filter()"
    },
    {
        "theme": "javascript",
        "number": 16,
        "question": "Quelle méthode JavaScript est utilisée pour réduire un tableau à une seule valeur ?",
        "options": ["reduce()", "map()", "filter()", "forEach()"],
        "answer": "reduce()"
    },
    {
        "theme": "javascript",
        "number": 17,
        "question": "Quelle méthode JavaScript est utilisée pour créer une copie d'un tableau ?",
        "options": ["slice()", "splice()", "copy()", "clone()"],
        "answer": "slice()"
    },
    {
        "theme": "javascript",
        "number": 18,
        "question": "Quelle méthode JavaScript est utilisée pour ajouter ou supprimer des éléments d'un tableau ?",
        "options": ["splice()", "slice()", "push()", "pop()"],
        "answer": "splice()"
    },
    {
        "theme": "javascript",
        "number": 19,
        "question": "Quelle méthode JavaScript est utilisée pour trouver un élément dans un tableau ?",
        "options": ["find()", "filter()", "map()", "forEach()"],
        "answer": "find()"
    },
    {
        "theme": "javascript",
        "number": 20,
        "question": "Quelle méthode JavaScript est utilisée pour vérifier si une chaîne commence par un certain caractère ?",
        "options": ["startsWith()", "endsWith()", "charAt()", "includes()"],
        "answer": "startsWith()"
    },
    {
        "theme": "linux",
        "number": 1,
        "question": "Quelle commande est utilisée pour afficher le contenu d'un répertoire ?",
        "options": ["ls", "cd", "pwd", "mkdir"],
        "answer": "ls"
    },
    {
        "theme": "linux",
        "number": 2,
        "question": "Quelle commande est utilisée pour changer de répertoire ?",
        "options": ["cd", "ls", "pwd", "mv"],
        "answer": "cd"
    },
    {
        "theme": "linux",
        "number": 3,
        "question": "Quelle commande est utilisée pour afficher le chemin du répertoire courant ?",
        "options": ["pwd", "ls", "cd", "path"],
        "answer": "pwd"
    },
    {
        "theme": "linux",
        "number": 4,
        "question": "Quelle commande est utilisée pour créer un nouveau fichier vide ?",
        "options": ["touch", "mkdir", "nano", "cat"],
        "answer": "touch"
    },
    {
        "theme": "linux",
        "number": 5,
        "question": "Quelle commande est utilisée pour créer un nouveau répertoire ?",
        "options": ["mkdir", "touch", "cd", "ls"],
        "answer": "mkdir"
    },
    {
        "theme": "linux",
        "number": 6,
        "question": "Quelle commande est utilisée pour copier un fichier ?",
        "options": ["cp", "mv", "copy", "scp"],
        "answer": "cp"
    },
    {
        "theme": "linux",
        "number": 7,
        "question": "Quelle commande est utilisée pour déplacer ou renommer un fichier ?",
        "options": ["mv", "cp", "rename", "move"],
        "answer": "mv"
    },
    {
        "theme": "linux",
        "number": 8,
        "question": "Quelle commande est utilisée pour supprimer un fichier ?",
        "options": ["rm", "delete", "erase", "rmdir"],
        "answer": "rm"
    },
    {
        "theme": "linux",
        "number": 9,
        "question": "Quelle commande est utilisée pour supprimer un répertoire vide ?",
        "options": ["rmdir", "rm", "delete", "erase"],
        "answer": "rmdir"
    },
    {
        "theme": "linux",
        "number": 10,
        "question": "Quelle commande est utilisée pour afficher le contenu d'un fichier ?",
        "options": ["cat", "less", "more", "view"],
        "answer": "cat"
    },
    {
        "theme": "linux",
        "number": 11,
        "question": "Quelle commande est utilisée pour afficher les 10 premières lignes d'un fichier ?",
        "options": ["head", "tail", "cat", "less"],
        "answer": "head"
    },
    {
        "theme": "linux",
        "number": 12,
        "question": "Quelle commande est utilisée pour afficher les 10 dernières lignes d'un fichier ?",
        "options": ["tail", "head", "cat", "less"],
        "answer": "tail"
    },
    {
        "theme": "linux",
        "number": 13,
        "question": "Quelle commande est utilisée pour rechercher un mot-clé dans un fichier ?",
        "options": ["grep", "find", "search", "locate"],
        "answer": "grep"
    },
    {
        "theme": "linux",
        "number": 14,
        "question": "Quelle commande est utilisée pour afficher les processus en cours ?",
        "options": ["ps", "top", "htop", "jobs"],
        "answer": "ps"
    },
    {
        "theme": "linux",
        "number": 15,
        "question": "Quelle commande est utilisée pour afficher l'utilisation des ressources système en temps réel ?",
        "options": ["top", "htop", "ps", "uptime"],
        "answer": "top"
    },
    {
        "theme": "linux",
        "number": 16,
        "question": "Quelle commande est utilisée pour changer les permissions d'un fichier ?",
        "options": ["chmod", "chown", "chgrp", "permissions"],
        "answer": "chmod"
    },
    {
        "theme": "linux",
        "number": 17,
        "question": "Quelle commande est utilisée pour changer le propriétaire d'un fichier ?",
        "options": ["chown", "chmod", "chgrp", "owner"],
        "answer": "chown"
    },
    {
        "theme": "linux",
        "number": 18,
        "question": "Quelle commande est utilisée pour afficher l'espace disque utilisé ?",
        "options": ["df", "du", "disk", "space"],
        "answer": "df"
    },
    {
        "theme": "linux",
        "number": 19,
        "question": "Quelle commande est utilisée pour afficher l'utilisation d'un répertoire spécifique ?",
        "options": ["du", "df", "disk", "space"],
        "answer": "du"
    },
    {
        "theme": "linux",
        "number": 20,
        "question": "Quelle commande est utilisée pour afficher l'adresse IP de la machine ?",
        "options": ["ifconfig", "ipconfig", "ip addr", "netstat"],
        "answer": "ifconfig"
    }
]

const app = {

    choix: null,
    reponseChoisie: null,

    exe() {
        app.ajouterLeTitre();
        app.choisirQuestion();
        app.afficherTheme();
        app.afficherQuestion();
        app.afficherOptions();
    },

    ajouterLeTitre() {
        const parent = document.querySelector(".app");
        const enfant = document.createElement("h1");
        enfant.classList.add("titre");
        enfant.textContent = "Quizz";
        enfant.style.backgroundColor = "darkblue";
        parent.append(enfant);
    },

    choisirQuestion() {
        const randomIndex = Math.floor(Math.random() * quizz.length);
        app.choix = quizz[randomIndex];
    },

    afficherQuestion() {
        const question = app.choix.question;
        const $parent = document.querySelector(".app");
        const $question = document.createElement("p");
        $question.classList.add("question")
        $question.textContent = question;
        $parent.append($question);
    },

    afficherTheme() {
        const $parent = document.querySelector(".app");
        const $theme = document.createElement("p");
        $theme.classList.add("theme");
        $theme.textContent = app.choix.theme;
        $parent.append($theme);
    },

    afficherOptions() {
        const $parent = document.querySelector(".app");
        let list = app.choix.options;
        const randomList = [];
        
        while (list.length) {
            const index = Math.floor(Math.random() * list.length)
            randomList.push(list[index]);
            list = [...list.slice(0, index), ...list.slice(index + 1)];  
        };
    
        for (let i = 0; i < randomList.length; i++) {
            const $options = document.createElement("button");
            $options.classList.add("boutonReponse")
            $options.textContent = randomList[i];
            $parent.append($options);
            $options.addEventListener("click", () => {
                app.reponseChoisie = $options.textContent
                app.comparerReponse()
            })
        }
    },

    comparerReponse() {

        let $verif = document.querySelector(".verif");
        const $parent = document.querySelector(".app");

        if ($verif) {
            $verif.textContent = app.choix.answer === app.reponseChoisie ? "Bravo" : "Va mourir";
        } else {
            $verif = document.createElement("p");
            $verif.classList.add("verif");

            $verif.textContent = app.choix.answer === app.reponseChoisie ? "Bravo" : "Va mourir";

            $parent.append($verif);
        }

        if ($verif.textContent === "Bravo") {
            if (!document.querySelector(".newQuestion")) {

                const $newQuestion = document.createElement("button");
                $newQuestion.classList.add("newQuestion");
                $newQuestion.textContent = "Passer à la question suivante";
                $parent.append($newQuestion);
                $newQuestion.addEventListener("click", () => { app.poserUneNouvelleQuestion() })
            };
        }
    },

    poserUneNouvelleQuestion() {
        const application = document.querySelector(".app");
        application.innerHTML = "";
        app.exe();
    },


    ajouterImage() {
        const parent = document.querySelector(".app");
        const enfant = document.createElement("img");
        enfant.style.height = "200px";
        enfant.style.width = "150px";
        enfant.setAttribute("src", "./img.jpg");
        enfant.classList.add("enfant");
        enfant.classList.add("special");
        enfant.classList.remove("special");
        enfant.classList.toggle("enfant");

        parent.append(enfant);

        console.log(enfant);
    }

}

app.exe();


