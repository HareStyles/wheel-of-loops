function spin(wheelID, start, displayModal, zones, size) {
  const wheel = wheelID;
  const startButton = start;
  const display = displayModal;

  let deg = 0;

  let zoneSize = size; //deg to

  const spinnerZones = zones;

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = spinnerZones[winningSymbolNr];
  };

  startButton.addEventListener("click", () => {
    //Reset display
    display.innerHTML = "";
    // Disable button during spin
    startButton.style.pointerEvents = "none";
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(2000 + Math.random() * 2000);
    // Set the transition on the wheel
    wheel.style.transition = "all 5s ease-out";
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add("blur");
    // Hide Modal
    display.classList.remove("visible");
  });

  wheel.addEventListener("transitionend", () => {
    // Remove blur
    wheel.classList.remove("blur");
    // Enable button when spin is over
    startButton.style.pointerEvents = "auto";
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display Winning spinnerZones
    handleWin(actualDeg);
    // Show Modal
    display.classList.add("visible");
    //Rewrite Button Font
    startButton.innerHTML = "Respin";
  });
}

const key = document.getElementById("key");
const keyButton = document.getElementById("keystart");
const keyDisplay = document.querySelector(".key-display");
const tempo = document.getElementById("tempo");
const tempoButton = document.getElementById("tempostart");
const tempoDisplay = document.querySelector(".tempo-display");
const chord = document.getElementById("chord");
const chordButton = document.getElementById("chordstart");
const chordDisplay = document.querySelector(".chord-display");

const keyZones = {
  1: "<h2>Key - C</h2><h3>C - D - E - F - G - A - B</h3>",
  2: "<h2>Key - F</h2><h3> F - G - A - B♭ - C - D - E</h3>",
  3: "<h2>Key - B♭</h2><h3>B♭ - C - D - E♭ - F - G - A</h3>",
  4: "<h2>Key - E♭</h2><h3>E♭ - F - G - A♭ - B♭ - C - D</h3>",
  5: "<h2>Key - A♭</h2><h3>A♭ - B♭ - C - D♭ - E♭ - F - G</h3>",
  6: "<h2>Key - D♭</h2><h3>D♭ - E♭ - F - G♭ - A♭ - B♭ - C</h3>",
  7: "<h2>Key - G♭</h2><h3>G♭ - A♭ - B♭ - C♭ - D♭ - E♭ - F</h3>",
  8: "<h2>Key - B</h2><h3>B - C# - D# - E - F# - G# - A</h3>",
  9: "<h2>Key - E</h2><h3>E - F# - G# - A - B - C# - D#</h3>",
  10: "<h2>Key - A</h2><h3> A - B - C# - D - E - F# - G#</h3>",
  11: "<h2>Key - D</h2><h3>D - E - F# - G - A - B - C#</h3>",
  12: "<h2>Key - G</h2><h3>G - A - B - C - D - E - F#</h3>",
};

const tempoZones = {
  1: "<h2>Tempo</h2><h3>60-70 BPM</h3>",
  2: "<h2>Tempo</h2><h3>50-60 BPM</h3>",
  3: "<h2>Tempo</h2><h3>40-50 BPM</h3>",
  4: "<h2>Tempo</h2><h3>170-180 BPM</h3>",
  5: "<h2>Tempo</h2><h3>150-160 BPM</h3>",
  6: "<h2>Tempo</h2><h3>140-150 BPM</h3>",
  7: "<h2>Tempo</h2><h3>130-140 BPM</h3>",
  8: "<h2>Tempo</h2><h3>120-130 BPM</h3>",
  9: "<h2>Tempo</h2><h3>110-120 BPM</h3>",
  10: "<h2>Tempo</h2><h3>100-110 BPM</h3>",
  11: "<h2>Tempo</h2><h3>90-100 BPM</h3>",
  12: "<h2>Tempo</h2><h3>80-90 BPM</h3>",
};

const chordZones = {
  1: "<h2>Chord Progression</h2><h3>I - VI - IV - V</h3>",
  2: "<h2>Chord Progression</h2><h3>VI - IV - I - V</h3>",
  3: "<h2>Chord Progression</h2><h3>I - V - IV - III</h3>",
  4: "<h2>Chord Progression</h2><h3>II - V - I</h3>",
  5: "<h2>Chord Progression</h2><h3>I - V - VI - IV</h3>",
  6: "<h2>Chord Progression</h2><h3>I - IV - V</h3>",
  7: "<h2>Chord Progression</h2><h3>IV - I - V - VI</h3>",
  8: "<h2>Chord Progression</h2><h3>VI - V - IV - V</h3>",
  9: "<h2>Chord Progression</h2><h3>I - IV - VI - V</h3>",
  10: "<h2>Chord Progression</h2><h3>I - VI - II - V</h3>",
  11: "<h2>Chord Progression</h2><h3>I - VI - I - V</h3>",
  12: "<h2>Chord Progression</h2><h3>I - V - IV - V</h3>",
};

spin(key, keyButton, keyDisplay, keyZones, 30);
spin(tempo, tempoButton, tempoDisplay, tempoZones, 30);
spin(chord, chordButton, chordDisplay, chordZones, 30);
