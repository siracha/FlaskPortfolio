/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock_face').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  function addTask() {
      //get input task name
      const taskName = document.getElementById('input_task').value;
      const p = document.createElement("span");
      p.append(taskName);
      //create check box and delete button
      const chkbox = document.createElement('input');
      chkbox.setAttribute("type", "checkbox");

      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("style", "background-color:red")
      const btnTxt = document.createTextNode("x");
      deleteBtn.appendChild(btnTxt);
      deleteBtn.setAttribute("onclick", "delRow(this)");


      //append created items to table
      const newTask = document.getElementById('task_list');
      const row = document.createElement('tr');
      row.append(chkbox, p, deleteBtn);
      newTask.append(row);
  }
  
  function delRow(delBtn){
      let theTable = delBtn.parentNode.parentNode.parentNode;
      let theRow = delBtn.parentNode.rowIndex;

      theTable.deleteRow(theRow);

  }