import React from 'react'
import './EventsStyle.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const EventsPage = () => {
  return (
    <>
     <Parallax pages={9} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="layerbckg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="layerfront"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="layermiddle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div class="animation_layer parallax" id="layermiddle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25} id="page2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab odio alias, animi voluptatum maxime adipisci illo beatae voluptas cumque blanditiis laborum consequatur nisi, accusamus deserunt similique eveniet ratione facilis!</p>
        </ParallaxLayer>
      </Parallax>
      </>
  )
}

export default EventsPage