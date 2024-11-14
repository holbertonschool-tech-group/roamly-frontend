
import "./style.scss";
import AboutImg from '../../assets/images/about-1.jpg'

function Memorable() {
    return (
        <div className="Memorable container">


            <img src={AboutImg} className="image" style={{ backgroundImage: `url(${AboutImg})` }} />
            <div className="infos">

                <div className="cursive">About Us</div>
                <h1>Make Your Tour Memorable and Safe With Us</h1>
                <p className="first">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>

                <button>Book Your Destination</button>
            </div>
        </div>
    );
}

export default Memorable;
