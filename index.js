function theBeatlesPlay(musicians,instruments) {
  var output = []
  for(var i = 0;i<musicians.length;i++) {
      output.push(musicians[i] + " plays " + instruments[i])
  }
  return output
}


function johnLennonFacts(facts) {
  var output = []
  var i = 0
  while (i<facts.length) {
      output.push(facts[i] + "!!!")
      i++
  }
  return output
}
