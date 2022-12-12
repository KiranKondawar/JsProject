const calculateTemp=()=>{

    const numberTemp=document.getElementById('temp').value;
   // console.log(numberTemp);

   const tempSelected=document.getElementById('temp_diffs');
   const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
   
const celToFah=(cel) =>{
    let Fahrenheit= Math.round((cel*9/5)+32);
    return Fahrenheit;
}

const FahToCel=(fah) =>{
    let celsius= Math.round((fah-32)*5/9);
    return celsius;
}

   let result;

   if(valueTemp == 'cel'){
    result= celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result} Fahrenheit`;
    console.log(result);
   }else{
    result= FahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result} celsius`;
   }

}