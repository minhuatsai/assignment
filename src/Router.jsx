// import Assignment1 from "./pages/Assignment1";
import Home from "./pages/Home";

const pagesName = {
  home: "/",
  assignment1: "assignment1",
  assignment2: "assignment2",
  assignment3: "assignment3",
};

const getLazyComponent = (importUrl) => {
  return async () => {
    const Component = await import(/* @vite-ignore */ importUrl);
    return {
      Component: Component.default,
    };
  };
};
const routes = [
  {
    path: pagesName.home,
    element: <Home />,
    children: [
      {
        path: pagesName.assignment1,
        lazy: getLazyComponent("./pages/Assignment1"),
      },
      {
        path: pagesName.assignment2,
        lazy: getLazyComponent("./pages/Assignment2"),
      },
      {
        path: pagesName.assignment3,
        lazy: getLazyComponent("./pages/Assignment3"),
      },
    ],
  },
];

export { pagesName, routes };
