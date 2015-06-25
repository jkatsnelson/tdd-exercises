describe("pigLatinService", function() {

  beforeEach(function() {
    module('app.dashboard');
    bard.inject('pigLatinService');
  });

  it('should have a list of vowels', function() {
    expect(!!pigLatinService.vowels).ok();
    expect(pigLatinService.vowels).to.equal('aeiou');
  });

  describe("startsWithConsonant", function() {
    it("should be a function", function() {
      expect(pigLatinService.startsWithConsonant).to.be.instanceOf(Function);
    });
    it("should return true if first argument starts with a consonant", function() {
      expect(pigLatinService.startsWithConsonant('butt')).ok();
    });
    it("should return false if first argument is a vowel", function() {
      expect(pigLatinService.startsWithConsonant('ass')).not.ok();
    });
  });

  describe("movesConsonantsToEnd", function() {
    beforeEach(function() {
      sinon.stub(pigLatinService, "startsWithConsonant", function(w) {
        return (w[0] === 'g' || w[0] === 'l');
      });
    });

    it("should move all consonants before the first vowel to the end", function() {
      expect(pigLatinService.movesConsonantsToEnd('gluteus')).to.equal('uteusgl');
    });
    it("should call startsWithConsonant three times", function() {

      pigLatinService.movesConsonantsToEnd('gluteus');

      expect(pigLatinService.startsWithConsonant.callCount).to.equal(3);
    });
  });
});