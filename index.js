function onClick(username)
{
    var timeNow = new Date();
    var todaysDay = `${dateFormat(timeNow.getDay())}/${timeNow.getMonth()+1}/${timeNow.getFullYear()}`;
    var todaysTime = `${timeNow.getHours()}:${timeNow.getMinutes()}`;

    var user = username.innerText;
    fetch
    (
        "https://script.google.com/macros/s/AKfycbz0y81iMIL5gt2vPIWSA8gAQ_gMKTiBglBIZ-h0pMCANxtg5ESPMAFfPku9fj00RRw/exec", 
        {
            method: "POST",
            body: JSON.stringify
            ({ 
                    date: todaysDay,
                    hour: todaysTime,
                    user: user

            })
        }
    );
}

function dateFormat (date)
{
    if (date.lenght>1)
    {
        return date;
    }
    else
    {
        return `0${date}`

    }

}

function updateDateTime() {
  const now = new Date();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('todaysTime').textContent = `${hours}:${minutes}`;

  let day = String(now.getDate()).padStart(2, '0');
  let month = String(now.getMonth() + 1).padStart(2, '0');
  let year = now.getFullYear();
  document.getElementById('todaysDay').textContent = `${day}/${month}/${year}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// https://chatgpt.com/share/68b63c71-ddf4-8002-a2c4-08bc03219242


//https://docs.google.com/spreadsheets/d/1rfhXNSSPc2y1MLK0BW6XFygbqXNuXcTsqSvYo1v0doo/edit?usp=sharing


