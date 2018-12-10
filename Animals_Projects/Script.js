let pageCounter = 1;
let animalContainer = getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click",function() {
    let ourRequest =new XMLHttpRequest();
    outRequest.open('GET', 'http://www.filltext.com?rows=10&f={data.lenght}3|/' )
    ourRequest.onload =function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send()
    pageCounter++;
    if (pageCounter)
});

function renderHTML(data) {
let htmlString = "";



for(i =0, i < data.length; 1++) {
htmlString += "<p" + data[i].name + "is a " + data[i].species +" .</p>"; 

}


}