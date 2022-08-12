const fn = jest.fn().mockResolvedValue([1]);
describe('async errors should be caught by extension', () => {
  test('I should fail', () => {
    expect.assertions(2);
    expect(fn()).resolves.toContain(1);
    expect(fn()).resolves.toContain(2);
  })
})