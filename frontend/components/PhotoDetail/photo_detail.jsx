import React from 'react';
import { Link } from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='photo-detail'>
        <div className="user-info-header">
          <div className="user-profile-photo">
            <img src={`${this.props.photo.profile_photo_url}`}/>
          </div>
          <div className="user-info">
            <Link
              className="username"
              onClick={"/feed"}>
              {this.props.photo.username}</Link>
          </div>
          <div className="upload-time">
            <time>7h</time>
          </div>
        </div>

        <div className="photo">
          <img src={`${this.props.photo.photo_url}`}/>
        </div>
        <div className='photo-info'>
          <div className="num-likes">
            9001 likes!
          </div>

          <div className='photo-caption'>
            <p>
              <Link
                className='user-photo-caption'>
                {this.props.photo.username}
              </Link>
              Photo caption goes here
            </p>
          </div>

          <div className='comments'>
            <p>
              <Link
                className='commenter-user'>
                Commenter
              </Link>
              Looking daaaaaaaapper
            </p>
          </div>

          <div className='interact'>
            <div className='like-icon-cont'>
              <div className='like-icon'>
              </div>
            </div>
            <div className='add-comment-cont'>
              <form>
                <input
                  type='text'
                  className='add-comment'
                  placeholder='Add a comment...'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
