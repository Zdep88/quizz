const app = {

    choix: null,
    reponseChoisie: null,
    tableauQuizz: [],
    quizzChoisi: [],


    // fonction qui ne se lance qu'une seule fois
    init() {
        app.fetch();
        app.afficherMessageErreur();
        app.choisirQuizz();
    },

    async fetch() {

        const listQuizz = [
            { nom: "Game of Thrones", fichier: "got.json" },
            { nom: "Harry Potter", fichier: "hogwart.json" },
            { nom: "Code", fichier: "dev.json" },
            { nom: "League of Legend", fichier: "lol.json" },
            { nom: "Croupier (Voisins du numéro)", fichier: "croupierVoisin.json"}
        ];

        app.tableauQuizz = [];

        for (const element of listQuizz) {
            const reponse = await fetch("./quizz/" + element.fichier);
            element.contenu = await reponse.json();
            app.tableauQuizz.push(element);
        }

        app.tableauQuizz = app.tableauQuizz.sort((a, b) => a.nom < b.nom ? 1 : -1);

        app.afficherMenu();

    },

    afficherMenu() {
        const $menu = document.querySelector(".choixTheme");

        for (const element of app.tableauQuizz) {
            const $checkLabel = document.createElement("div");
            $checkLabel.classList.add("checkLabel");
            $menu.prepend($checkLabel);

            const menuElement = document.createElement("input")
            menuElement.setAttribute("type", "checkbox")
            menuElement.setAttribute("id", element.nom)
            menuElement.setAttribute("name", element.nom)
            $checkLabel.append(menuElement)

            const labelElement = document.createElement("label");
            labelElement.setAttribute("for", element.nom)
            labelElement.textContent = element.nom
            $checkLabel.append(labelElement)
        }
    },

    afficherMessageErreur() {
        app.viderMain()

        const $main = document.querySelector("main");

        const messageErreur = document.createElement("p");
        messageErreur.classList.add("messageErreur");
        messageErreur.textContent = "Veuillez selectionner un quizz";
        $main.append(messageErreur);
    },

    choisirQuizz() {
        const $form = document.querySelector(".choixTheme");
        $form.addEventListener("submit", (ev) => {
            ev.preventDefault();

            const boxCochees = document.querySelectorAll(".checkLabel input:checked");
            app.quizzChoisi = [...boxCochees].map(v => v.name);

            if (app.quizzChoisi.length > 0) {
                app.poserUneNouvelleQuestion()
            } else {
                app.afficherMessageErreur();
            }
        })
    },

    // fonction qui se lance à chaque nouvelle partie
    exe() {
        app.choisirQuestion();
        app.afficherTheme();
        app.afficherQuestion();
        app.afficherOptions();
    },

    choisirQuestion() {
        // 1- on choisit un quiz aléatoire parmi les QUIZ COCHES
        const randomQuizz = Math.floor(Math.random() * app.quizzChoisi.length);
        const quizzRetenu = app.quizzChoisi[randomQuizz];
        const contenuQuizz = app.tableauQuizz.find((v) => v.nom === quizzRetenu).contenu;

        // 2- on tire une question de ce quiz, elle-même aléatoire
        const randomQuestion = Math.floor(Math.random() * contenuQuizz.length);
        const questionRetenue = contenuQuizz[randomQuestion];

        app.choix = questionRetenue;
    },

    afficherTheme() {
        const $parent = document.querySelector("main");
        const $theme = document.createElement("h2");
        $theme.classList.add("theme");
        $theme.textContent = app.choix.theme;
        $parent.append($theme);
    },

    afficherQuestion() {
        const question = app.choix.question;
        const $parent = document.querySelector("main");
        const $question = document.createElement("p");
        $question.classList.add("question")
        $question.textContent = question;
        $parent.append($question);
    },

    afficherOptions() {
        const $grandparent = document.querySelector("main");

        const $parent = document.createElement("div");
        $parent.classList.add("blocOptions");
        $grandparent.append($parent);

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
        const $parent = document.querySelector("main");

        if ($verif) {
            $verif.textContent = app.choix.answer === app.reponseChoisie ? "Bravo" : "Euh... NON";
        } else {
            $verif = document.createElement("p");
            $verif.classList.add("verif");

            $verif.textContent = app.choix.answer === app.reponseChoisie ? "Bravo" : "Euh... NON";

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
        app.viderMain();
        app.exe();
    },

    viderMain() {
        const application = document.querySelector("main");
        application.innerHTML = "";
    },
};

app.init();
