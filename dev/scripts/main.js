if(document.querySelector('.wti-clickable-table')) {
    document.querySelectorAll('tr').forEach(function(row, index) {
        row.addEventListener('click', selectRecordById);
    });
}
// Grab the href from the <a>nino</a> and navigate to it
function selectRecordById(e) {
    this.childNodes[3].childNodes[1].click();
}
