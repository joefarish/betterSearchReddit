window.onload = function(){
//Override search location
var searchForm = document.getElementById("search");

if(searchForm){

//override the default action
searchForm.action="https://www.google.com/search";

if (searchForm.attachEvent) {
    searchForm.attachEvent("submit", addSiteToSearch);
} else {
    searchForm.addEventListener("submit", addSiteToSearch);
}

}

function addSiteToSearch(e) {
    if (e.preventDefault) {

    	//prevent Default form submission...
    	e.preventDefault();


    	var searchBox = document.getElementById("search").firstChild;

    	//Inject the correct site:reddit.com/r/ etc by adding document.URL
    	searchBox.value = "site:"+document.URL+" "+searchBox.value;

    	searchForm.submit();
	}
    return false;
}

}
