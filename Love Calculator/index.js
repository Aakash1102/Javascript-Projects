function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    // console.log(name1);
    // console.log(name2);

    if(name1===""|| name2===""){
        alert("Please enter both names")
    }
    else{
        const loverPercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML= `${name1} and ${name2}  's Love Percentage: ${loverPercentage} %`;

        {
            if(loverPercentage<30){
        result.innerHTML = "<br> Not a great Match. So keep Looking!😒"
        }
        else if(loverPercentage>=30 && loverPercentage<70){
        result.innerHTML = "<br> There is potential. Give it a try!!😊 "
        }
        else{
        result.innerHTML = "<br> A great Match. Love is in the Air!👌💕"

        }
        }

    }
 


}