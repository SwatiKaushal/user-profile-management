const url = 'https://api.tretton37.com/ninjas';
fetch(url)
.then(function (resp) { return resp.json() })
.then(function (data) {
    var i = 1; var k = 0;
    var parent = document.getElementById("profile");
    while (i < 2) {
        var j = k;
        var imageParent = document.createElement("div");
        imageParent.id = i;
        while (j < (i*2)) {
            var image = document.createElement("img");
            var nameTextHolder = document.createElement("div");
            var officeTextHolder = document.createElement("div");
            var container = document.createElement("div");
            container.class="container"
            image.id = j;
            image.style = "width:20%"
            image.className = "class";
            image.src = data[j].imagePortraitUrl;
            nameTextHolder.className = "bottom-left";
            nameTextHolder.innerHTML = "Name- "+data[j].name;
            officeTextHolder.className = "bottom-right";
            officeTextHolder.innerHTML ="Office- "+ data[j].office;
            container.appendChild(image);
            container.appendChild(nameTextHolder);
            container.appendChild(officeTextHolder);
            imageParent.appendChild(container);
            parent.appendChild(imageParent);
            j++;
            k = j;
        }
            i++;
    }
})
.catch(function(error) {
    console.log(error);
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}