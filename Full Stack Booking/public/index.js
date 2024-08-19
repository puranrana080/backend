function handleFormSubmit(event){
    event.preventDefault()

    const users={
        username:event.target.username.value,
        phone:event.target.phone.value,
        email:event.target.email.value
    }
     console.log(users)

     axios.post('http://localhost:3000/user/add-user',users)
     .then(response=>{
        console.log('Response form Server',response.newUserDetail)
        event.target.username.value=""
        event.target.phone.value=""
        event.target.email.value=""
        location.reload()
     })
     .catch(err=>{
        console.log(err)
     })

    
}


window.addEventListener("DOMContentLoaded",()=>{
     axios.get("http://localhost:3000/user/get-users")
     .then((response)=>{
         console.log(response.data.allUsers)

         

         for (let i=0;i<response.data.allUsers.length;i++){

            displayUserOnScreen(response.data.allUsers[i])
         }
     })
     .catch(err=>{console.log(err)})
 })


 function displayUserOnScreen(User){

   const ol=document.querySelector('ol')

   const userList=document.createElement('li')
   userList.appendChild(document.createTextNode(`${User.name}--${User.phonenumber}--${User.email}`))
   ol.appendChild(userList)

   const delBtn=document.createElement('button')
   delBtn.className="btn btn-outline-danger btn-sm"
   delBtn.appendChild(document.createTextNode('Delete'))

   userList.appendChild(delBtn)

   delBtn.addEventListener("click",()=>{
      axios.delete(`http://localhost:3000/user/delete/${User.id}`)
      .then(()=>{
         console.log("deleted success")
         ol.remove(userList)
         location.reload()
      })
      .catch(err=>{
         console.log(err)
      })

   })

 }