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
