import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import tata from '../assets/image/home.webp'

export const Home = ({id}) => {
  return (
    <Box id={id} sx={{  
      backgroundColor: '#141821', 
      height: '100vh',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center'
      }}>
      <Container sx={{pt:9}}>
        <Grid container sx={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center'
        }}>
          <Grid item xs={12} md={6}>
              <Typography variant='h5' sx={{
                //fontSize:{sx:13,md:20},
                fontFamily: 'monospace',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
              Welcome to the Bitcoin Crash Smiles! 😃🚀
              </Typography>
              <Typography py={2} align='center'>
              Greetings Crypto Enthusiasts and Smilers alike!
              </Typography>
              <Typography>
              We're thrilled to have you join the Bitcoin Crash Smiles! community – the home of joyous resilience in the crypto world. Whether you're a seasoned trader, a meme connoisseur, or just someone who appreciates a good laugh amidst market fluctuations, you're in the right place!
              </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent:'center', mt:{xs:3,md:0}}}>
              <Box
              component={'img'}
              src={tata}
              alt='tata'
              width={{xs:'90%', md: 300}}
              />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}






/*import { Box, Typography } from '@mui/material'
import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




export const Home = () => {

    const particlesInit = useCallback(async engine => {      
        await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

  return (
    <Box sx={{
        "& #tsparticles":{
            width: '100%',
            height: '100vh'
        },
        position:'relative'
    }}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{ "fullScreen": false, "background":{ "image":" linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)" }, "particles":{ "number":{ "value":10, "density":{ "enable":true, "value_area":600 } }, "color":{ "value":"#ffffff" }, "shape": { "type": "square", "stroke":{ "width":0, "color":"#000000" }, "polygon":{ "nb_sides":5 } }, "opacity":{ "value":0.25, "random":true, "anim":{ "enable":false, "speed":1, "opacity_min":0.1, "sync":false } }, "size":{ "value":29, "random":true, "anim":{ "enable":false, "speed":2, "size_min":0.1, "sync":false } }, "line_linked":{ "enable":false, "distance":300, "color":"#ffffff", "opacity":0, "width":0 }, "move":{ "enable":true, "speed":0.5, "direction":"top", "straight":true, "out_mode":"out", "bounce":false, "attract":{ "enable":false, "rotateX":600, "rotateY":1200 } } }, "interactivity":{ "detect_on":"canvas", "events":{ "onhover":{ "enable":false, "mode":"repulse" }, "onclick":{ "enable":false, "mode":"push" }, "resize":true }, "modes":{ "grab":{ "distance":800, "line_linked":{ "opacity":1 } }, "bubble":{ "distance":790, "size":79, "duration":2, "opacity":0.8, "speed":3 }, "repulse":{ "distance":400, "duration":0.4 }, "push":{ "particles_nb":4 }, "remove":{ "particles_nb":2 } } }, "retina_detect":true}}
        />
        <Box 
            sx={{position:'absolute'}}>
            <Typography>Fenomh</Typography>
        </Box>


    </Box>
  )
}


import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Box } from "@mui/material";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Home = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Box width={50}>
 
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </Box>
    );
  }

  return <></>;
};*/