import { ReviewData } from '../../types/review';

type ReviewProps = {
  review: ReviewData
}

function Review({ review }: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.dateTime}>
            {review.displayDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
