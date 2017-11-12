describe('Example Page', function() {

  beforeAll(function() {
    browser.get(browser.baseUrl);
  });

  it('should land on Example Screen', function () {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'example');
  });

});
