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


