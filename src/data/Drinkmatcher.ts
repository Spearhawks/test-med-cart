import {Recipe} from "../types/Recipe"

export const Drinkmatcher = (recipe: Recipe): number => {
    
    switch(recipe.title) {
        case 'Toast skagen' : return 11227;
        case 'Pasta Carbonara' : return 17074;
        case 'Biff à la Lindström' : return 13423;
        case 'Chili Sin Carne' : return 13086;
        case 'Tiramisu' : return 15849;
        case 'Bifftacos med habanerosalsa' : return 14272;
        default: return 0;
    }       
}        