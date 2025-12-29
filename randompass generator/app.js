const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstucwxyz";
const numSet="123465789";
const symbolSet="@#$%^&*()_+-";

let passlength=document.getElementById("total-char");
let passBox=document.getElementById("pass-box");
const upperText=document.getElementById("upper-case");
const lowerText=document.getElementById("lower-case");
const numberInput=document.getElementById("number");
const inputSymbol=document.getElementById("symbol");

const getRandomData =(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword=(password="")=>{
    if(upperText.checked)
    {
        password+=getRandomData(upperSet)
    }
    if(lowerText.checked)
    {
        password+=getRandomData(lowerSet)
    }
    if(numberInput.checked)
    {
        password+=getRandomData(numSet)
    }
    if(inputSymbol.checked)
    {
        password+=getRandomData(symbolSet)
    }
    


    if(password.length < passlength.value)
    {
      return generatePassword(password);
    }
    
    
passBox.innerText=`you password is:${truncateString(password,passlength.value)}`;
    
}
  generatePassword();
document.getElementById("btn").addEventListener("click",
    function(){
        generatePassword();
    }
    
)

function truncateString(str,num)
{
    if(str.length>num)
    {
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}

