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
    	

        var ignore = ["author:", "site:", "url:", "selftext:","self:","nsfw:"];


        var overrideSearch=true;

        for (var i in ignore) {
            
            if (sv.includes(ignore[i])) {
                doOverrideSearch=false;
            }
        }

        if (overrideSearch) {



            // Handle restrict search to subreddit

            var r=document.getElementsByName("restrict_sr")[0];
            var site=document.URL
            if (r) { 
                if (r.checked) {
                    
                } else {site="www.reddit.com/"}
            }





            sv = "site:"+site+" "+sv;

            console.log(sv);

            var t=document.getElementsByName("t")[0];
            var tv=t.options[t.selectedIndex].value;

            if(tv!="all"){
                t.name=t.name+"bs";
            var tb=document.getElementsByName("tbs")[0];
            var tbv=tb.options[tb.selectedIndex].value;
            var tbv="qdr:"+tv.charAt(0);
            }

        }
    	//s.submit();
    return false;
}