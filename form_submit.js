window.onload = function(){

    var searchForm = document.getElementById("search");

    if(searchForm){
        searchForm.action="https://www.google.com/search"; //override default search action
        searchForm.addEventListener("submit", addSiteToSearch); //add a listener for the search button
    }
}



function addSiteToSearch(e) {

    	e.preventDefault();

        var s = document.getElementById("search");
        var sv = s.firstChild.value;
    	sv = "site:"+document.URL+" "+sv;

        var t=document.getElementsByName("t")[0];
        var tv=t.options[t.selectedIndex].value;

        if(tv!="all"){
            t.name=t.name+"bs";
        var tb=document.getElementsByName("tbs")[0];
        var tbv=tb.options[tb.selectedIndex].value;
        var tbv="qdr:"+tv.charAt(0);
            console.log(tbv);
        }

    	//s.submit();
    return false;
}
