function getInclusiveRandomNum(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

function getCoordinate(usedCoordinates, min, max) {
  let coordinate;

  coordinate = getInclusiveRandomNum(min, max);
  while (usedCoordinates.includes(coordinate)) {
    if (coordinate == max) {
      coordinate = min;
    } else {
      coordinate++;
    }
  }
  usedCoordinates.push(coordinate);

  return [coordinate, usedCoordinates];
}

function Background() {
  //generate 2 random numbers for the coordinates of n particles
  //store them in a list of coordinate pairs
  //pass the pairs to the the div particle

  const totalParticles = 80;
  const minCoordinate = 0;
  const maxCoordinate = 80;

  let coordinatePairs = [];
  let usedXCoordinates = [];
  let usedYCoordinates = [];
  let xCoordinate, yCoordinate;
  let delay, duration, particleSize;

  while (coordinatePairs.length != totalParticles) {
    [xCoordinate, usedXCoordinates] = getCoordinate(
      usedXCoordinates,
      minCoordinate,
      maxCoordinate,
    );
    [yCoordinate, usedYCoordinates] = getCoordinate(
      usedYCoordinates,
      minCoordinate,
      maxCoordinate,
    );
    delay = getInclusiveRandomNum(0, 6);
    duration = getInclusiveRandomNum(2, 6);
    particleSize = getInclusiveRandomNum(4, 20);

    coordinatePairs.push([
      xCoordinate,
      yCoordinate,
      delay,
      duration,
      particleSize,
    ]);
  }

  return (
    <>
      <div className="swarm">
        {coordinatePairs.map((pairs, index) => (
          <div
            key={index}
            className="bee-box"
            style={{
              "--x": `${pairs[0]}%`,
              "--y": `${pairs[1]}%`,
              "--delay": `${pairs[2]}s`,
              "--duration": `${pairs[3]}s`,
              "--particleSize": `${pairs[4]}px`,
            }}
          >
            <div className="bee-spin">
              <div className="bee"></div>
            </div>
          </div>
        ))}
      </div>
      <img className="hexagon large-hexagon" />
      <img className="hexagon medium-hexagon" />
      <img className="hexagon small-hexagon" />
    </>
  );
}

export default Background;
