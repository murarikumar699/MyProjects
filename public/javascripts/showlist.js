let element = document.getElementById('tabListData');
let tabListClass = document.getElementsByClassName('tabListData');
let tabList = document.getElementsByClassName('tabList');
let listTab = document.getElementById('listTab');

function showListView(userData){
    userData.reverse();
    let ulElement = document.createElement('ul');
    ulElement.classList.add('listUlTag');
    let li = "";
    for(let user of userData){
       li = li + `<div style="display:flex;justify-content:space-between">
                    <li>${user.firstName} ${user.lastName}</li>
                    <button class="deleteButton btn btn-success" onclick=getDetail('${user.firstName}')>Detail</button>
                    <button class="deleteButton btn btn-danger" onclick=deleteUser(this)>Delete</button>
                </div>`
    }

    ulElement.innerHTML = li;
    console.log("lililili",ulElement)
    element.innerHTML = "";
    element.appendChild(ulElement);

    for(let tabclass of tabListClass){
        tabclass.classList.add('d-none');
    }

    element.classList.remove('d-none');

    for(let tab of tabList){
        tab.classList.remove('active');
    }

    listTab.classList.add('active');

}