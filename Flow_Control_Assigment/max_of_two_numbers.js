function findTwoNumMax(num1, num2){
    if (num1 > num2){
        console.log(`最大的數字是 : ${num1}`);
    }else if(num1 == num2){
        console.log("兩個數字一樣大");
    }else{
        console.log(`最大的數字是 : ${num2}`);
    };
};

findTwoNumMax(5, 2);  // 最大的數字是 : 5
findTwoNumMax(2, 2);  // 兩個數字一樣大
findTwoNumMax(1, 10);  // 最大的數字是 : 10
