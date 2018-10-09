import postsContent from '../posts/postsContent';
export default {
    siteName: 'TheBinaryGuy',
    posts: [
        {
            postId: 1,
            postTitle: 'First Post',
            postDay: 'SUN',
            postDate: '07 OCT 2018',
            postTime: '20:25',
            authorAvatarLocation: '../static/img/TBG.jpg',
            authorName: 'TheBinaryGuy',
            content: function () { return postsContent.find(p => p.id == this.postId).__html; }
        },
        {
            postId: 2,
            postTitle: 'Second Post',
            postDay: 'SUN',
            postDate: '07 OCT 2018',
            postTime: '20:25',
            authorAvatarLocation: '../static/img/TBG.jpg',
            authorName: 'TheBinaryGuy',
            content: function () { return postsContent.find(p => p.id == this.postId).__html; }
        },
        {
            postId: 3,
            postTitle: 'Third Post',
            postDay: 'SUN',
            postDate: '07 OCT 2018',
            postTime: '20:25',
            authorAvatarLocation: '../static/img/TBG.jpg',
            authorName: 'TheBinaryGuy',
            content: function () { return postsContent.find(p => p.id == this.postId).__html; }
        }
    ]
};