//document.getElementById("Post").value = "Fifth Avenue, New York City";

const Blog = () => {
    var temp = 0;

    const Submit = () => {

        var Post = document.querySelector('.PostIt');
        var txt = document.querySelector('.Text p');


        Post.addEventListener('click', () => {

            txt.textContent = document.getElementById("Post").value;


        });

    };

    Submit();


};
Blog();