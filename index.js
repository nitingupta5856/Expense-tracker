function onsubmitbtn(event){
    event.preventDefault();
 const expenseamount =event.target.expenseamount.value;
 const description =event.target.description.value;
 const category =event.target.category.value;
//  console.log(event);
 const obj={
    expenseamount,
    description,
    category
 }
 localStorage.setItem(obj.expenseamount,JSON.stringify(obj))
 showNewExpense(obj);
}


 function  showNewExpense(user){
    document.getElementById('expenseamount').value='';
    document.getElementById('description').value='';
    document.getElementById('category').value='';
  
   
const parentnode=document.getElementById('parentnode');
const childnode =`<li id=${user.expenseamount}>${user.expenseamount}  - ${user.description} - ${user. category}
<button onClick=deleteExpense('${user.expenseamount}')>Delete Expense</button>
<button onClick=editExpense('${user.expenseamount}','${user.description}','${user.category}')>Edit Expense</button>
</li>`
parentnode.innerHTML=parentnode.innerHTML+childnode;
}

window.addEventListener("DOMContentLoaded",()=>{
    const localStorageObj =localStorage;
    const localStoragekeys =Object.keys(localStorageObj);
    for(var i=0;i<localStoragekeys.length;i++){

        const userDetailsObj= JSON.parse(localStorageObj[localStoragekeys[i]])
        showNewExpense(userDetailsObj);
       
    }
 })

 function editExpense(expenseamount,description,category){
    document.getElementById('expenseamount').value=expenseamount;
    document.getElementById('description').value=description;
    document.getElementById('category').value=category;
    deleteExpense (expenseamount)
   
}

 function deleteExpense (expenseamount){
    console.log(expenseamount)
    localStorage.removeItem(expenseamount);
    removeExpenseFromScreen(expenseamount)
   }
   function  removeExpenseFromScreen(expenseamount){
    const parentnode=document.getElementById('parentnode');
    const childNodeForDelete=document.getElementById(expenseamount);
   if(childNodeForDelete){
    parentnode.removeChild(childNodeForDelete);
   }
    
   }



