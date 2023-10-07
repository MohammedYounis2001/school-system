var navLinks = document.getElementById("navLinks");

      function showMenu(){
        navLinks.style.right = "0";
      }

      function hideMenu(){
        navLinks.style.right = "-200px";
      }

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem('userData'));

    // Check if data exists
    if (storedData) {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Populate the card with data
        card.innerHTML = `
            <h2>${storedData.fullName}</h2>
            <p>Date of Birth: ${storedData.dob}</p>
            <p>Gender: ${storedData.gender}</p>
            <p>Major: ${storedData.major}</p>
            <img src="${storedData.imageUrl}" alt="${storedData.fullName}">
            <p>Phone Number: ${storedData.phoneNumber}</p>
            <p>Grade: ${storedData.grade}</p>
        `;

        // Append the card to the card container
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.appendChild(card);
    } else {
        // Handle the case where no data is found in local storage
        alert('No data found in local storage.');
    }
});
