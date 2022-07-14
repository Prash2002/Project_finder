import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NF from "./pages/404";
import ProjectsPage from "./pages/ProjectsPage";
import AddProjectPage from "./pages/AddProject";
import ProjectDescription from "./components/ProjectDescription/ProjectDescription";
import UpdateProject from "./components/UpdateProject/UpdateProject";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch
        // location={location} key={location.pathname}
        >
          <Route exact path="/" render={(props) => <ProjectsPage />} />
          <Route
            exact
            path="/projects"
            render={(props) => <ProjectsPage {...props} />}
          />
          <Route
            exact
            path="/add"
            render={(props) => <AddProjectPage {...props} />}
          />
          <Route
            exact
            path="/project/:id"
            render={(props) => <ProjectDescription {...props} />}
          ></Route>

          <Route
            exact
            path="/updateProject/:id"
            render={(props) => <UpdateProject {...props} />}
          ></Route>
          <Route path="*" render={(props) => <NF {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
