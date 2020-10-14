import React, { useState, useRef } from 'react';
import styles from './Accordion.css';
import Arrow from './Arrow';

function Accordion(props) {

  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive ==='active' ? 'accordion__icon' : 'accordion__icon rotate')
  }

  return (
    <div className='accordion__section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='accordion__title'>{props.title}</p>
        <Arrow className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{maxHeight: `${setHeight}`, backgroundColor: `${props.background}`}}className='accordion__content'>
        <div className='accordion__image'>
          <img className='accordion__image' src={props.image} />
        </div>
        <div className='accordion__text'
        dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  )
}

export default Accordion;