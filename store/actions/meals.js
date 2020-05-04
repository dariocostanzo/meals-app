/* To set up some Redux actions which typically starts by setting up some identifiers stored in constants
 and that will be toggle favorites.
 */
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

/*  Export a function that creates me an action, because an action is not just an identifier, also
needs some extra payload and we actually have an action which is an object with identifier and payload.

I'll add a function that creates me such an action obj and I'll name this  toggleFavorite like the identifier

After creating the action we need to update the reducer to act when I get toggleFavorite action
 */

export const toggleFavorite = id => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
