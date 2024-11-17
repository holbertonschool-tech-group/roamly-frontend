import { v4 as uuidv4 } from 'uuid';
import Card from "../Card";
import { tours } from "./data";
import "./style.scss";

function Tours() {
    return (
        <div className="Tours container">
            <div className="head">
                <p>Destination</p> <h1>Tour Destination</h1>
            </div>
            <div className="grid">
                {tours.map((elem) => {
                    return (
                        <Card data={elem} key={uuidv4()} />
                    );
                })}
            </div>
        </div>
    );
}

export default Tours;
