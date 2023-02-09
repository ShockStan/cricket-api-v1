import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Rating.css";
import RatingForm from "../ratingForm/RatingForm";
import React from "react";

const Rating = ({getPlayerData,cricket,rating,setRating}) => {
    const revText = useRef();
    let params = useParams();
    const plID = params.plID;

useEffect(() => {
    getPlayerData(plID);
},[])

const addRating = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try{
        const response = await api.post("/api/v1/rating", {ratingStar:rev.value,playerId:plID});
        const updatedRating = [...rating,{body:rev.value}];
        rev.value = "";
        setRating(updatedRating);
    }catch(err){console.error(err);}
}

    return(
        <Container>
            <Row>
                <Col><h3>Rating</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col><div className="cricket-image-rating">
                    <img src={cricket?.image} alt="" /></div>
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <RatingForm handleSubmit={addRating} revText={revText} labelText = "Give Rating!!!" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                      rating?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col><hr /></Col>
                                </Row>
                            </>
                        )
                      })  
                    }
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
        </Container>
    )
}
export default Rating
