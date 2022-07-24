import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { DefaultLayout } from "../components/templates/DefaultLayout";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
