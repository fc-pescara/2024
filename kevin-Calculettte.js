// Sélectionne tous les boutons et le champ d'entrée
const buttons = document.querySelectorAll('button');
const resultInput = document.getElementById('result');
let expression = ''; // Pour construire l'expression mathématique

// Ajoute un événement "click" à chaque bouton
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === '=') {
      // Résout l'expression mathématique
      try {
        expression = eval(expression); // Évalue l'expression
        resultInput.value = expression; // Affiche le résultat
      } catch (error) {
        resultInput.value = 'Erreur'; // Gère les erreurs
        expression = ''; // Réinitialise l'expression
      }
    } else if (value === 'C') {
      // Réinitialise tout
      expression = '';
      resultInput.value = '';
    } else {
      // Ajoute la valeur au champ et à l'expression
      expression += value;
      resultInput.value = expression;
    }
  });
});
