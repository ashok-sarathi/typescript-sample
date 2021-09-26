var names = ["ashok", "sarathi", "haja", "sherif", "test", "demo"];
for (var i = 0; i < names.length; i++) {
    if (names[i] != "haja") {
        console.log(names[i]);
        continue;
    }
    
    console.log("without continue " + names[i]);
    break;
}
