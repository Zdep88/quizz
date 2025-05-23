const reponse = await fetch("./quizz/hogwart.json");
const quizz = await reponse.json();

const app = {

    choix: null,
    reponseChoisie: null,
    tableauQuizz: [],

    exe() {
        app.fetch();
        app.ajouterLeTitre();
        app.creerMain();
        app.afficherMenu();
        app.choisirQuestion();
        app.afficherTheme();
        app.afficherQuestion();
        app.afficherOptions();
    },

    async fetch() {

        const listQuizz = [
            { nom: "Game of Thrones", fichier: "got.json" },
            { nom: "Harry Potter", fichier: "hogwart.json" },
            { nom: "Code", fichier: "dev.json" },
            { nom: "League of Legend", fichier: "lol.json" }
        ];

        app.tableauQuizz = [];
        
        for (const element of listQuizz) {
            const reponse = await fetch("./quizz/" + element.fichier);
            element.contenu = await reponse.json();
            app.tableauQuizz.push(element);
        }

    },

    ajouterLeTitre() {
        const grandParent = document.querySelector(".app");
        const parent = document.createElement("header");
        grandParent.append(parent);
        const enfant = document.createElement("h1");
        enfant.textContent = "Quizz";
        parent.append(enfant);
    },

    creerMain() {
        const $main = document.createElement("main");
        const $app = document.querySelector(".app");
        $app.append($main);
    },

    choisirQuestion() {
        const randomIndex = Math.floor(Math.random() * quizz.length);
        app.choix = quizz[randomIndex];
    },

    afficherQuestion() {
        const question = app.choix.question;
        const $parent = document.querySelector("main");
        const $question = document.createElement("p");
        $question.classList.add("question")
        $question.textContent = question;
        $parent.append($question);
    },

    afficherTheme() {
        const $parent = document.querySelector("main");
        const $theme = document.createElement("p");
        $theme.classList.add("theme");
        $theme.textContent = app.choix.theme;
        $parent.append($theme);
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
        const application = document.querySelector(".app");
        application.innerHTML = "";
        app.exe();
    },

    afficherMenu() {
        const $parent = document.querySelector(".app");
        const $menu = document.createElement("section");
        $menu.classList.add("menu")
        $menu.textContent = "choix du thème";
        $parent.append($menu);



    },
}

app.exe();


