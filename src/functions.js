import React from 'react';

export const move = (xTar, yTar, xCur, yCur) => {
  // var xNew =
  return [easeOutQuint(xTar), easeOutQuint(yTar)];
}
// panCP-=(panCP-panDP)/1.7
export const ease = () => {

}

export const easeOutQuint = (pos: number) => {
  return 1 - Math.pow(1 - pos, 2);
}

// t = time
// b = beginning value
// c = change in value
// d = duration
export const easeOutQuart = (t, b, c, d) => {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
