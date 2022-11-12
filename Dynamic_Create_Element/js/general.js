let wrapper = document.querySelector(".wrapper");
let header = document.createElement("header");
wrapper.appendChild(header);

export const nav = () => {
    // create "nav"
    let nav = document.createElement("nav");
    nav.setAttribute("class", "nav");
    header.appendChild(nav);

    // create "<- __Penny__"
    let nav_left = document.createElement("div");
    nav_left.setAttribute("class", "nav_left");
    nav.appendChild(nav_left);

    let fa_arrow_left = document.createElement("i");
    fa_arrow_left.setAttribute("class", "fa-solid  fa-arrow-left");
    nav_left.appendChild(fa_arrow_left);

    let username = document.createElement("span");
    username.innerHTML = "__Penny__";
    nav_left.appendChild(username);
    
    // create "hamburger"
    let fa_bars = document.createElement("i");
    fa_bars.setAttribute("class", "fa-solid fa-bars");
    nav.appendChild(fa_bars);
};

export const about = (posts) =>{
    // create a div "about"
    let about = document.createElement("div");
    about.setAttribute("class", "about");
    header.appendChild(about);

    // create "pic img" 
    let pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.src = "./pic/bear-logo.png";
    about.appendChild(pic);

    //  create div "count"
    let count = document.createElement("div");
    count.setAttribute("class", "count");
    about.appendChild(count);

    //  create 貼文、追蹤、粉絲
    let count_post = document.createElement("div");
    count.appendChild(count_post);
    var p_count = document.createElement("p");
    p_count.innerHTML = posts;
    count_post.appendChild(p_count);
    var p_title = document.createElement("p");
    p_title.innerHTML = "Posts";
    count_post.appendChild(p_title);

    let count_follow= document.createElement("div");
    count.appendChild(count_follow);
    var p_count = document.createElement("p");
    p_count.innerHTML = "0";
    count_follow.appendChild(p_count);
    var p_title = document.createElement("p");
    p_title.innerHTML = "Followers";
    count_follow.appendChild(p_title);

    let count_fans= document.createElement("div");
    count.appendChild(count_fans);
    var p_count = document.createElement("p");
    p_count.innerHTML = "0";
    count_fans.appendChild(p_count);
    var p_title = document.createElement("p");
    p_title.innerHTML = "Following";
    count_fans.appendChild(p_title);
};

export const skill = () => {
    // create div "skill"
    let skill = document.createElement("div");
    skill.setAttribute("class", "skill");
    header.appendChild(skill);

    // create h5、Front-end、Back-end
    let h5 = document.createElement("h5");
    skill.appendChild(h5);
    let fa_compute = document.createElement("i");
    fa_compute.setAttribute("class", "fa-solid fa-computer");
    h5.appendChild(fa_compute);
    let text = document.createTextNode("skill : ");
    h5.appendChild(text);

    var p = document.createElement("p");
    p.innerHTML = "Front-end - HTML、CSS、JavaScript";
    h5.appendChild(p);
    var p = document.createElement("p");
    p.innerHTML = "Back-end - Python(Flask)、MySQL";
    h5.appendChild(p);

    // create div "follow"
    let follow = document.createElement("div");
    follow.setAttribute("class", "follow");
    header.appendChild(follow);

    // following
    let following = document.createElement("div");
    following.setAttribute("class", "following");
    follow.appendChild(following);
    var follow_text = document.createTextNode("Following");
    following.appendChild(follow_text);

    // arrow-down
    let fa_caret_down = document.createElement("i");
    fa_caret_down .setAttribute("class", "fa-solid fa-caret-down caret-down");
    following.appendChild(fa_caret_down);

    // Message
    let message = document.createElement("div");
    message.setAttribute("class", "message");
    message.innerHTML ="Message";
    follow.appendChild(message);

    // 
    let more = document.createElement("div");
    more.setAttribute("class", "more");
    follow.appendChild(more);

    let fa_user_plus = document.createElement("i");
    fa_user_plus.setAttribute("class", "fa-solid fa-user-plus");
    more.appendChild(fa_user_plus);

    // hr
    let hr = document.createElement("hr");
    header.appendChild(hr);
};