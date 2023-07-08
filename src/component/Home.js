import React, { useRef, useContext, useEffect } from 'react'
import Slider from './Slider'
import Raw from './Raw'
import Description from './Description'
import Logistic from './Logistic'
import { ScrollContext } from '../context/ScrollContext';




export default function Home() {
  const { scroll } = useContext(ScrollContext)
  const containerRefs = useRef([]);


  useEffect(() => {
    const container = containerRefs.current[scroll];
    container.scrollIntoView({ behavior: 'smooth' });
    // console.log(container)
  }, [scroll]);


  return (
    <div>
      <div ref={(ref) => (containerRefs.current[0] = ref)}>
        <Slider />
      </div>
      <Description />
      <div ref={(ref) => (containerRefs.current[2] = ref)}>
        <Raw />
      </div>
      <div ref={(ref) => (containerRefs.current[3] = ref)}></div>
        <Logistic />
      
      <div ref={(ref) => (containerRefs.current[4] = ref)}> </div>
    </div >
  )
}
