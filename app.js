const doc = nlp(text);
const adjectives = doc.adjectives().out('array');
const adverbs = doc.adverbs().out('array');
const nouns = doc.nouns().out('array');
const verbs = doc.verbs().out('array');
// console.log(verbs);

const outputAdjectives = adjectives.map(function(adjective){
    return adjective;
});

const outputAdverbs = adverbs.map(function(adverb){
    return adverb;
});

const outputNouns = nouns.map(function(noun){
    return noun;
});

const outputVerbs = verbs.map(function(verb){
    // TODO: strip out periods, commas, quotation marks 
    return verb;
});

outputAdjectives.forEach(function(adjective) {
    $("#adjectives").append(adjective + " ");
});

outputAdverbs.forEach(function(adverb) {
    $("#adverbs").append(adverb + " ");
});

outputNouns.forEach(function(noun) {
    $("#nouns").append(noun + " ");
});

outputVerbs.forEach(function(verb) {
    $("#verbs").append(verb + " ");
});