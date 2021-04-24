const App = require('./App.js');



test("Prueba de esta funcion", () => {
    expect(App.addToInput(2, "+", 2)).toBe(4);
});
