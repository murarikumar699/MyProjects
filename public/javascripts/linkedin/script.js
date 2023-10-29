let search = document.getElementById("search");
search.addEventListener('click',function(){
    document.getElementById('body').style.background = '#000000b8';
    document.getElementById('body').style.transition = '0.2s';
    document.getElementById('searchBox').classList.remove('d-none');
})

let body = document.getElementById('body');
document.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.id !== 'search'){
        document.getElementById('body').style.background = '#f2f2f2';
        document.getElementById('body').style.transition = '0s';
        document.getElementById('searchBox').classList.add('d-none');
    }
})