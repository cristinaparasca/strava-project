let sendbutton=document.getElementById('send');
sendbutton.addEventListener("click", GetData)
async function GetData(){
    const response= await axios.get('http://localhost:3000/strava-athlete');
    window.location.replace(response.data);
}