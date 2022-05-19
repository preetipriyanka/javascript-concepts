function matchRuleShort(str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    rule = rule.split("*").map(escapeRegex).join(".*");
    rule = "^" + rule + "$";
    var regex = new RegExp(rule);
    return regex.test(str);
}

console.log(matchRuleShort("bird123", "bird*"));
console.log(matchRuleShort("bird123", "b*d"));

//true
//false
