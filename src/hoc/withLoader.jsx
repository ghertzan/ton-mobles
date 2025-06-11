import { GridLoader } from "react-spinners";

export const withLoader = (Component) => {
  function ComponentWithLoader(props) {
    if (props.items.length == 0) {
      return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#ffffff" />
        </div>
      );
    }
    return <Component {...props} />;
  }

  return ComponentWithLoader;
};
