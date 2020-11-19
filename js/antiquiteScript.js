const quizData = [
    {
        question : "Quel est majoritairement l'usage des constructions de pierre à l'âge du Bronze ancien ?", //1
        a: "Des habitations",
        b: "Des sites funéraires",
        c: "Des ateliers",
        correct: "b"
    },
    {
        question: "Quelle cité se cache derrière l'appellation de 'Pompéi de la Préhistoire' ?", //2
        a: "Carthage",
        b: "Akrotiri",
        c: "Nola",
        correct: "c"
    },
    {
        question: "Un de ces éléments symbolise la richesse d'un défunt à l'âge du Bronze, lequel ?", //3
        a: "L'ambre",
        b: "L'os",
        c: "Le bois",
        correct: "a"
    },
    {
        question: "Vercingétorix a été emprisonné à :", //4
        a: "Rome",
        b: "Lutèce",
        c: "Alexandrie",
        correct: "a"
    },
    {
        question: "Quels sont les trois dieux les plus importants dans l'Antiquité romaine ?", //5
        a: "Jupiter, Junon et Minerve",
        b: "Jupiter, Pluton et Neptune",
        c: "Uranus, Gaïa et Saturne",
        correct: "a"
    },
    {
        question: "Qui est Mithra ?", //6
        a: "Une divinité Indo-iranien",
        b: "Un mage Celtes célébre",
        c: "Une souveraine perse",
        correct: "a"
    },
    {
        question: "Quelle est la plus grande pyramide d'Égypte ?" ,//7
        a: "La pyramide de Khéops",
        b: "La pyramide de Djéser",
        c: "La pyramide de Khéphren",
        correct: "a"
    },
    {
        question: "Selon la mythologie égyptienne, quelle divinité règne sur le royaume des morts ?", //8
        a: "Mâat",
        b: "Anubis",
        c: "Osiris",
        correct: "c"
    },
    {
        question: "A quel âge le pharaon Toutânkhamon est-il mort ?", //9
        a: "8 ans",
        b: "19 ans",
        c: "32 ans",
        correct: "b"
    },
    {
        question: "Quelle ville grecque est le berceau de la démocratie ?", //10
        a: "Argos",
        b: "Sparte",
        c: "Athènes",
        correct: "c"
    },
    {
        question: "Quel héros de la mythologie grecque tua le minotaure et sortit du labyrinthe ?", //11
        a: "Héraclès",
        b: "Thésée",
        c: "Persée",
        correct: "a"
    },
    {
        question: "Quel philosophe grec n'a jamais rien écrit ?", //12
        a: "Socrate",
        b: "Platon",
        c:"Hérodote",
        correct: "a"
    },
    {
        question: "Quelle est la date légendaire de la fondation de Rome ?", //13
        a: "357 av JC",
        b: "753 av JC",
        c: "573 av JC",
        correct: "b"
    },
    {
        question: "Quelle est la stratégie utilisée par le général carthaginois Hannibal pour attaquer Rome en 218 avant JC ?", //14
        a: "Il demande aux Gaulois d'envahir l'Italie par le nord tandis qu'il débarque au sud de Rome",
        b: "Parti d'Espagne, Hannibal franchit les Pyrénées et les Alpes et envahit l'Italie",
        c: "Il entreprend la reconquête de la Sicile, de la Corse et de la Sardaigne",
        correct: "b"
    },
    {
        question: "Quel célèbre général romain conquiert la Gaule ?", //15
        a: "Scipion Emilien",
        b: "Marc Aurel",
        c: "Jules César",
        correct: "c"
    },
    {
        question: "Quand prend fin l'Empire romain ?", //16
        a: "En 476 pour l'Empire d'Occident et en 1453 pour l'Empire d'Orient",
        b: "En 500 pour l'Empire d'Occident et en 1492 pour l'Empire d'Orient",
        c: "En 476",
        correct: "a"
    },
    {
        question: "Le Sumérien est une écriture connue sous la forme de :", //17
        a: "Latin",
        b: "Cunéiforme",
        c: "Hiéroglyphes",
        correct: "b"
    },
    {
        question: "Dans la religion mésopotamienne, Gilgamesh est considéré :", //18
        a: "Un dieu",
        b: "Un démon",
        c: "Un ange",
        correct: "a"
    },
    {
        question: "Quelle ville romaine fut ensevelit par l'éruption du Vésuve en 79 ?", //19
        a: "Rome",
        b: "Pompéi",
        c: "Syracuse",
        correct: "b"
    },
    {
        question: "Quel est le dieu de la guerre pour les Romains ?", //20
        a: "Jupiter",
        b: "Neptune",
        c: "Mars",
        correct: "c"
    }
];

const quiz = document.getElementById('quizAntiquite'); //cherche l'id #quizAntiquite
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
            quizAntiquite.innerHTML = //Ou alors affiche dans la partie quizAntiquite le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
});