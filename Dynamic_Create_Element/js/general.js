let wrapper = document.querySelector(".wrapper");
let header = document.createElement("header");
wrapper.appendChild(header);

export const nav = () => {
    // create "nav"
    let nav = document.createElement("nav");
    nav.setAttribute("class", "nav");
    header.appendChild(nav);

    // create "<- __Polar_Bear__"
    let nav_left = document.createElement("div");
    nav_left.setAttribute("class", "nav_left");
    nav.appendChild(nav_left);

    let fa_arrow_left = document.createElement("i");
    fa_arrow_left.setAttribute("class", "fa-solid  fa-arrow-left");
    nav_left.appendChild(fa_arrow_left);

    let username = document.createElement("span");
    username.innerHTML = "__Polar_Bear__";
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

export const info = () => {
    // create div "info"
    let info = document.createElement("div");
    info.setAttribute("class", "info");
    header.appendChild(info);

    // create h5、snowflake
    var h5 = document.createElement("h5");
    info.appendChild(h5);
    let fa_snowflake = document.createElement("i");
    fa_snowflake.setAttribute("class", "fa-solid fa-snowflake");
    h5.appendChild(fa_snowflake);
    var text = document.createTextNode("About : ");
    h5.appendChild(text);

    // website
    var a = document.createElement("a");
    a.href = "https://www.taiwanbear.org.tw/bear/bear/55";
    a.innerHTML = "Click Me!";
    h5.appendChild(a);

    // food : seal
    var h5 = document.createElement("h5");
    info.appendChild(h5);
    let fa_meat = document.createElement("i");
    fa_meat.setAttribute("class", "fa-solid fa-fish");
    h5.appendChild(fa_meat);
    var text = document.createTextNode("Food : Seal");
    h5.appendChild(text);

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

    // message
    let message = document.createElement("div");
    message.setAttribute("class", "message");
    message.innerHTML ="Message";
    follow.appendChild(message);

    // add
    let add = document.createElement("div");
    add.setAttribute("class", "add");
    follow.appendChild(add);

    let fa_user_plus = document.createElement("i");
    fa_user_plus.setAttribute("class", "fa-solid fa-user-plus");
    add.appendChild(fa_user_plus);

    // create div "cells_play"
    let cells_play = document.createElement("div");
    cells_play.setAttribute("class", "cells_play");
    header.appendChild(cells_play);

    // cells
    let fa_table_cells = document.createElement("i");
    fa_table_cells.setAttribute("class", "fa-solid fa-table-cells");
    cells_play.appendChild(fa_table_cells);

    // play
    let fa_play = document.createElement("i");
    fa_play.setAttribute("class", "fa-solid fa-play");
    cells_play.appendChild(fa_play);

    // tag
    let fa_user_tag = document.createElement("i");
    fa_user_tag.setAttribute("class", "fa-solid fa-user-tag");
    cells_play.appendChild(fa_user_tag);

    // hr
    let hr = document.createElement("hr");
    header.appendChild(hr);
};

