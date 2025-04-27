// Create a new <link> element for the CSS file
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/brite.css";  // Path to your custom CSS file

// Append the <link> element to the <head> section of the document
document.head.appendChild(link);
