const quizData = [
    {
        question: "Contre quel Roi se sont révoltés les Français lors de la Révolution en 1848 ?", //1
        a:"Charles X",
        b:"Henri IV",
        c:"Louis-Philippe 1er",
        correct:"c"
    },
    {
        question: "Quel recueil poétique de Charles Baudelaire fit scandale lors de sa sortie ?", //2
        a:"Les Contemplations",
        b:"Les Fleurs du Mal",
        c:"Poèmes Saturniens",
        correct:"b"
    },
    {
        question: "Quelle bataille militaire est souvent présentée comme le chef d'oeuvre de Napoléon 1er, en 1805 ?", //3
        a:"Austerlitz",
        b:"Iéna",
        c:"Wagram",
        correct:"a"
    },
    {
        question: "Quel président Américain proclame l'émancipation immédiate des esclaves le 22 septembre 1862 ? ", //4
        a:"George Washington",
        b:"Abraham Lincoln",
        c:"George Bush",
        correct:"b"
    },
    {
        question: "Quel territoire est vendu par Bonaparte aux Etats-Unis, pour 80 millions de Francs, en 1803 ?", //5
        a:"L'Acadie",
        b:"La Californie",
        c:"La Louisiane",
        correct:"c"
    },
    {
        question: "Comment s'appelait l'assassin de l'Archiduc François-Ferdinand ?", //6
        a:"Oussama Ben Laden",
        b:"Gravilo Princip",
        c:"Mlako Princep",
        correct:"b"
    },
    {
        question: "Quand la chasse aérienne fait-elle officiellement son apparition ?", //7
        a:"En décembre 1914",
        b:"En avril 1916",
        c:"En octobre 1917",
        correct:"a"
    },
    {
        question: "En quelle année éclate la Révolution russe ?", //8
        a:"1917",
        b:"1918",
        c:"1991",
        correct:"a"
    },
    {
        question: "La Grande dépression eu lieu en ...", //9
        a:"1919",
        b:"1929",
        c:"1939",
        correct:"b"
    },
    {
        question: "Adolf Hitler fut nommé chancelier en ...", //10
        a:"1929",
        b:"1938",
        c:"1933",
        correct:"c"
    },
    {
        question: "Quel pays d'Afrique n'a jamais été colonisé ?", //11
        a:"l'Éthiopie",
        b:"l'Angola",
        c:"le Mozambique",
        correct:"a"
    },
    {
        question: "En septembre 1939, quel pays fut envahie par le Reich allemand et l'Union soviétique ?", //12
        a:"La Biélorussie",
        b:"La Pologne",
        c:"La Roumanie",
        correct:"b"
    },
    {
        question: "La Seconde Guerre Mondiale fut le conflit le plus meurtrier de l'Histoire, cela représentait combien de morts ?", //13
        a:"4% de la population mondiale",
        b:"1% de la population mondiale",
        c:"6 millions",
        correct:"a"
    },
    {
        question: "Les bombardements d'Hiroshima et de Nagasaki ont été réalisé a quelle date ?", //14
        a:"1er et 5 septembre 1940",
        b:"6 et 9 août 1945",
        c:"24 et 25 décembre 1944",
        correct:"b"
    },
    {
        question: "La Guerre du Viêt Nam, de 1955 à ...", //15
        a:"1969",
        b:"1970",
        c:"1975",
        correct:"c"
    },
    {
        question: "Après la période de décolonisation, encore aujourd'hui il reste encore un pays de Colon, lequel ?", //16
        a:"États-Unis",
        b:"Israël",
        c:"La Chine",
        correct:"b"
    },
    {
        question: "Selon Marx, qu'est-ce que l'opium du Peuple ?", //17
        a:"La consommation de masse",
        b:"L'ensemble des médias",
        c:"La religion",
        correct:"c"
    },
    {
        question: "En 1959, qui renverse le régime cubain ?", //18
        a:"Jean Paul II",
        b:"Fidel Castro",
        c:"Che Guevara",
        correct:"b"
    },
    {
        question: "Durant la 'Grande révolution culturelle' lancée par Mao en 1966, à combien d'exemplaires vendu le 'Petit livre rouge' ?", //19
        a:"80 000 exemplaires",
        b:"1 500 000 exemplaires",
        c:"900 000 000 exemplaires",
        correct:"c"
    },
    {
        question: "Quel président américain dans l'histoire du pays à accompli deux mandats entiers à la tête d'un pays en guerre ?", //20
        a:"Grover Cleveland",
        b:"Barack Obama",
        c:"Bill Clinton",
        correct:"b"
    },
];

const quiz = document.getElementById('quizContemporain'); //cherche l'id #quizContemporain
const reponseEl = document.querySelectorAll('.answer'); //cherche toutes les classes answer sur les input du document
const questionEl = document.getElementById('question'); // cherche l'id #question
const a_text = document.getElementById('a_text'); // cherche l'élément a_text
const b_text = document.getElementById('b_text'); // cherche l'élément b_text
const c_text = document.getElementById('c_text'); // cherche l'élément c_text
const submitBtn = document.getElementById('submit'); //cherche le bouton

let currentQuiz = 0; //initialise currentQuestion à 0
let score = 0; //initialise le score à 0

loadQuiz(); //initialisation de la fonction loadQuiz() qui permet de charger toutes les questions du quiz

function loadQuiz() {
    deselectAnswer(); //fonction deslectAnswer
    const currentQuizData = quizData[currentQuiz]; // créer un constante qui prend tous les questions dans le tableau quizData
    questionEl.innerText = currentQuizData.question; // permet d'afficher les question sur le document
    a_text.innerText = currentQuizData.a; //permet d'afficher les réponse a sur le document
    b_text.innerText = currentQuizData.b; //permet d'afficher les réponse b sur le document
    c_text.innerText = currentQuizData.c; //permet d'afficher les réponse c sur le document
}

function getSelected() {
    let reponse = undefined; // reponse = undefined

    reponseEl.forEach(reponseEl => {  //utilisation de la méthode forEach() pour exécuté la fonction callback de chaque élément du tableau quizData
        if(reponseEl.checked) { // si les éléments de réponse sont vérifier alors réponse = id des éléments de réponse
            reponse = reponseEl.id;
        }
    });

    return reponse; //retourne les réponses
}

function deselectAnswer() {
    reponseEl.forEach(reponseEl => { //réutilisation de la méthode forEach() pour désélectionner les réponses que l'Utilisateur juge mauvaise
        reponseEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //vérifie les réponses
    const reponse = getSelected();

    console.log(reponse); //affiche les réponses

    if(reponse) {
        if(reponse === quizData[currentQuiz].correct) { //si réponse = quizData.correct de la partie en cours
            score++; //acrémente le score
        }

        currentQuiz++; //acrémente le currentQuizz

        if(currentQuiz < quizData.length) {  //si le currentQuiz est inférieur à la longueur du quizData
            loadQuiz(); //appel la fonction loadQuiz()
        } else {
            quizContemporain.innerHTML = //Ou alors affiche dans la partie quizPrehistoriqe le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
});