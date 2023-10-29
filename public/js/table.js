const table = `<table style="border: 1px solid black;width: 100%;" id="getrowValueTable">
<thead style="border: 1px solid black;">
<td style="border: 1px solid black;padding: 10px;">Save</td>
    <td style="border: 1px solid black;padding: 10px;">Name</td>
    <td style="border: 1px solid black;">Quantity</td>
    <td style="border: 1px solid black;padding: 10px;">Unit Price</td>
    <td style="border: 1px solid black;padding: 10px;">Tax</td>
    <td style="border: 1px solid black;padding: 10px;">Total Price</td>
    <td style="border: 1px solid black;padding: 10px;">Action</td>
</thead>
<tbody style="border: 1px solid black;"></tbody>
</table>`

const tbody = `
<tr style="border: 1px solid black;">
<td style="border: 1px solid black;padding: 10px;"><button onclick='saveTable()'>Save</button></td>
    <td style="border: 1px solid black;padding: 10px;"><input type='text' name='name' id='name'></td>
    <td style="border: 1px solid black;padding: 10px;"><input type='number' name='quantity' id='quantity' onkeyup="getTotalPrice()" onmouseup="getTotalPrice()" min="1"></td>
    <td style="border: 1px solid black;padding: 10px;"><input type='number' name='unit'  id='unit' onkeyup="getTotalPrice()" onmouseup="getTotalPrice()" min="1"></td>
    <td style="border: 1px solid black;padding: 10px;">
        <select name="tax" id="tax" onChange="getTotalPrice()">
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
    </td>
    <td style="border: 1px solid black;padding: 10px;"><input type='number' name='totalPrice' id='totalPrice' disabled></td>
    <td style="border: 1px solid black;padding: 10px;">        
        <button onclick="saveTable(this)">Cancel</button>
    </td>
</tr>                        
`


function fillAppendTableData(productName,quantity,unit,tax,totalPrice){
    console.log(tax == 5);
    var tr = `<tr style="border: 1px solid black;">
    <td style="border: 1px solid black;padding: 10px;"><input type='text' name='name' class='name inputClass' value="${productName}" disabled style="border:none"> </td>
    <td style="border: 1px solid black;padding: 10px;"><input type='text' name='quantity' class='quantity inputClass' value="${quantity}" disabled style="border:none"></td>
    <td style="border: 1px solid black;padding: 10px;"><input type='text' name='unit' class='unit inputClass' value="${unit}" disabled style="border:none"></td>
    <td style="border: 1px solid black;padding: 10px;">
    <select name="tax" class="tax" disabled style="border:none;-webkit-appearance: none;"> 
        <option value="0" ${(tax == 0) ? "selected" : "" }  >0</option>
        <option value="5" ${(tax == 5) ? "selected" : "" }  >5</option>
        <option value="10" ${(tax == 10) ? "selected" : "" } >10</option>
        <option value="15" ${(tax == 15) ? "selected" : "" } >15</option>
    </select>
    </td>
    <td style="border: 1px solid black;padding: 10px;"><input type='text' name='totalPrice' class='totalPrice inputClass' value="${totalPrice}"></td>
    <td style="border: 1px solid black;padding: 10px;">
        <button onclick="deleteRow(this)">Delete</button>
        <button onclick="editRow(this)">Edit</button>
    </td>
</tr>   `
        return tr;
}

//when click on add table we run this to show table so user put value and that value put into the main table
function showNewTable(){
    $("#appendedTable").html(table);
    $("#getrowValueTable tbody").append(tbody);
}


//we call this when price when quantity change, we calculate price when quantity and unit are changed
function getTotalPrice(){
    let quantity = document.getElementById('quantity');
    let totalPrice = document.getElementById('totalPrice');
    let tax = document.getElementById('tax');
    if(quantity.value != "" && unit.value != "" && tax.value != ""){
        totalPriceWithoutTax = Math.abs(quantity.value) * Math.abs(unit.value)        
        totalPrice.value = totalPriceWithoutTax * (100+Math.abs(tax.value))/100
    }
}

//we call when click on the save button which we get when we call the function showNewTable() and then append it into main table
function saveTable(){
    let productName = document.getElementById('name');
    let quantity = document.getElementById('quantity');
    let unit = document.getElementById('unit');
    let tax = document.getElementById('tax');
    let totalPrice = document.getElementById('totalPrice');
    console.log("productNameproductName",productName)
    if(productName.value == "" || quantity.value == "" || unit.value == "" || tax.value == ""){
        alert("Please fill all the values");
        return false;
    }    
    // totalPrice = parseInt(quantity.value) * parseInt(unit.value);
    var getRowData = fillAppendTableData(productName.value,quantity.value,unit.value,tax.value,totalPrice.value);
    $("#appendedTable").empty();
    $('#mainTable tbody').append(getRowData)
    sumTotalPrice();
}

function sumTotalPrice(){
    let sumTotal = 0;
    $('.totalPrice').each((index,val) => {
        sumTotal = Math.abs(sumTotal)+Math.abs(val.value);
    });
    
    $("#sumTotalPrice").val(sumTotal);
}

function editRow(elum){
    elum.closest('tr').remove();
    $("#appendedTable").html(table);
    $("#getrowValueTable tbody").append(tbody);

    let element = {};
    $(elum).closest('tr').find("input:not([name^=name][name^=quantity][name^=unit]),select").each(function() {
        element[this.name] = this.value
        // element.push(this.name,this.value)
   });

    console.log("element",element)   
   $("#getrowValueTable tbody").children('tr').find("input:not([name^=name][name^=quantity][name^=unit])").each(function(index){   
        if(element[index] != "tax")
            this.value = element[this.name];
   })
   $("#tax").val(element.tax);
}

function deleteRow(elum){
    elum.closest('tr').remove();
    sumTotalPrice();
}