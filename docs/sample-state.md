```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'imbaoss'
    },
    errors: []
  },
  user: {
    id: 1,
    username: 'imbaoss',
    name: 'Bao Le'
    photo_url: 'photo.png',
    description: "Software Engineer, Entrepreneur, Dog Lover and, Fitness and Men's Fashion Enthusiast",
    photos: [1, 2, 4, 6, 7, ...],
    followers: [2, 4, 6, 7, 19, 20, ...],
    following: [2, 3, 4, 5, 7, 9, 29, ...],
    likes: [3, 5, 8, 9, 13, 15, 20, ...]
  },
  photo: {
    id: 1,
    username: 'imbaoss',
    profile_photo_url: 'profile_photo.png',
    photo_url: 'photo.png',
    description: "Rockin' the gray and navy suit!",
    upload_date: '2016-10-26',
    comments: {
      1: {
        username: 'MrDapper',
        body: "Great suit!"
      }
    },
    likes: {
      1: {
        username: 'MrDapper'
      }
    }
  },
  photoFeed: {
    1: {
      photoId: 1,
      username: 'imbaoss',
      profile_photo_url: 'profile_photo.png',
      photo_url: 'photo.png',
      description: "Rockin' the gray and navy suit!",
      upload_date: '2016-10-26',
      comments: {
        1: {
          username: 'MrDapper',
          body: "Great suit!"
        }
      },
      likes: {
        1: {
          username: 'MrDapper'
        }
      }
    },
    2: {
      photoId: 5,
      username: 'imbaoss',
      profile_photo_url: 'profile_photo.png',
      photo_url: 'photo.png',
      description: "I got that teal shirt!",
      upload_date: '2016-10-26',
      comments: {
        1: {
          username: 'MrDapper',
          body: "Awesome color!"
        }
      },
      likes: {
        1: {
          username: 'MrDapper'
        }
      }
    }
    3: //..
  }
}
```
