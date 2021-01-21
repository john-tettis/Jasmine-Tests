
it('should calculate the monthly rate correctly', function () {
 expect(calculateMonthlyPayment({amount:1000, rate:5, years:20})).toBe('6.60');
 expect(calculateMonthlyPayment({amount:'text', rate:5, years:20})).toBe(false);
 expect(calculateMonthlyPayment({amount:1000, rate:5, years:'text'})).toBe(false);
 expect(calculateMonthlyPayment({amount:1000, rate:'text', years:20})).toEqual(false);
});


it("should return a result with 2 decimal places", function() {
  // ..
});

it('should return true for all numbers and false if any non-numbers', function(){
  expect(checkNumber({thisIs:'notAnumber', tbeans:53})).toEqual(false);
  expect(checkNumber({thisIs:53})).toBe(true);
})
