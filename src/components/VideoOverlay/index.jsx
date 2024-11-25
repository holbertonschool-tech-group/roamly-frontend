import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import './style.scss';
import { IoIosPlay } from 'react-icons/io';

function VideoOverlay() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="VideoOverlay">
            <div className="overlay"></div>
            <div className="container">
                <button className='openBtn' onClick={handleClick}>
                    <IoIosPlay size={32} />
                </button>
            </div>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="hLdzWU622qI"
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
}

export default VideoOverlay;
