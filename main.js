function post() {
    if (inputValidation($('#input').val())) {
        tweeter.addPost($('#input').val());
        renderer.renderPosts(tweeter.getPosts())
        $('#input').val("")
    }
}

function inputValidation(input, name = "post") {
    if (input) {
        return true;
    } else {
        alert(name + " field can not be empty");
        return false;
    }
}

$("#posts").on("click", "button", function () {
    let commentText = $(this).closest("div").find("input").val()
    if (inputValidation(commentText, "comment")) {
        console.log($(this).closest(".post").data().id)
        tweeter.addComment(commentText, $(this).closest(".post").data().id)
        renderer.renderPosts(tweeter.getPosts())
    }
});

$("#posts").on("click", ".delete-comment", function () {
    tweeter.removeComment($(this).closest(".post").data().id, $(this).closest("div").data().id)
    renderer.renderPosts(tweeter.getPosts())
});

$("#posts").on("click", ".delete", function () {
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
});


const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())