import Store from "./redux/store";
import { Provider } from "react-redux";
import Router from "./route";

function App() {
    return (
        <Provider store={Store}>
            <Router />
            {/* <h1>CREATE REACT APP</h1> */}
        </Provider>
    );
}

export default App;
