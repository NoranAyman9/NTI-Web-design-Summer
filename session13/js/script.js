// var h1Elements =document.getElementsByTagName("h1") //html collection
// h1Elements[2].innerText="bootstrap"

// var h1 = document.getElementById("h1-element")

// var elements = document.getElementsByClassName("custom-class")

// for(var i=0;i<elements.length;i++){
//     elements[i].innerText="js"
// }

//console.log(elements)

//var item = document.querySelector('h1 span')
//var item = document.querySelector('.custom-class')
//var item =document.querySelector('.border .custom-class')
//var item =document.querySelectorAll('.border .custom-class')

//var h3 = document.getElementById('h3-element')
//or 
// var h3 = document.querySelector('#h3-element')

// h3.style.backgroundColor  = "blue"
// h3.style.color="yellow"
// h3.style.padding ='2%'

// h3.className="border border-primary"





  function handleMouseEvent(element) {
    var items = document.querySelectorAll("ul li")
    items.forEach(function(item) {
      item.style.color = ''
    })

    element.style.color = 'red'
  }
