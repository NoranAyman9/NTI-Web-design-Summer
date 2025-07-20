function looping(start, end, breakNum, continueNum) {
    if (start && end && breakNum && continueNum) {
        for (var i = start; i <= end; i++) 
            if (i == breakNum && breakNum >= start && breakNum <= end) {
                break;
            } else if (i == continueNum && continueNum >= start && continueNum <= end) {
                continue;
            } else {
                console.log(i);
            }
        
    }
    else {
        console.log("please enter all numbers");
    }
}

looping(5, 15, 13,10);
looping(5, 15, 13);
looping(5, 15);
looping(5);



