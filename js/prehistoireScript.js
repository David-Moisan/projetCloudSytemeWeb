// Constante des questions sur la préhistoire

const quizData = [
    {
        question: 'Homo erectus signifie :', //1
        a: 'Homme savant',
        b: 'Homme debout',
        c: 'Homme habile',
        correct: 'b'
    },
    {
        question: 'Le feu a vraisemblablement été maîtrisé par :', //2
        a: 'Homo habilis',
        b: "L'homme de Neandertal",
        c: 'Homo erectus',
        correct: 'c'
    },
    {
        question: "Lequel de ces animaux n'a pas vécu en même temps que l'homme moderne ?", //3
        a: 'Le mégacéros',
        b: 'Le mammouth',
        c: 'Le diplodocus',
        correct: 'c'
    },
    {
        question: "Où vivaient les hommes du Néolithique ?", //4
        a: "Dans des huttes",
        b: "Dans des maisons",
        c: "Dans des grottes",
        correct: 'b'
    },
    {
        question: "Comment les hommes du néolitique trouvent leur nourriture ?", //5
        a: "En cultivant des plantes et des céréales et en élevant des animaux",
        b: "En chassant et en cueillant des baies et des plantes",
        c: "En récupérant les restes des autres animaux",
        correct: "a"
    },
    {
        question: "En France, au Néolitique, on cultive et on élève :", //6
        a: "Du blé et des vaches",
        b: "Du maïs et des lamas",
        c: "Du riz et des gazelles",
        correct: "a"
    },
    {
        question:"Au Néolitique, on enterre les grands hommes" , //7
        a:"Sous des pyramides",
        b:"Dans la forêt",
        c:"Sous un amas de terre ou de pierre",
        correct:"c"
    },
    {
        question: "Lequel de ces outils n'était pas utilisés par les Néolitiques ?", //8
        a: "Hache polie",
        b: "Poignards en silex",
        c:"Couteau en fer",
        correct: "c"
    },
    {
        question: "Au Néolitique, sur les pourtour de la Méditerannée, les communautés humaines échangent des outils fabriqués à partir d'une pierre de couleur noire; quelle est cette pierre ?", //9
        a: "L'onyx",
        b: "L'obsidienne",
        c: "Le jais",
        correct: "b"
    },
    {
        question: "Que signifie Néolitique ?", //10
        a: "Âge de la pierre nouvelle",
        b: "Âge de la pierre taillée",
        c: "Âge de la vielle pierre",
        correct: "a"
    }
];

const quiz = document.getElementById('quizPrehistorique'); //cherche l'id #quizPrehistorique
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
    a_text.innerText = currentQuizData.a; //permet d'afficher les réponse b sur le document
    c_text.innerText = currentQuizData.c;//permet d'afficher les réponse a sur le document
    b_text.innerText = currentQuizData.b;  //permet d'afficher les réponse c sur le document
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
            quizPrehistorique.innerHTML = //Ou alors affiche dans la partie quizPrehistoriqe le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
});