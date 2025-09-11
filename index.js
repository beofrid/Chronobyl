//MAIN const URL = "https://script.google.com/macros/s/AKfycbz2mmRqPCeu6o3wyyWRib4gflyb5llaoMWF-5p2XQhNWsBr7iWQdoqEQzU5xysNLr8/exec";
/*test*/const URL = "https://script.google.com/macros/s/AKfycbxeYGr-nxVxvUaSnH1WUJ7LkqLK5Ij1850UJCyBgzWErnVLW7TunqXeZrFGWVP-H3o/exec";
window.onload = getData();
var rowsToShow = 5

function onClick(username)
{
    var timeNow = new Date();
    var todaysDay = `'${dateTimeFormat(timeNow.getDate())}/${dateTimeFormat(timeNow.getMonth()+1)}/${timeNow.getFullYear()}`;
    var todaysTime = `'${dateTimeFormat(timeNow.getHours())}:${dateTimeFormat(timeNow.getMinutes())}`;
    var user = username.innerText;
    fetch
    (
        URL, 
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
    
    getData();
}

function dateTimeFormat (dateTime)
{
   return String(dateTime).padStart(2, "0");
   
}

function getData ()
{
    const logContainer = document.querySelector('.logContainer');
    logContainer.innerHTML = "<div class=\"loader\"></div>"
    fetch(URL)
        .then(response=>response.json())
        .then
        (data=>
            {
                logContainer.innerHTML = '';
                console.log(data)
                if(data.length === 0)
                {
                    logContainer.innerHTML = '<p>Não há registros</p>';
                    return;
                }
                data.slice(-10).forEach
                (row => 
                    {
                        const column1 = row[0];
                        const column2 = row[1];
                        const column3 = row[2];
                        const logElement = document.createElement('div');
                        logElement.className = "logElement";
                        logElement.innerHTML = 
                        `
                            <span class="row"><strong>Data: </strong>${column1}</span>&nbsp;
                            <span class="row"><strong>Hora: </strong>${column2}</span>&nbsp;
                            <span class="row"><strong>Usuário: </strong>${column3}</span>
                        `;
                        logContainer.appendChild(logElement);
                        
                    }
                );
            }
        ).catch
        (error =>
            {
                console.error('Erro ao buscar dados:', error);
                container.innerHTML = '<p>Não foi possível carregar os dados</p>';
            }    
        )
        


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


