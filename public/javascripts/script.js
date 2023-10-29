let userData = [];


function switchTab(tabId,showTabId){
    var tabClass = document.getElementsByClassName('tabList');
    for(let tab of tabClass){
        console.log("tabtabtab",tab.id,tabId)
        if(tab.id == tabId){
            tab.classList.add("active"); 
        }else{
            tab.classList.remove("active");    
        }
            
    }

   
    var tabDataClass = document.getElementsByClassName('tabListData');
    for(let tab of tabDataClass){
        if(tab.id == showTabId){
            tab.classList.remove("d-none"); 
        }else{
            tab.classList.add("d-none");
        }  
    }
}

let addUserData = document.getElementById('addUserData');
addUserData.addEventListener('submit',function(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(addUserData).entries());
    //function declare in validate.js => public/javascripts/validate.js
    let isValidate = validateData(data);
    if(isValidate === false){
        // alert("form validation failed");
        return false;
    }
    userData.push(data);
    showListView(userData)
    removeValue(data);
})

function getDetail(name){
    let detailTabListData = document.getElementById('detailTabListData');
    let user = userData.filter(e => e.firstName === name);

    let detail = `<div class="card">
                    <div class="card-header text-center">
                        Detail
                    </div>
                    <div class="card-body">
                        <div class="form-group p-3">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" value=${user[0].firstName} name="firstName" id="firstName" placeholder="Enter first name" readonly>                            
                        </div>
                        <div class="form-group p-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" value=${user[0].lastName} name="lastName" id="lastName" placeholder="Enter last name" readonly>            
                        </div>
                        <div class="form-group p-3">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" value=${user[0].email} name="email" id="email" placeholder="Enter email" readonly>            
                        </div>
                        <div class="form-group p-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" value=${user[0].password} name="password" id="password" placeholder="Password" readonly>
                        </div>                     
                        <div class="form-group p-3">
                            <label for="gender">Gender</label>
                            <input type="text" class="form-control" value=${user[0].gender} name="gender" id="gender" readonly>      
                        </div> 
                    </div>
                </div>`
                detailTabListData.innerHTML = detail;
                switchTab('detailListTab','detailTabListData');
                console.log("useruseruser",user);
}

function deleteUser(elem){
    console.log(elem.parentElement.remove());
}