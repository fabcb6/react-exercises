// https://www.testdome.com/questions/react-js/logout-wrapper/77767?generator=104
import { createContext, useContext } from "react";

type PropsControl = {
  username: string;
  permissions: string[];
};

const SecurityContext = createContext({ username: "", permissions: [] });

const ControlsComponent = (props: PropsControl) => {
  return (
    <SecurityContext.Provider
      value={{ username: props.username, permissions: [] }}
    >
      <LogoutWrapper></LogoutWrapper>
    </SecurityContext.Provider>
  );
};

const LogoutWrapper = () => {
  var context = useContext(SecurityContext);

  return (
    <div>
      <p>{context.username}</p>
      <button>Click here to logout</button>
    </div>
  );
};

export default ControlsComponent;
