export enum EventType {
    OPEN = 'open', // Nouvelle partie en attente d'un second joueur
    START = 'start', // Partie commencée
    MOVE = 'move', // Déplacement d'une pièce
    END = 'end',  // Partie terminée 
}