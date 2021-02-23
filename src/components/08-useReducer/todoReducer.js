export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload); // regresa un nuevo arreglo que cumplan una condicion

    case "toggle":
        return state.map( todo => 
            (todo.id === action.payload)    
                ? {...todo, done: !todo.done}
                : todo
        );

    case "toggle-old":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      }); // recorremos y si coincide el id lo modificamos

    default:
      return state;
  }
};
