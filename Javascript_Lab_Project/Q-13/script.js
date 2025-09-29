
// 13) JavaScript Program to Check Prime Number
{
 {
    let num = 11
    let i = 2
    for (i; i < num; i++) {
        if (num % i == 0)
            break;
    }
    if(num==i){
        console.log("Prime");
    }
    else{
        console.log("Not Prime");
    }
}


}
