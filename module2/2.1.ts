{

    // Type Assertion

    let anything: any;

    anything = "Next Level Web 2.0";
    // (anything as string).



    const KgToGm = (value:string | number) : string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if(typeof value === "number"){
            return value * 1000;
        }
}

const result1 = KgToGm("1000") as string;
const result2 = KgToGm(1000) as number;

console.log(result1);
console.log(result2);


}