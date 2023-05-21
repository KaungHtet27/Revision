let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let list = document.getElementById("list");
let i = 1;
let minTextLengtn = 3;


function textFilter(x){
    if(x){

            if(x.length >= minTextLengtn){
                return x;
            }else{
                alert("Minimun Legnth is 3 Words");
                return false;
            }
       
    }else{
        alert("Input is Empty")
        return false;
    }
};

function dataList(textNote){
    list.innerHTML += `
    <li class="listbtn" id="listBtn${i}">
        <button class="btn btn-del" id="btnDel">Delete</button>
        <button class="btn btn-edit" id="btnEdit">Edit</button>
        <span id="inputNote${i}">${textNote}</span>
    </li>`
    i++;
};

function dataAdd(){
    //get
        let inputText = textFilter(input.value);

    //set
       
        dataList(inputText);
        input.value = "";

        
};