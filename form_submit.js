window.onload = function(){

    //add a listener for the search button
    if(searchForm = document.getElementById("search")) searchForm.addEventListener("submit", addSiteToSearch);
}

function addSiteToSearch(e) {

    	e.preventDefault();

        var searchForm = document.getElementById("search");
        var searchValue = searchForm.firstChild.value;
    	
        var modifiers = ["author:", "site:", "url:", "selftext:","self:","nsfw:"];

        var overrideSearch=true;

        for (var i in modifiers) {
            if (searchValue.includes(modifiers[i])) doOverrideSearch=false; // if a search modifier is used, don't override the search action
        }

        if (overrideSearch) {

            searchForm.action="https://www.google.com/search"; // Use Google search!

            var site = document.getElementsByName("restrict_sr")[0].checked? document.URL:"www.reddit.com/" //Handles the restrict search to subreddit checkbox

            searchForm.firstChild.value = "site:"+site+" "+searchForm.firstChild.value;

            console.log(searchForm.firstChild.value);

            var timeSelect=document.getElementsByName("t")[0];
            timeSelect.setAttribute("name","tbs"); //Google search uses tbs for time based searcges

            timeSelect = document.getElementsByName("tbs")[0];

            // the first charcter of the options on the Time: select box = the character google needs to restrict search to a time range
            timeSelect.options[timeSelect.selectedIndex].value="qdr:"+timeSelect.options[timeSelect.selectedIndex].value.charAt(0); 
        }
    	searchForm.submit();
    return false;
}