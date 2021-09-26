var names = ["ashok", "sarathi", "haja", "sherif", "test", "demo"];
for (let i = 0; i < names.length; i++) {

    if (names[i] != "haja") {
        console.log(names[i]);
        continue;
    }

    console.log(names[i]);
}