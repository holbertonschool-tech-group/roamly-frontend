import { v4 as uuidv4 } from 'uuid';
import Card from "../Card";
import "./style.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from '../../redux/slice/destinationSlice';
import { useEffect } from 'react';

function Tours() {
    const tours = useSelector(state => state.destination.destinations)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDestinations());

    }, [dispatch]);


    return (
        <div className="Tours container">
            <div className="head">
                <p>Destination</p> <h1>Tour Destination</h1>
            </div>
            <div className="grid">
                {tours.map((elem) => {
                    return (
                        <Card data={elem} key={uuidv4()} type='destination' />
                    );
                })}
            </div>
        </div>
    );
}

export default Tours;
