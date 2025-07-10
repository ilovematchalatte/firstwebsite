//check if supporter
let supporters = [
    { person: "Danyse", contactNumber: "98765432" }
  ];
  
  function checkSupporter() {
    let person = prompt("What is your name?");
  
    let existingSupporter = supporters.find(s => s.person === person);
  
    if (existingSupporter) {
      alert(`Welcome, ${person}! You are already a supporter`);
    } else {
      let response = confirm(`Sorry, ${person}. You are not a supporter. Want to join as a supporter?`);
      if (response) {
        let contactNumber = prompt(`Enter your contact number:`);
        supporters.push({ person, contactNumber });
        alert(`Thank you, ${person}`);
      } else {
        alert("Thanks for visiting!");
      }
    }
  }
  document.getElementById('check-supporter-btn').addEventListener('click', checkSupporter);