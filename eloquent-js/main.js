
function heeHaw(){
    // get the input value from HTML
    let heeHawNum = document.getElementById("num").value;

    // validate input
    if(heeHawNum < 1){
        document.getElementById("err").innerHTML = "Positive integer is Required";
    }

    // create an array to store values
    let numArr = [];

    // push values onto array
    for(let i = 1; i <= heeHawNum; i++){
        if(i % 3 == 0 && i % 5 == 0){
            numArr.push("Hee Haw!");
        } else if(i % 3 == 0){
            numArr.push("Hee!");
        } else if(i % 5 == 0){
            numArr.push("Haw!");
        } else {
            numArr.push(i);
        }
    }

    // create variable to print array
    let printArray = numArr.toString();
    // replace all , with a break tag
    document.getElementById("hee-haw-output").innerHTML = printArray.replaceAll(",", "<br>");
}
