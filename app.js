const doc = nlp(text);
const verbs = doc.verbs().out('array');
console.log(verbs);

const outputVerbs = verbs.map(function(verb){
    return verb;
});

outputVerbs.forEach(function(verb) {
    $("#verbs").append(verb + " ");
});