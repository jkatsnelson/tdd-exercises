(function() {
  'use strict';

  angular
      .module('app.dashboard')
      .service('pigLatinService', pigLatinService);

  function pigLatinService() {
    this.vowels = 'aeiou';
    this.startsWithConsonant = function(word) {
      return this.vowels.indexOf(word[0]) === -1;
    };
    this.movesConsonantsToEnd = function(word) {
      while (this.startsWithConsonant(word)) {
        var splitWord = word.split('');
        var firstLetter = splitWord.shift();
        splitWord.push(firstLetter);
        word = splitWord.join('');
      }
      return word;
    };
  }
})();