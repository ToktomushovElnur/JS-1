var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagCount = {}
for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    if (tagCount[tag]) {
        tagCount[tag]++
    } else {
        tagCount[tag] = 1
    }
}
var tagCountArray = Object.entries(tagCount)
tagCountArray.sort(function(a, b) {
    return b[1] - a[1]
})
var sortedTagCount = {}
tagCountArray.forEach(function(entry) {
    sortedTagCount[entry[0]] = entry[1]
})

console.log(sortedTagCount)