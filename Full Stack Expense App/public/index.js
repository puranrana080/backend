function handleFormSubmit(event) {
    event.preventDefault()
    const expense = {
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value
    }

    axios.post("http://localhost:3000/home/add-expense", expense)
        .then(response => {
            console.log("Response from Server", response.data)
            event.target.amount.value = ""
            event.target.description.value = ""
            event.target.category.value = ""
            location.reload()
        })
        .catch(err => {
            console.log(err)
        })

}

window.addEventListener("DOMContentLoaded", () => {

    axios.get("http://localhost:3000/home/get-expense")
        .then(response => {
            console.log(response.data.allExpense)

            for (let i = 0; i < response.data.allExpense.length; i++) {
                displayUserOnScreen(response.data.allExpense[i])
            }
        })
        .catch(err => {
            console.log(err)
        })
})

function displayUserOnScreen(user) {
    const ul = document.querySelector('ul')

    const newList = document.createElement('li')
    newList.appendChild(document.createTextNode(`${user.amount}--${user.description}--${user.category}`))
    ul.appendChild(newList)


    const editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode("Edit"))
    newList.appendChild(editBtn)

    const delBtn = document.createElement('button')
    delBtn.appendChild(document.createTextNode("Delete"))
    newList.appendChild(delBtn)


    delBtn.addEventListener("click", () => {
        axios.delete(`http://localhost:3000/home/delete-expense/${user.id}`)
            .then(() => {
                console.log("delete success")
                ul.removeChild(newList)
                location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    })

    editBtn.addEventListener("click", () => {

        document.getElementById('amount').value = user.amount
        document.getElementById('description').value = user.description
        document.getElementById('category').value = user.category

        axios.delete(`http://localhost:3000/home/delete-expense/${user.id}`)
            .then(() => {
                ul.removeChild(newList)
            })
            .catch(err => {
                console.log(err)
            })



    })




}