const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function () {
        return _posts;
    }
    const addPost = function (title) {
        postIdCounter++;
        _posts.push({
            text: title,
            id: "p" + postIdCounter,
            comments: []
        })
    }
    const getPostIndex = function (postId) {
        for (let post in _posts) {
            if (_posts[post].id === postId) {
                return post
            }
        }
    }
    const removePost = function (postId) {
        let postIndex = getPostIndex(postId)
        if (postIndex) {
            _posts.splice(postIndex, 1);
        } else {
            console.log("this post can not be found!!");
        }

    }
    
    const addComment = function (text, postId) {
        let postIndex = getPostIndex(postId)
        if (postIndex) {
            commentIdCounter++;
            _posts[postIndex].comments.push({ id: "c" + commentIdCounter, text: text });
        } else {
            console.log("comment can not be added!!");
        }
    }

    const removeComment = function (postId, commentId) {
        let postIndex = getPostIndex(postId)
        if (postIndex) {
            const commentsArr = _posts[postIndex].comments;
            for (let comment in commentsArr) {
                if (commentsArr[comment].id === commentId) {
                    commentsArr.splice(comment, 1);
                }
            }
        } else {
            console.log("comment can not be added!!");
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

