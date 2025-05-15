const reponse = await fetch("./lol.json");
const quizz = await reponse.json();

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
        const grandParent = document.querySelector(".app");
        const parent = document.createElement("header");
        parent.classList.add(".header")
        grandParent.append(parent);
        const enfant = document.createElement("h1");
        enfant.classList.add("titre");
        enfant.textContent = "Quizz";
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


