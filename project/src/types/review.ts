export type ReviewData = {
  id: string;
  author: string;
  dateTime: string;
  displayDate: string;
  rating: string;
  text: string;
}


export type ReviewDataServer = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
}

export type ReviewFromClientSend = {
  filmId: string | undefined;
  rating: string,
  ['review-text']: string,
}

export type ReviewToServerSend = {
  rating: number,
  comment: string,
}
