const secondhand=document.querySelector('.second-hand');
const minutehand =document.querySelector('.min-hand');
const hourhand=document.querySelector('.hour-hand');
const time=new Date();
const seconds=time.getSeconds();
const minutes=time.getMinutes();
const hours=time.getHours();
var count=1;
function rotates(){
    secondhand.style.transform=`rotate(${(6*(15+seconds+count))}deg)`;
    minutehand.style.transform=`rotate(${(6*(15+minutes)+(0.1*count))}deg)`;
    hourhand.style.transform=`rotate(${(6*(15+hours)+((1/120)*count))}deg)`;

    count++;
}
setInterval(rotates,1000)



