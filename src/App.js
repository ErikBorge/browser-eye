import { useState, useEffect } from 'react';

import useMousePosition from './useMousePosition';
import { easeOutQuart } from './functions';

import './app.scss';

const App = () => {

  const [currentPosition, setCurrentPosition] = useState({xCurrent: 0, yCurrent: 0});
  const [xCurr, setXCurr] = useState(0);

  const { xTarget, yTarget } = useMousePosition();

  const hasMovedCursor = typeof xTarget === "number" && typeof yTarget === "number";

  // if (Math.abs(xTarget - currentPosition.xCurrent) < 5){
  //
  // }
  // setCurrentPosition({xCurrent: easeOutQuart(0,currentPosition.xCurrent,xTarget-currentPosition.xCurrent, 1), yCurrent: easeOutQuart(0,currentPosition.yCurrent,yTarget-currentPosition.yCurrent, 1)})

  useEffect(() => {
    const eye = document.getElementById('eye');
    // console.log(eye);
    // console.log(xCurr);
    // console.log('xTarget: '+xTarget+' yTarget: '+yTarget);
    eye.style.left = `${xTarget}px`;
    eye.style.top = `${yTarget}px`;

  }, [xTarget, yTarget])
  // var xCurr = 0;


  // const calculateDistance = (targetX, targetY, currentX, currentY) => {
  //   var newX;
  //   var newY;
  //
  //   if (Math.abs(targetX-currentX)>5) {
  //     newX = currentX + (targetX - currentX)/2;
  //   }
  //   else {
  //     newX = targetX;
  //   }
  //   if (Math.abs(targetY-currentY)>10) {
  //     newY = currentY + (targetY - currentY)/2;
  //   }
  //   else {
  //     newY = targetY;
  //   }
  //   setCurrentPosition({xCurrent: newX, yCurrent: newY});
  // }

  // if (Math.abs(xTarget-xCurr)>5) {
  //   setXCurr(xCurr - (xCurr - xTarget)/2);
  // }
  // else {
  //   setXCurr(xTarget);
  // }

  const move = () => {
    //position += increment;
    time += 1 / fps;
    position = easeInOutQuad(time, start, finish, duration);
    // console.log(position);
    if (Math.abs(position-finish) < 1) {
        clearInterval(handler);
        setXCurr(Math.round(finish));
    }
    setXCurr(Math.round(position));

    // setXCurr(position);
    //     // document.getElementById('eye').style.left = `${xTarget}px`;
    //     return;
    // }
    // // console.log('hello');
    // // console.log(position);
    // setXCurr(position);

    // console.log(document.getElementById('eye').style);

  }

  const easeInOutQuad = (t, b, c, d) => {
      if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
      } else {
          return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
  }

  var fps = 10,
    duration = 5, // seconds
    start = 0, // pixel
    finish = 1000,
    distance = finish - start,
    increment = distance / (duration * fps),
    position = start,
    time = 0,
    handler = setInterval(move, 1000 / fps);

  // setCurrentPosition({
  //   xCurrent: calculateDistance(xTarget,currentPosition.xCurrent),
  //   yCurrent: calculateDistance(yTarget,currentPosition.yCurrent)
  // });
  // calculateDistance(xTarget, yTarget, currentPosition.xCurrent, currentPosition.yCurrent);

  // if(document.getElementById('eye')) {
  //   document.getElementById('eye').style.left = `${xCurr}px`;
  // }
  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `Target ${xTarget}, ${yTarget}.`
          : "Move your mouse around."}
          <br/>
        {hasMovedCursor
          ? `Current ${xCurr}`
          : "Move your mouse around."}
      </h1>
      <div className="App__eye" id="eye"/>
    </div>
  );
}

export default App;
