function start(){
  navMenu();
}
function showAlert(){
  alert("HelloWorld!")
}

function navMenu(){
  document.getElementById("navMenu").innerHTML =
  "<h1>"+
  "you are not alone."+
  "</h1>"+
  // "<h3 id="txt"></h3>"+
  "<h2 id=center>"+
  "youth hotline + help page."+
  "</h2>"+
  "<div class = \"navfloat\">"+
  "<a href = \"hotlineselfharm.html\"> self harm</a>"+
  "<a href = \"hotlinesuicide.html\"> suicide</a>"+
  "<a href = \"hotline.html\"> suicide hotlines </a>"+
  "<a href = \"hotlinetherapy.html\"> speak to someone </a>"+
  "<a href= \"hotlineteens.html\"> youth and teens </a>"+
  "<a href=\"hotlinelgbtq.html\"> lgbtq </a>"+
  "<a href=\"hotlinerunaway.html\"> running away </a>"+
  "<a href= \"hotlineabuse.html\"> dating\\domestic\\sexual abuse </a>"+
  "<a href= \"hotlineaddiction.html\"> substance abuse </a>"+
  // "<div class=\"search-container\">"+
  //    "<form action=\"/action_page.php\">"+
  //      "<input type = \"text\" style=\"width=4px\" placeholder= \"search...\" name=\"search\">"+
  //      "<button type=\"submit\"><i class=\"fa fa-search\"></i></button>"+
  //   "</form>"+
  //  "</div>"
   "</div>";
}
