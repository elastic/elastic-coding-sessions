
import { Route, Switch } from "react-router-dom";
import SearchPage from './SearchPage';
import Layout from './Layout.js';
import Movie from './Movie';


const Routes = () => (
    <>
        <Switch>
          <RouteWrapper exact path="/" component={SearchPage} layout={Layout}/>
          <RouteWrapper exact path="/movie" component={Movie} layout={Layout}/>
        </Switch>
    </>
)

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default Routes;