import Navbar from './component/navbar'
import News from './component/news'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News country="in" category="general" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/business"><News country="in" category="business" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/entertainment"><News country="in" category="entertainment" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/health"><News country="in" category="health" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/science"><News country="in" category="science" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/sports"><News country="in" category="sports" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>
          <Route exact path="/technology"><News country="in" category="technology" apiKey="3618486199914aec8d3cd376afc440b2" pageSize="10" /></Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
