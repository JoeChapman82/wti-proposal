function selectRecordById(e){this.childNodes[3].childNodes[1].click()}function hideSidebar(){$(window).width()<600&&document.querySelectorAll("#sidebarToggle").forEach(function(e){e.click()})}document.querySelector(".wti-clickable-table")&&document.querySelectorAll("tr").forEach(function(e,c){e.addEventListener("click",selectRecordById)}),hideSidebar();