let myArray = [1, 2, 3, 4, 5, 6]
let myNumber = 0


test("that my name is Rayhan", () => {
    let name = "Rayhan"
    expect(name).toBe("Rayhan");
})


test("that myArray contains the value 3", () => {
    expect(myArray).toContain(3);
})

test("that myArray's length is 6", () => {
    expect(myArray.length).toBe(6)


})

test("that my number after incrementing is equal to 1", () => {
    myNumber++
    expect(myNumber).toBe(1);
    myNumber = 0;

})

test("that my number after incrementing is equal to 1", () => {
    myNumber--
    expect(myNumber).toBe(-1);
    myNumber = 0;

})