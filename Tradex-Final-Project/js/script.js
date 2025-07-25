const icon = document.getElementById('arrow-icon');
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    icon.style.display = 'block';
  } else {
    icon.style.display = 'none';
  }
});

let valid = true;
let valid1 = true;
let valid2 = true;
let valid3 = true;
let valid4 = true;


window.addEventListener('scroll', function () {
  if (window.scrollY > 900) {
    if (valid) {
      let i = 0;
      const count = document.getElementById("counter");
      const interval = setInterval(() => {
        count.innerText = i;
        if (i >= 8000) {
          clearInterval(interval);
          valid = false;
        }
        i += 100;
      }, 20);
    }

    if (valid1) {
      let i1 = 0;
      const count1 = document.getElementById("counter1");
      const interval1 = setInterval(() => {
        count1.innerText = i1;
        if (i1 >= 810) {
          clearInterval(interval1);
          valid1 = false;
        }
        i1 += 30;
      }, 50);
    }

    if (valid2) {
      let i2 = 0;
      const count2 = document.getElementById("counter2");
      const interval2 = setInterval(() => {
        count2.innerText = i2;
        if (i2 >= 2000) {
          clearInterval(interval2);
          valid2 = false;
        }
        i2 += 40;
      }, 30);
    }

    if (valid3) {
      let i3 = 0;
      const count3 = document.getElementById("counter3");
      const interval3 = setInterval(() => {
        count3.innerText = i3;
        if (i3 >= 20) {
          clearInterval(interval3);
          valid3 = false;
        }
        i3 += 1;
      }, 60);
    }

    if (valid4) {
      let i4 = 0;
      const count4 = document.getElementById("counter4");
      const interval4 = setInterval(() => {
        count4.innerText = i4;
        if (i4 >= 20) {
          clearInterval(interval4);
          valid4 = false;
        }
        i4 += 1;
      }, 60);
    }
  }
});


const tabButtons = document.querySelectorAll('.tab-btn');
const items = document.querySelectorAll('.col-12.col-md-6.col-lg-4');

function filterTabs(category) {
  tabButtons.forEach(btn => {
    const btnCategory = btn.getAttribute('data-category');
    btn.classList.remove('active-tab', 'text-primary');
    if (btnCategory === category) {
      btn.classList.add('active-tab', 'text-primary');
    }
  });

  items.forEach(item => {
    item.style.display = 'none';
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    }
  });
}

window.onload = () => {
  filterTabs('all');
};

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    filterTabs(category);
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left rounded-start-pill px-4 py-2 m-2 border border-primary bg-primary text-white"></i>',
      '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-2 border border-primary bg-primary text-white"></i>'
    ]
  });
});

var form = document.getElementById('form1');
form.addEventListener('input', function (e) {
  if (e.target.id === 'name') {
    checkName(e.target);
  } else if (e.target.id === 'userEmail') {
    emailCheck(e.target);
  } else if (e.target.id === 'subject') {
    checkSubject(e.target);
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var isValidName = checkName(document.getElementById('name'));
  var isValidEmail = emailCheck(document.getElementById('userEmail'));
  var isValidSubject = checkSubject(document.getElementById('subject'));

  if (isValidName && isValidEmail && isValidSubject) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fill out the form correctly.');
  }
});

function emailCheck(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var inputValue = input.value;
  if (emailRegex.test(inputValue)) {
    input.nextElementSibling.innerText = "";
    return true;
  } else {
    input.nextElementSibling.innerText = "Enter a valid email";
    return false;
  }
}

function checkName(input) {
  var nameValue = input.value;
  if (nameValue.length < 3) {
    input.nextElementSibling.innerText = "Please enter more than 3 characters";
    return false;
  } else {
    input.nextElementSibling.innerText = "";
    return true;
  }
}

function checkSubject(input) {
  var subjectValue = input.value.trim();
  if (subjectValue === "") {
    input.nextElementSibling.innerText = "Subject cannot be empty";
    return false;
  } else {
    input.nextElementSibling.innerText = "";
    return true;
  }
}