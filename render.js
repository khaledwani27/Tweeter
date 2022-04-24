const Renderer = function () {

    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append(`<div class="post" data-id=${post.id}>${generatePost(post)}</div >`)
        }

    }
    const generatePost = function (postData) {
        return `<h2 class="post-text">
                   ${postData.text}
                </h2> 
                <div class="comments">
                  ${generateComment(postData.comments)} 
                </div>
                <div class="comments">
                  <input type="text" placeholder="Got something to say?">
                  <button>Comment</button>
                </div>
                <div class="delete">Delete Post</div>`

    }
    const generateComment = function (comments) {
        let htmlElement = ``
        for (let comment of comments) {
            htmlElement += `<div data-id=${comment.id}> 
                             <span class="delete-comment">X</span>
                             <span>${comment.text}</span> 
                           </div>`
        }
        return htmlElement
    }
    return {
        renderPosts
    }
}

