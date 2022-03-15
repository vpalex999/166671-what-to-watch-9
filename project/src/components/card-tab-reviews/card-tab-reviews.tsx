import Review from '../review/review';
import { ReviewData } from '../../types/review';

type CardTabReviewsProps = {
  data: ReviewData[];
}

function CardTabReviews({ data }: CardTabReviewsProps): JSX.Element {

  const getReviewsCol = (reviews: ReviewData[], key: number) => (
    <div key={key} className="film-card__reviews-col">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </div>

  );

  const getReviewCols = () => (
    [
      getReviewsCol(data.slice(0, 3), 1),
      getReviewsCol(data.slice(3, 7), 2),
    ]
  );

  return (
    <div className="film-card__reviews film-card__row">
      {getReviewCols()}
    </div>
  );
}

export default CardTabReviews;
