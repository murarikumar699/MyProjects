let set = new Set();

document.addEventListener('click',function(e){
    let column = document.getElementById(e.target.id);
    column.classList.add('greenColor');
    set.add(e.target.id);
    if(set.size >= 7){
        checkAllTheColorFill();
    }
})


function checkAllTheColorFill(){
        let newset = Array.from(set.values());
        for(let i = 0; i < newset.length; i++){
            console.log("set.values()[i]",Array.from(set.values())[i])
            setTimeout(() => {
                set.delete(newset[i])
                let column = document.getElementById(newset[i]);
                column.classList.remove('greenColor');
            },i*500);
        }
}