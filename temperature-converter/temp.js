  const tb=document.getElementById("textbox");
  const r=document.getElementById("result"); 
  
  function convert(){
    let val=Number(tb.value);

    let res=0;


    if(toFarenheit.checked)
    {
        res=(9/5)*val+32;
        res=Math.round(res*100)/100;
        r.textContent=res+"*F";
    }
    else
    {
        res=(val-32)*(5/9);
        res=Math.round(res*100)/100;
        r.textContent=res+"*C";
    }
  }
