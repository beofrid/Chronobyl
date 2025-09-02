


function onClickBruno (){
    var todaysTime = document.getElementById("todaysTime");
    var todaysDay = document.getElementById("todaysDay");

    var timeNow = new Date();
    todaysTime.innerText = ` ${timeNow.getHours()}:${timeNow.getMinutes()}`
    todaysDay.innerText = ` ${timeNow.getDay()}/${timeNow.getMonth()+1}`
    


    fetch("https://script.google.com/macros/s/AKfycbz0y81iMIL5gt2vPIWSA8gAQ_gMKTiBglBIZ-h0pMCANxtg5ESPMAFfPku9fj00RRw/exec", {
    method: "POST",
    body: JSON.stringify({ 
        timestamp: "baringogela",
        user: "Bruno"
    
    })
  })

}

function onClickDiego (){

    var timeNow = new Date();
    var todaysTime = `${timeNow.getHours()}:${timeNow.getMinutes()}`
    var todaysDay = `${timeNow.getDay()}/${timeNow.getMonth()+1}`

    var timeData = "Diego | " + todaysTime + " | " + todaysDay


    fetch("https://script.google.com/macros/s/AKfycbz0y81iMIL5gt2vPIWSA8gAQ_gMKTiBglBIZ-h0pMCANxtg5ESPMAFfPku9fj00RRw/exec", {
    method: "POST",
    body: JSON.stringify({ timestamp: timeData })
  })

}

function updateDateTime() {
  const now = new Date();

  // Format time as HH:MM (24h)
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('todaysTime').textContent = `${hours}:${minutes}`;

  // Format date as DD/MM/YYYY
  let day = String(now.getDate()).padStart(2, '0');
  let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  let year = now.getFullYear();
  document.getElementById('todaysDay').textContent = `${day}/${month}/${year}`;
}

// Update once at start
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// https://chatgpt.com/share/68b63c71-ddf4-8002-a2c4-08bc03219242


//https://docs.google.com/spreadsheets/d/1rfhXNSSPc2y1MLK0BW6XFygbqXNuXcTsqSvYo1v0doo/edit?usp=sharing


