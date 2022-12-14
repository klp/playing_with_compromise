const doc = nlp(boxSocialRepairText);
const adjectives = doc.adjectives().out('array');
const adverbs = doc.adverbs().out('array');
const nouns = doc.nouns().out('array');
const verbs = doc.verbs().out('array');

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
    return verb;
});

outputAdjectives.forEach(function(adjective) {
    $("#adjectives").append("  " + adjective + "  " + " ");
});

outputAdverbs.forEach(function(adverb) {
    $("#adverbs").append("  " + adverb + "  " + "  ");
});

outputNouns.forEach(function    (noun) {
    $("#nouns").append("  " + noun + "  " + " ");
});

outputVerbs.forEach(function(verb) {
    $("#verbs").append("  " + verb + "  " + " ");
});