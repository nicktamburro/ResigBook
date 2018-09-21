function skulk(ninja){
    return performAction(ninja, "skulking");
}

var performAction = function (person, action){
        console.log(person + " - " + action);
    };

var rule = (daimyo) => performAction(daimyo, "ruling");

skulk("Hattori");
rule("Oda Nobunaga");


//Jasmine test
describe("skulk", function() {
  it("tells us that a given ninja is skulking", function() {
    expect(skulk("Hattori")).toBe("Hattori - skulking");
  });
});