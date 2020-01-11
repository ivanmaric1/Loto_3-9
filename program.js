
var checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        console.log(this.id)
    } else {
        // Checkbox is not checked..
    }
});