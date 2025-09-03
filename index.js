function onClick(username)
{
    var timeNow = new Date();
    var todaysDay = `${dateTimeFormat(timeNow.getDay())}/${dateTimeFormat(timeNow.getMonth()+1)}/${timeNow.getFullYear()}`;
    var todaysTime = `${dateTimeFormat(timeNow.getHours())}:${dateTimeFormat(timeNow.getMinutes())}`;
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
    validation(user, todaysDay, todaysTime);
}

function dateTimeFormat (dateTime)
{
   return String(dateTime).padStart(2, "0");
   
}

function validation (user, todaysDay, todaysTime)
{
    const btn = document.getElementById('btnContainer');
    const txt = document.createElement('p');
    txt.textContent = `Registrado evento do usuário ${user}, dia ${todaysDay} e horário ${todaysTime}`;
    btn.appendChild(txt);
    setTimeout
    (
        () => txt.textContent = "",
        5000
    );
    




}



 function updateClock() 
 {
            const now = new Date();

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const day = String(now.getDate()).padStart(2, '0'); 
            const month = String(now.getMonth() + 1).padStart(2, '0'); 

            const stringTime = `${hours}:${minutes}:${seconds}`;
            const stringDate = `${day}/${month}`;
            
            document.getElementById("todaysTime").innerText = stringTime;
            document.getElementById("todaysDay").innerText = stringDate;
}

setInterval(updateClock, 1000);
updateClock();


