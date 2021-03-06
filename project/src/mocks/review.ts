import {
  ReviewData,
  ReviewDataServer,
  ReviewFromClientSend
} from '../types/review';

export const getMockReview = (): ReviewData => ({
  id: '5578',
  author: 'vpalex',
  dateTime: '2022-02-27',
  displayDate: '2022-02-27',
  rating: '8.9',
  text: 'some review text',
});

export const getMockReviews = () => [getMockReview()];

export const getMockFetchReview = (): ReviewDataServer => ({
  comment: 'some review text',
  date: '2022-02-27',
  id: 5578,
  rating: 8.9,
  user: {
    id: 8888,
    name: 'vpalex',
  },
});

export const getMockFetchReviews = () => [getMockFetchReview()];

export const getMockReviewFromClientSend = (): ReviewFromClientSend => ({
  filmId: '5578',
  rating: '8.9',
  'review-text': 'some review text',
});
