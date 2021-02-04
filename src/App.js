import React from 'react';
import Root from "./Containers/Root/Root";
import People from "./Containers/People/People";
import Films from "./Containers/Films/Films";
import StarShips from "./Containers/StarShips/StarShips";
import Vechicles from "./Containers/Vehicles/Vechicles";
import Species from "./Containers/Species/Species";
import Planets from "./Containers/Planets/Planets";
import styles from "./App.module.css";

// import counter from './counter/counter'

const App = () => {

    return (


        <div className={styles.main}>
           Resources
            <div>
                <Root/>
                <People/>
                <Films/>
                <StarShips/>
                <Vechicles/>
                <Species/>
                <Planets/>
            </div>

        </div>


    );
}

export default App;