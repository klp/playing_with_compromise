const ypDoc = nlp(ypRepairText);
const storyHourDoc = nlp(storyHourRepairText);
const boxSocialDoc = nlp(boxSocialRepairText);

const ypArray = ypDoc.match('#Adjective #Noun').out('array');
const storyHourArray = storyHourDoc.match('#Adjective #Noun').out('array');
const boxSocialArray = boxSocialDoc.match('#Adjective #Noun').out('array');

const ypOutputPairs = ypArray.map(function(pair) {
    return pair;
});

const storyHourOutputPairs = storyHourArray.map(function(pair) {
    return pair;
});

const boxSocialOutputPairs = boxSocialArray.map(function(pair) {
    return pair;
});

ypOutputPairs.forEach(function(pair) {
    $("#yellow-wallpaper-list").append("<li>" + pair + "</li>");
});

storyHourOutputPairs.forEach(function(pair) {
    $("#story-hour-list").append("<li>" + pair + "</li>");
});

boxSocialOutputPairs.forEach(function(pair) {
    $("#box-social-list").append("<li>" + pair + "</li>");
});


