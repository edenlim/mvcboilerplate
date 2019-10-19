
// ------------------ WHAT DOES routes.js DO? ------------------
// 0 - Gets called by index.js. Takes in allModels (The object with ALL functions of Query that will obtain results.rows)
// 1 - Declaring requirement for controller and allModels.
// 2 - Decide which URL will call which Controller Callbacks.


module.exports = (app, allModels) => {
    /* ===================================================
     * =========         1. CONSTANT          ============
    =================================================== */
    const xControllerCallbacks = require('./controllers/x.js')(allModels);

    /* ===================================================
     * ===========       2. ROUTES          ==============
    =================================================== */
    app.get('/pokemons', pokemonControllerCallbacks.index);
    app.get('/students', pokemonControllerCallbacks.students)
};