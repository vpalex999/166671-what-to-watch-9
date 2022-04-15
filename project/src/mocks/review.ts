import { ReviewData } from '../types/review';

export const getMockReview = (): ReviewData => ({
  id: '5578',
  author: 'vpalex',
  dateTime: '2022-02-27',
  displayDate: '2022-02-27',
  rating: '8.9',
  text: 'some review text',
});

export const getMockReviews = () => [getMockReview()];
