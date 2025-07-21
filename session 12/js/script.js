// var nums = [10, 4, 20, 5, 100]

// var userNum = Number(prompt("Please enter a number"))
// var found = nums.find((item) => item > userNum)

// if (found) {
//     console.log("correct")
// } else {
//     nums.push(userNum + 7)
// }
// console.log(nums)

function addUser(Name,id,balance,users){
    var user ={
        Name:Name,
        ID:id ,
        balance : balance 
    };
    users.push(user)
}

function editUserBalanceById(users){
    do {var id = prompt("enter id to edit")
        var newBalance = prompt("enter new balance")
        var index = users .findIndex((item)=> item.ID == id)}
        while (index == -1)

        users [index].balance = newBalance
    }
function deleteUserById(users){
    do {var id = prompt("enter id to remove")
        var index = users.findIndex((item) => item.ID = id)}
        while (index==-1)

        users.splice(index,1)
    }
var usersnum = prompt("enter number of users")
var users =[]
for (var i=0 ; i<usersnum;i++){
    var Name = prompt("enter your name")
    var id = prompt("enter your id")
    var balance = prompt("enter your balance")
    addUser(Name,id,balance,users)

}

console.table(users)
editUserBalanceById(users)
console.table(users)
deleteUserById(users)
console.table(users)

