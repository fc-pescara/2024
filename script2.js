// Boutons
const validerBtn = document.querySelector('.btn'); // Bouton "valider le formulaire"
const resultBtn = document.querySelector('.btnResult'); // Bouton "cliquer pour voir résultat"

// Toutes les questions
const questions = document.querySelectorAll('.boite');

// Tableau des bonnes réponses
const bonnesReponses = {
    question1: "Paris",
    question2: "Londres",
    question3: "Berlin",
    question4: "Paris",
    question5: "Londres"
};

// Fonction pour valider les réponses
validerBtn.addEventListener('click', function () {
    questions.forEach(question => {
        const inputs = question.querySelectorAll('input[type="radio"]'); // Toutes les réponses possibles
        let reponseTrouvee = false;

        inputs.forEach(input => {
            if (input.checked) { // Vérifie si l'option est sélectionnée
                reponseTrouvee = true;
                const questionId = question.classList[1]; // Récupère le nom de la question (e.g., question1)
                const bonneReponse = bonnesReponses[questionId]; // Bonne réponse associée

                if (input.value === bonneReponse) {
                    question.style.backgroundColor = 'lightgreen'; // Bonne réponse : fond vert
                } else {
                    question.style.backgroundColor = 'lightcoral'; // Mauvaise réponse : fond rouge
                }
            }
        });

        // Si aucune réponse n'est sélectionnée
        if (!reponseTrouvee) {
            question.style.backgroundColor = 'lightyellow'; // Avertissement : fond jaune
        }
    });
});

// Fonction pour afficher les résultats
resultBtn.addEventListener('click', function () {
    let score = 0;

    questions.forEach(question => {
        const inputs = question.querySelectorAll('input[type="radio"]');
        const questionId = question.classList[1];
        const bonneReponse = bonnesReponses[questionId];

        inputs.forEach(input => {
            if (input.checked && input.value === bonneReponse) {
                score++; // Incrémente le score pour chaque bonne réponse
            }
        });
    });

    alert(`Votre score est : ${score} / ${questions.length}`);
});
