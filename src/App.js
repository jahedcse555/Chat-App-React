import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";
const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="
  b866cc05-4eec-4ecf-878d-51d237fe926d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;
