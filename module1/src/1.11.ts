{

    const age: number = 12;
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("Not Adult");
    }


    // Ternary Operator | Optional Chaining
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAdult });


}