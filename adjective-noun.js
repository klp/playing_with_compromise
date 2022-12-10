const ypDoc = nlp(ypRepairText);
const storyHourDoc = nlp(storyHourRepairText);
const boxSocialDoc = nlp(boxSocialRepairText);

const ypArray = ypDoc.match('#Adjective #Noun').out('array');

console.log(ypArray);

const ypOutputPairs = ypArray.map(function(pair) {
    return pair;
});

ypOutputPairs.forEach(function(pair) {
    $("#yellow-wallpaper-list").append("<li>" + pair + "</li>");
    // break into columns
    if (ypOutputPairs.indexOf(pair) % 4 === 0) {
        $("yellow-wallpaper-list").append("<br>");
    }
});

console.log(ypArray.length);