import React from "react";

const Store = React.createContext({
  todos: [
    {
      id: 1,
      title: "Learn HTML and CSS",
      completed: false,
    },
    {
      id: 2,
      title: "Learn JavaScript(ES6+)",
      completed: false,
    },
    {
      id: 3,
      title: "Design with Figma",
      completed: false,
    },
    {
      id: 4,
      title: "Develop applications with 'React' and 'Material-UI'",
      completed: false,
    },
  ],
  myTheme: "light"
});

export default Store;
