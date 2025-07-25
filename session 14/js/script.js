// var users = []
// var myForm = document.querySelector('#myForm');
// var outputContainer = document.getElementById('outputContainer')

//     myForm.addEventListener('submit', function(e) {
//         e.preventDefault();
    
//     var name = e.target.elements['name'].value
//     var email = e.target.elements['email'].value
    
//     var user = {
//         name: name,
//         email: email
//     };
    
//     users.push(user);
//     console.table(users);
//     var ul = document.createElement('ul')
//     var li = document.createElement('li')
//     li.innerText = `Name: $(user.name) Email: $(user.email)`
//     ul.appendChild(li)
//     document.body.appendChild(ul)
//     })
    
var users = []
var myForm = document.querySelector('#myForm')
var userList = document.getElementById('userList')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    var name = e.target.elements['name'].value
    var email = e.target.elements['email'].value

    var user = {
        name: name,
        email: email
    }

    users.push(user)

    var li = document.createElement('li')
    li.innerText = `Name: ${user.name} Email: ${user.email}`
    userList.appendChild(li);

    })