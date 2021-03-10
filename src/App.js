import './App.css';
import {RootElement} from './parts/skeleton'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {TopPortion} from "./parts/top_portion";
import {MyHero} from "./parts/hero"
import {col_one} from "./parts/col_one"
import {bot} from "./parts/bot"
import {col_two} from "./parts/col_two"
import {useEffect} from "react"

const style = {
    'margin-bottom': '150px',
    'margin-top': '50px',
    'font-family': 'Arial, Helvetica, sans-serif'
}

function App() {
    useEffect(() => {
        document.title = "Matt's Linus Savings Review | 2021"
    }, []);

    return (
        <div style={style} className="App">
            <RootElement
                topPortion={TopPortion()}
                titleBar={MyHero()}
                columnOne={col_one()}
                bottomPortion={bot()}
                columnTwo={col_two()}
            />
        </div>
    );
}

export default App;
