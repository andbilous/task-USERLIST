import  { useState, useEffect } from 'react';

 const useTime = ()=> {
  const [time, setTime] = useState((new Date()).toLocaleTimeString().slice(0,8).split(":"));
  useEffect(() => {
     setTimeout(() => {
        setTime((new Date()).toLocaleTimeString().slice(0,8).split(":"));
      }, 250);
  });
  return time.join(':');
}

export default useTime;