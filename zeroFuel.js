const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let check = mpg * fuelLeft;
  if (check >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

zeroFuel(50, 25, 2);
