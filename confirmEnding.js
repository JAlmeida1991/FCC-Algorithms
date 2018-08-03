// USING SLICE ON STRING IN ORDER TO MATCH SAME LENGTH AS TARGET
// SINCE COMPARING ENDING, MUST START AT ORIGINAL STR LENGTH

function confirmEnding(str, target) {
return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
