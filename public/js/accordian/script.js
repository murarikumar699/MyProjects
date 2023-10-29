document.addEventListener('click',function(e){
    let accordianId = e.target.attributes.accordianid.nodeValue;
    let accordianData =  document.getElementById(accordianId);
    let allAccordian = document.querySelectorAll('.accordianData');
    for(let accordian of allAccordian){
        if(accordian.attributes.id.nodeValue != accordianId){
            accordian.classList.add('Hidden')
        }else{
            accordianData.classList.remove('Hidden');
        }
    }
})

document.addEventListener('click',function(e){
    if(e.target.classList.value == 'colorDiv'){
        let colorDiv = document.querySelectorAll('.colorDiv');
        let colorArr = Array.from(colorDiv.length);
        for(let i = 0; i < colorDiv.length; i++){
            if(i ===  colorDiv.length-1){
                colorArr[0] =  colorDiv[i].id;
            }else{
                colorArr[i+1] =  colorDiv[i].id;
            }
        }
        for(let i = 0; i < colorDiv.length; i++){
        colorDiv[i].id = colorArr[i];
        }
        console.log(colorArr)
    }
    

})