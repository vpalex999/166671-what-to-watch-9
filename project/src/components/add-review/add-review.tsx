import { ChangeEvent, useState } from 'react';

import { Fragment } from 'react';

const DEFAULT_RATING = '8';
const DEFAULT_REVIEW = '';
const RANGE_RATING = 10;


function AddReview(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: DEFAULT_RATING,
    'review-text': DEFAULT_REVIEW,
  });


  const onChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            {
              Array.from({ length: RANGE_RATING }, (v, i) => i + 1)
                .reverse()
                .map((index) => (
                  <Fragment key={index}>
                    <input
                      className="rating__input"
                      id={`star-${index}`}
                      type="radio"
                      name="rating"
                      value={index}
                      checked={(formData.rating === index.toString())}
                      onChange={onChange}
                    />
                    <label className="rating__label" htmlFor={`star-${index}`}>Rating ${index}</label>
                  </Fragment>
                ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={formData['review-text']}
            onChange={onChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form >
    </div >

  );
}

export default AddReview;
