function reverseTriangle(size){
    let star = "";
    for (let i = 1; i < size + 1; i ++){
        for(let j = 1; j < i; j++){
            star += " ";
        };

        for(let k = size; k >= i; k--){
            star += "*";
        };
        star += "\n";
    };

    console.log(star);
};

reverseTriangle(20);