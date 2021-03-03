import './App.css';
import {RootElement} from './parts/skeleton'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {TopPortion} from "./parts/top_portion";
import {MyHero} from "./parts/hero"
import {col_one} from "./parts/col_one"
import {bot} from "./parts/bot"
import {col_two} from "./parts/col_two"

function App() {
  return (
    <div className="App">
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
