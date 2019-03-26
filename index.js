const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

//function theBeatlesPlay(musicians,instruments) { return musicians[0] + "plays the " + instruments[0]}

function theBeatlesPlay(musicians,instruments) {
  var output = []
  for(var i = 0;i<musicians.length;i++) {
      output.push(musicians[i] + " plays " + instruments[i])
  }
  return output
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
]

function johnLennonFacts() {
  var output = []
  for(var i = 0;i<facts.length;i++) {
      output.push(facts[i] + "!!!")
  }
  return output
}