function oddOrEvenNumber(num){
    if (num == "" || num < 0){
        console.log("請輸入一個正整數");
    }else if (num % 2 == 0){
        console.log("偶數");
    }else{
        console.log("奇數");
    };
};

oddOrEvenNumber(3);  //奇數
oddOrEvenNumber(10);  //偶數
oddOrEvenNumber(-5); //請輸入一個正整數