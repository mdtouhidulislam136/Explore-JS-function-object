var favoriteBook = "learning JavaScript";
var bookList = ["positioning", "Hooked" , "start with why", "shoe dog", "robin"]

//var position= bookList.indexOf("shoe dog")
// change element from the array

//bookList[2] = "story brand"

//var addElementToArray = bookList.push("Bangali book")
//var removeElementFromArray = bookList.pop()
//console.log(bookList)
//console.log(addElementToArray)
//console.log(bookList)


var addElementFromArrayFront = bookList.unshift("Bangali")

console.log(bookList)

// condition

if(bookList[4] == "shoe dog") {

    console.log(bookList)


}

else{
    console.log("not available")
}


while (bookList < bookList.length) {
    console.log(bookList)
    bookList++
}

