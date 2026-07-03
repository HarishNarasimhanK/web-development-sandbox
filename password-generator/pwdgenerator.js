//random pwd generator

function randomPasswordGenerator(length ,lcase, ucase, num, sym )
{
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="1234567890";
    const symbolChars="!@#$%^&*_+.";     
    
    let allowedChars="";
    allowedChars += lcase?lowercaseChars:"";
    allowedChars += ucase?uppercaseChars:"";
    allowedChars += num?numberChars:"";
    allowedChars += sym?symbolChars:"";
     
    if(length<=0)
    {
        return ("password should be atleast 1 characters in length");
    }

    if(allowedChars===0)
    {
        return ("password should contain atleast 1 set of characters");
    }    


    pwd="";
    for(let i=0;i<length;i++)
    {
        const randomIndex=Math.random()*(allowedChars.length);
        pwd+=allowedChars.charAt(randomIndex);
    }

    return pwd;
}
function generate()
{
    const pwdlen=12;
    const includeLowercase=true;
    const includdeUppercase=true;
    const includeNumbers=true;
    const includeSymbols=true;
    const text=document.getElementById("text");
    const password=randomPasswordGenerator(pwdlen,includeLowercase,includdeUppercase,includeNumbers,includeSymbols);

    text.textContent=`the password is ${password}`;

}