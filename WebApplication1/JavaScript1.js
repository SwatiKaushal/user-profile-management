const url = 'https://api.tretton37.com/ninjas';
fetch(url)
.then(function (resp) { return resp.json() })
.then(function (data) {
    var i = 1; var k = 0;
    var parent = document.getElementById("profile");
    while (i < 4) {
        var j = k;
        var imageParent = document.createElement("div");
        imageParent.id = i;
        while (j < (i*4)) {
            var image = document.createElement("img");
            var textHolder = document.createElement("div");
            var container = document.createElement("div");
            container.class="container"
            image.id = j;
            image.style = "width:20%"
            image.className = "class";
            image.src = data[j].imagePortraitUrl;
            textHolder.className = "bottom-left";
            textHolder.innerHTML = data[j].name;
            container.appendChild(image);
            container.appendChild(textHolder);
            imageParent.appendChild(container);
            j++;
            k = j;
        }
        parent.appendChild(imageParent);
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