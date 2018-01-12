function theBeatlesPlay(musicians, instruments) {
  var empty = [ ];
  for (var i = 0; i < musicians.lenght; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}