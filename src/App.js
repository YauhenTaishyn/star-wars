import React from 'react';
import Root from "./Containers/Root/Root";
import People from "./Containers/People/People";
import Films from "./Containers/Films/Films";
import StarShips from "./Containers/StarShips/StarShips";
import Vechicles from "./Containers/Vehicles/Vechicles";
import Species from "./Containers/Species/Species";
import Planets from "./Containers/Planets/Planets";
import styles from "./App.module.css";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from 'react-router-dom'

// import counter from './counter/counter'

const App = () => {

    return (

        <BrowserRouter>
            <div className={styles.main}>
                <Route exact path='/root' component={Root}/>
                Resources
                <Switch>
                    <div>
                        <Route exact path='/root' component={Root}/>
                        <Route path='/people' component={People}/>
                        <Route path='/films' component={Films}/>
                        <Route path='/starships' component={StarShips}/>
                        <Route path='/vechicles' component={Vechicles}/>
                        <Route path='/species' component={Species}/>
                        <Route path='/planets' component={Planets}/>

                    </div>
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;

