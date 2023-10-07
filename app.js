var navLinks = document.getElementById("navLinks");

      function showMenu(){
        navLinks.style.right = "0";
      }

      function hideMenu(){
        navLinks.style.right = "-200px";
      }


      document.addEventListener('DOMContentLoaded', () => {
        const studentForm = document.getElementById('studentForm');
        const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const dob = document.getElementById('dob').value;
            const gender = document.getElementById('gender').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const grade = document.getElementById('grade').value;
    
            // Create a new table row and populate it with the form values
            const newRow = studentTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
    
            cell1.textContent = fullName;
            cell2.textContent = dob;
            cell3.textContent = gender;
            cell4.textContent = phoneNumber;
            cell5.textContent = grade;
    
            // Clear the form fields after submission
            studentForm.reset();
        });
    });      
