
function saveClicked()
{
    var user = document.querySelector(".inputName");
    console.log("user = " + user.value);
    localStorage.setItem("userId", user.value);
    user.value = "";
}


function loadLocalStorage()
{
    var userId = localStorage.getItem("userId");

    if(userId == null)
    {
        alert("Empty");
    }
    else
    {
        alert(userId);
    
    }



}


function clearLocalStorage()
{
    localStorage.clear();
}

