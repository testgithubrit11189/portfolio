//Handling tab sections in about me sections

function opentab(tabname,event) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        tabcontent.style.display = "none";
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    document.getElementById(tabname).style.display = "block";
}

window.onload = function() {
    document.getElementById("skills-set").style.display = "block";
    document.getElementById("experience").style.display = "none";
    document.getElementById("education").style.display = "none";
};

// Handling Sidebar Menu Open/Close
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    document.getElementById("sidemenu").style.right="0";
}

function closemenu() {
   document.getElementById("sidemenu").style.right="-200px";
}


// Handling Form Submission 
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    
   
    document.getElementById("myForm").reset();
});