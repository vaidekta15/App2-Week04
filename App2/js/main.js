// Your code here!
function myFunction() {
    var cat = new Date()
    undefined
    document.body.innerHTML = "<h1> The date is " + cat + "  </h1>  "
    document.body.innerHTML = "<h1> The date is " +
        (cat.getMonth() + 1) + " / " +
        cat.getDate() + " / " +
        cat.getFullYear() + " </h1> "
}