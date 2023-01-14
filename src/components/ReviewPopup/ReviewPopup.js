import React from 'react'
import { useState } from 'react';
import './ReviewPopup.css'
import Rate from '../StarRating/StarRating'
import Confirmation from '../Confirmation/Confirmation.js'

function ReviewPopup(props) {
    const [confirmState, setConfirmState] = useState(false);

    const handleConfirmState = (value) => {
        setConfirmState(value)
    }

    const handleRemove = () => {
        handleConfirmState(false);
        props.setTrigger(null);
        props.handleRemoveReview(props.triggerBook);   
    }

    return (props.triggerBook) ? (
        <div className="reviewpopup">
            <div className="reviewpopup-inner">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={() => props.setTrigger(null)}><i class="fa fa-close"></i></button>
                {props.triggerBook.map((media) => (
                    <div className="review-box" key={media.id}>
                        <div class="image_and_stars">
                            <img src={media.image} alt="Media cover image"/>
                            <div className="star-rating">
                                <Rate rating={media.stars} />
                            </div>
                            <div>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <button className="close-btn" id="trash-btn" onClick={() => handleConfirmState(true)}><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                        <div class="review_table">
                            <div class="data_type_text">Title</div>
                            <div class="data_box">
                                <h3 class="review_data">{ media.title }</h3>
                            </div>
                            <div class="data_type_text">Author</div>
                            <div class="data_box">
                                <h3 class="review_data">{ media.author }</h3>
                            </div>
                            <div class="data_type_text">Genres</div>
                            <div class="data_box">
                                <h3 class="review_data">{ media.genres }</h3>
                            </div>
                            <div class="data_type_text">Review</div>
                            <div class="review_box">
                                <p>{ media.review }</p>
                            </div>    
                        </div>
                    </div>
                ))}
            </div>  
            <div className='popups'>
                <Confirmation open={confirmState} onClose={() => handleConfirmState(false)} onConfirm={() => handleRemove()}/>
            </div>
        </div>
    ) : null;
}

export default ReviewPopup;
