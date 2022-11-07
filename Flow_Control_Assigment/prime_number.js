// 判斷是否是質數
function checkPrime(num){
    for (let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        };
    };
    return true;
};

// 找出 2 到任意數之間所有的質數
function getPrime(n){
    for (let i = 2; i < n + 1; i++){
        if(checkPrime(i)){
            console.log(i);
        };
    };
};


getPrime(11); 

/*
2
3
5
7
11
*/