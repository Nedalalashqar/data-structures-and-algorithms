'use strict';

const duckDuckGoose = require('../duck-duck-goose');

describe ('DuckDuckGoose', () => {
  it ('message enter empty list', () => {
    expect(duckDuckGoose([],4)).toEqual ('Unexpected Without Values');
  });
  it ('last person string in the list correct', () => {

    expect(duckDuckGoose(['S','A','R','M','O','T'],3)).toEqual ('last Person : S ');
  });

});
