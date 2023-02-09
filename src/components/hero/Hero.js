import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Paper} from '@mui/material';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, UserNavigate } from 'react-router-dom';
import Rating from '../rating/Rating';
import Button from 'react-bootstrap/Button';

const Hero = ({cricketplayers}) => {

    const navigate = useNavigate();
    function rating(plID){
        navigate(`/Rating/${plID}`);
    }

return (
    <div className='cricket-carousel-container'>
        <Carousel>
            {
                cricketplayers?.map((cricket) => {
                    return (
                        <Paper key={cricket.playerId}>
                            <div className='cricket-card-container'>
                                <div className='cricket-card' style={{"--img": `url(${cricket.bg})`}}>
                                    <div className='cricket-detail'>
                                        <div className='cricket-image'>
                                            <img src={cricket.image} alt="" />
                                        </div>
                                        <div className='cricket-pName'>
                                            <h4>{cricket.pName}</h4>
                                        </div>
                                        <div className="cricket-buttons-container">
                                            <Link to={`/Video/${cricket.video.substring(32)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div></Link>
                                            <div className='cricket-rating-button-container'>
                                                <Button variant="info" onClick={() => rating(cricket.playerId)}>Rate</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
)

}

export default Hero