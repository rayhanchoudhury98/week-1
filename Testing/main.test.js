const main = require ("./main");



test("person's employee is deloitte", () => {

    expect(main.person.employer).toBe("Deloitte");
})