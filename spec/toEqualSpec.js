describe("Comparador toEqual", function () {
    it("Deve validar o uso do toEqual", function () {
        var obj1 = { valor: true };
        var obj2 = { valor: true };


        expect(obj1).toEqual(obj2);

    });
});