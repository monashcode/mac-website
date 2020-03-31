import React from 'react';
import PropTypes from 'prop-types';

function EventCard(props) {
    const { title } = props;
    return (
        <div className="event-card w-full sm:w-1/2 md:w-1/3 m-5 rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
            <div className="h-40 image-container">
            </div>
            <div className="font-bold mx-2 pb-2">{title}</div>
        </div>
    )
}

EventCard.propTypes = {
    title: PropTypes.string
}

EventCard.defaultProps = {
    title: "No Title"
}

export default EventCard;