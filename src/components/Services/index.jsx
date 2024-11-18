import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { items } from "./items";
import "./style.scss";
function Services() {
    const navigate = useNavigate()
    return (
        <div className="Services container">
            <div className="grid">
                {items.map((item) => {
                    return (
                        <div
                            className="item"
                            key={uuidv4()}
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            <div className="icon">
                                {<item.icon fill="#ffffff" color="#ffffff" size={40} />}
                            </div>
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
            <div className="infos">
                <div className="cursive">Welcome to Pacific</div>
                <h1>It&apos;s time to start your adventure</h1>
                <p className="first">
                    A small river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in which
                    roasted parts of sentences fly into your mouth.
                </p>
                <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.
                </p>
                <button onClick={() => {
                    navigate('/destination')
                }}>  Search Destination</button>
            </div>
        </div>
    );
}

export default Services;
