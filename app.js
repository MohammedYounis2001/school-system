var navLinks = document.getElementById("navLinks");

      function showMenu(){
        navLinks.style.right = "0";
      }

      function hideMenu(){
        navLinks.style.right = "-200px";
      }

      document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("Students")) {
            const savedStudents = JSON.parse(localStorage.getItem("Students"));      // convert the data from json to java script to display it
            student.arr = savedStudents;
    
    //Display data saved in localStorage
            savedStudents.forEach((studentInfo) => {
                createStudentCard(studentInfo);
            });
        }
    });

      class student {
        static arr = [];
    
        constructor (info) {     
            this.info = info;
        }

       

        myfunction(){
            student.arr.push(this.info);
            localStorage.setItem("Students", JSON.stringify(student.arr));     /// convert the data from java script to json
        }
    }

      let submit = document.getElementById("moh");
      function createStudentCard(info) {
        let card = document.createElement("div");
        card.style.border = "2px solid black";
        card.style.marginLeft = "10px";
        card.style.marginTop = "7px";
        card.style.width = "200px";
        card.style.height ="300px";
        card.style.backgroundColor = "#f3f4f7";
        

        
    
        let imgg = document.createElement("img");
        imgg.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
        imgg.classList.add("photo");
        card.appendChild(imgg);
    
        for (const value of info) {
            let div = document.createElement("div");
            div.innerHTML = value;
            card.appendChild(div);
        }
    
        let cardSIn = document.getElementById("cardSIn");
        cardSIn.appendChild(card);
    }

    submit.addEventListener("click", (eventt) => {
        eventt.preventDefault();
     const info = [
    
            document.getElementById("fullname").value,
            document.getElementById("dateofbirth").value,
            document.getElementById("gender").value,
            document.getElementById("phonenumber").value,
            document.getElementById("grade").value
        ];
    
    
    // Save data to localStorage
        let hh = new student(info);
        hh.myfunction();
    
    
    // Create and display the student card
        createStudentCard(info);
    
    
    });