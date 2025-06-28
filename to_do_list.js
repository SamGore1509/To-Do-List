const inputbox=document.getElementById('text');
function addtask()
{
    if(inputbox.value==='')
    {
        alert("enter value");
    }
    else{
        const newtask=document.createElement('li');
        const task=document.getElementById('listcontainer');
       newtask.textContent=inputbox.value;
        deletetask(newtask);
        task.appendChild(newtask);
        newtask.onclick=function()
        {
            newtask.style.textDecoration=newtask.style.textDecoration==="line-through"?"none":"line-through";
        };
        inputbox.value="";
    }    
}
function deletetask(newtask)
    {
        const deletebtn=document.createElement('button');
        deletebtn.textContent="Delete";
        deletebtn.style.marginLeft="7cm";
        deletebtn.style.backgroundColor="red";
        deletebtn.style.color="white";
        deletebtn.style.borderRadius="5px";
        deletebtn.style.position="fixed";
        deletebtn.style.height="1cm"
        newtask.appendChild(deletebtn);
        deletebtn.onclick=function(){
            newtask.remove();
        };
        newtask.appendChild(deletebtn);
    }
