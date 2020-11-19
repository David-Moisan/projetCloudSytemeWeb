const quizData = [
    {
        question:"A quel siècle apparaît la Renaissance ?", //1
        a: "Xe siècle",
        b: "XVIe siècle",
        c: "XVIIIe siècle",
        correct: "b"
    },
    {
        question:"Quel pays impose le mouvement de la Renaissance ?", //2
        a: "Japon",
        b: "Espagne",
        c: "Italie",
        correct: "c"
    },
    {
        question:"Il a amélioré la technique de l'imprimerie, nottament avec les caractères mobiles :", //3
        a: "Gutenberg",
        b: "Bill Gates",
        c: "Raphaël",
        correct: "a"
    },
    {
        question:"Quelle est la période historique dont s'inspirent les hommes de la Renaissance ?", //4
        a: "Le futur",
        b: "L'Antiquité",
        c: "Le Moyen Age",
        correct: "b"
    },
    {
        question:"Quel savant a permis de faire progresser la connaissance du corps humain ?", //5
        a: "Michel Ange",
        b: "Laurent de Médicis",
        c: "Léonard de Vinci",
        correct: "c"
    },
    {
        question:"Cet astronome polonais, Copernic, a affirmé que ...", //6
        a: "La Terre est plate",
        b: "La Terre tourne autour du soleil et sur elle-même",
        c: "Le soleil tourne autour de la Terre",
        correct: "b"
    },
    {
        question:"Quel personnage critique violemment l'Église catholique au début du XVIe siècle ?", //7
        a: "Léonard de Vinci",
        b: "François Ier",
        c: "Luther",
        correct: "c"
    },
    {
        question:"Quel groupe est créé au XVIe siècle pour procéder à une reconquête catholique ?", //8
        a: "Les Jésuites",
        b: "Les chevaliers du Temple",
        c: "Les protestants",
        correct: "a"
    },
    {
        question:"Quel roi de France a généralisé et 'officialisé' la tarite négrière par la création de la compagnie du Sénégal en 1673 ?", //9
        a: "Louis XIII",
        b: "Lous XIV",
        c: "Charlemagne",
        correct: "b"
    },
    {
        question:"Quelle île du Sénégal est le symbole de la traite négrière ?", //10
        a: "Cap-Vert",
        b: "Saint-Louis",
        c: "Gorée",
        correct: "c"
    },
    {
        question:"Qu'est-ce qu'un 'Nègre Marron' ?", //11
        a: "Un esclave fugitif",
        b: "Un ancien esclave affranchi devenu travailleur libre",
        c: "Un groupe de Rap",
        correct: "a"
    },
    {
        question:"Qui est devenu le symbole de la révolte des noirs dans les colonies françaises ?", //12
        a: "Nat Turner",
        b: "Martin Luther King",
        c: "Toussaint Louverture",
        correct: "c"
    },
    {
        question:"En quelle année la France a-t-elle reconnu la traite négrière comme un crime contre l'humanité ?", //13
        a: "1789",
        b: "2001",
        c: "1881",
        correct: "b"
    },
    {
        question:"Quel territoire Cavelier de la Salle prend-il possession au nom du roi de France en 1682 ?", //14
        a: "Le Quebec",
        b: "La Louisiane",
        c: "L'Acadie",
        correct: "b"
    },
    {
        question:"Combien de temps le règne de Louis XIV a-t-il duré au total ?", //15
        a: "72 ans",
        b: "40 ans",
        c: "132 ans",
        correct: "a"
    },
    {
        question:"Que s'est-il passé en 1789 ?", //16
        a: "La première élection présidentielle",
        b: "La révolution",
        c: "La décolonisation",
        correct: "b"
    },
    {
        question:"De quoi la cocarde tricolore est-elle le symbole ?", //17
        a: "Symbole de la révolution",
        b: "Symbole de la monarchie",
        c: "Symbole de la République",
        correct: "a"
    },
    {
        question:"Lors de la Guerre de Trente Ans, le sac de Magdeburg, le plus important massacre de cette guerre, combien de civils sont tués ?", //18
        a: "16%",
        b: "100%",
        c: "83%",
        correct: "c"
    },
    {
        question:"Quelques écrits mayas nous sont parvenus. La plupart a été détruit par les Conquistadors. Comment s'appellent ces 'livrets' ?", //18
        a: "Solex",
        b: "Codex",
        c: "Latex",
        correct: "b"
    },
    {
        question:"Le quechua était la langue véhiculaire de la civilisation...", //20
        a: "Maya",
        b: "Aztèque",
        c: "Inca",
        correct: "c"
    },
];

const quiz = document.getElementById('quizModerne'); //cherche l'id #quizModerne
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
            quizModerne.innerHTML = //Ou alors affiche dans la partie quizModerne le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
});