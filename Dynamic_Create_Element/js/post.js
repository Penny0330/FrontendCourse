export const post = (posts)=>{
    let main = document.createElement("main");
    let wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(main);

    for(let i = 1; i <= posts; i++){
        let post = document.createElement("div");
        post.setAttribute("class", "post");
        main.appendChild(post);
        
        let img = document.createElement("img");
        img.src = "./pic/bear-green.png" ;
        post.appendChild(img);
    };
};