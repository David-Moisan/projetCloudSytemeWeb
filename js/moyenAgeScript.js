<<<<<<< HEAD
const quizData = [
    {
        question: "Le premier roi mérovingien fut :", //1
        a: "Clovis",
        b: "Childéric I",
        c: "Mérovée",
        correct: "b"
    },
    {
        question: "Les Carolingiens ont succédé aux Mérovingiens au :", //2
        a:"VIe siècle",
        b:"VIIIe siècle",
        c:"Xe siècle",
        correct:"b"
    },
    {
        question: "Combien de temps a duré le Moyen Âge ?", //3
        a:"100 ans",
        b:"300 ans",
        c:"1000 ans",
        correct:"c"
    },
    {
        question: "À quelle époque ont vécu les Vikings ?", //4
        a:"du IVe au XIIe siècle",
        b:"du VIIIe au XIe siècle",
        c:"Les Vikings? c'est quoi ?",
        correct:"b"
    },
    {
        question: "De quel peuple les Vikings sont-ils les contemporains ?", //5
        a:"Des Égyptiens",
        b:"Des Bambaras",
        c:"Des Francs",
        correct:"c"
    },
    {
        question: "Qu'est-ce une rune ?", //6
        a:"Un galet plat",
        b:"Une formule magique",
        c:"Une lettre d'alphabet",
        correct:"c"
    },
    {
        question: "Charlemagne a été sacré empereur par le Pape Léon XIII en quelle année ?", //7
        a:"435",
        b:"800",
        c:"an mil",
        correct:"b"
    },
    {
        question: "Combien d'années la Guerre de Cent Ans a-t-elle duré ?", //8
        a:"Quelle question stupide ! 100 ans",
        b:"116 ans",
        c:"683 ans",
        correct:"b"
    },
    {
        question: "Sous quel arbre sacré Saint-Louis rendait-il la justice ?", //9
        a:"Olivier",
        b:"Orme",
        c:"Chêne",
        correct:"c"
    },
    {
        question: "Combien compte-t-on de croisades ?", //10
        a:"19",
        b:"9",
        c:"12",
        correct:"a"
    },
    {
        question: "Lors de la première croisade, en 1099, contre qui les Croisés ont-ils dû combattre ?", //11
        a:"Les Huns",
        b:"Les Fatimides",
        c:"Les Mamelooks",
        correct:"b"
    },
    {
        question: "En quelle année Jeanne d'Arc fut-elle emprisonnée puis brûlée vive ?", //12
        a:"1239",
        b:"1356",
        c:"1431",
        correct:"c"
    },
    {
        question: "Comment s'appelle cette haute tour s'élevant au-dessus de l'hôtel de ville ?", //13
        a:"Le beffroi",
        b:"Le donjon",
        c:"Le bastion",
        correct:"a"
    },
    {
        question: "Crécy (1346) et Azincourt (1415) sont deux batailles opposant la France à l'Angleterre pendant la guerre :", //14
        a:"De Cent Ans",
        b:"Des Deux Roses",
        c:"De Sécession",
        correct:"a"
    },
    {
        question: "De ces deux batailles...", //15
        a:"L'une est remportée par la France et l'autre par l'Angleterre",
        b:"La France ressort doublement victorieuse",
        c:"La France ressort doublement vaincue",
        correct:"c"
    }
];

const quiz = document.getElementById('quizMoyenAge'); //cherche l'id #quizMoyenAge
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
            quizMoyenAge.innerHTML = //Ou alors affiche dans la partie quizPrehistoriqe le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
=======
const quizData = [
    {
        question: "Le premier roi mérovingien fut :", //1
        a: "Clovis",
        b: "Childéric I",
        c: "Mérovée",
        correct: "b"
    },
    {
        question: "Les Carolingiens ont succédé aux Mérovingiens au :", //2
        a:"VIe siècle",
        b:"VIIIe siècle",
        c:"Xe siècle",
        correct:"b"
    },
    {
        question: "Combien de temps a duré le Moyen Âge ?", //3
        a:"100 ans",
        b:"300 ans",
        c:"1000 ans",
        correct:"c"
    },
    {
        question: "À quelle époque ont vécu les Vikings ?", //4
        a:"du IVe au XIIe siècle",
        b:"du VIIIe au XIe siècle",
        c:"Les Vikings? c'est quoi ?",
        correct:"b"
    },
    {
        question: "De quel peuple les Vikings sont-ils les contemporains ?", //5
        a:"Des Égyptiens",
        b:"Des Bambaras",
        c:"Des Francs",
        correct:"c"
    },
    {
        question: "Qu'est-ce une rune ?", //6
        a:"Un galet plat",
        b:"Une formule magique",
        c:"Une lettre d'alphabet",
        correct:"c"
    },
    {
        question: "Charlemagne a été sacré empereur par le Pape Léon XIII en quelle année ?", //7
        a:"435",
        b:"800",
        c:"an mil",
        correct:"b"
    },
    {
        question: "Combien d'années la Guerre de Cent Ans a-t-elle duré ?", //8
        a:"Quelle question stupide ! 100 ans",
        b:"116 ans",
        c:"683 ans",
        correct:"b"
    },
    {
        question: "Sous quel arbre sacré Saint-Louis rendait-il la justice ?", //9
        a:"Olivier",
        b:"Orme",
        c:"Chêne",
        correct:"c"
    },
    {
        question: "Combien compte-t-on de croisades ?", //10
        a:"19",
        b:"9",
        c:"12",
        correct:"a"
    },
    {
        question: "Lors de la première croisade, en 1099, contre qui les Croisés ont-ils dû combattre ?", //11
        a:"Les Huns",
        b:"Les Fatimides",
        c:"Les Mamelooks",
        correct:"b"
    },
    {
        question: "En quelle année Jeanne d'Arc fut-elle emprisonnée puis brûlée vive ?", //12
        a:"1239",
        b:"1356",
        c:"1431",
        correct:"c"
    },
    {
        question: "Comment s'appelle cette haute tour s'élevant au-dessus de l'hôtel de ville ?", //13
        a:"Le beffroi",
        b:"Le donjon",
        c:"Le bastion",
        correct:"a"
    },
    {
        question: "Crécy (1346) et Azincourt (1415) sont deux batailles opposant la France à l'Angleterre pendant la guerre :", //14
        a:"De Cent Ans",
        b:"Des Deux Roses",
        c:"De Sécession",
        correct:"a"
    },
    {
        question: "De ces deux batailles...", //15
        a:"L'une est remportée par la France et l'autre par l'Angleterre",
        b:"La France ressort doublement victorieuse",
        c:"La France ressort doublement vaincue",
        correct:"c"
    }
];

const quiz = document.getElementById('quizMoyenAge'); //cherche l'id #quizMoyenAge
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
            quizMoyenAge.innerHTML = //Ou alors affiche dans la partie quizPrehistoriqe le texte suivant en HTML =>
            `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
>>>>>>> e49a3b26eda54f054c839317d0588a42458f5c7b
});