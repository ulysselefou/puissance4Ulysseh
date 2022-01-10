import { createStore } from "redux";

// Phase d'état initial du Store. 

const initial = {
    actuel:'rouge', //peut aussi etre 'jaune'
    grille: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
    ],

};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        console.log('on laisse tomber sur une colonne' + action.payload);
        const tile = state.current;
        const col = state.grille[action.payload].concat(tile); // la nouvelle colonne
        const grille = state.grille.slice(); // peut pas etre modifier directement
        grille[action.payload] = col; // doit etre mis à jour  avec l'ajout de chaqu jeton

    return{
        current: state.current === 'rouge' ? 'jaune' :'rouge',
        grille : grille
    }
}
    return state;
 };
export default createStore(reducer, initial);