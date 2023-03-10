import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import './StarRating.css'

// StarRating component credit to Prem Kumar @codegeous
const StarRating = ({ count, rating, color, onRating, onlyDisplay }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <icon
          key={idx}
          className="stars"
          icon="star"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={!onlyDisplay ? () => setHoverRating(idx) : null}
          onMouseLeave={() => setHoverRating(0)}
        ><i class="fa fa-star"></i></icon>

      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

StarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#ffd700",
    unfilled: "#5b5b5be7",
  },
  onlyDisplay: false,
};

export default StarRating;