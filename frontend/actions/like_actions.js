import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = photo_id => dispatch => {
  return LikeAPIUtil.createLike(photo_id)
  .then(like => dispatch(receiveLike(like)));
};

export const deleteLike = like => dispatch => {
  return LikeAPIUtil.deleteLike(like.id)
  .then(() => dispatch(removeLike(like)));
};
