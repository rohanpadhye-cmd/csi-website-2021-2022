import { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import logo from '../assets/csi_logo.png';
import loaderText1 from '../assets/loaderText1.svg';
import loaderText2 from '../assets/loaderText2.svg';

const Loader = () => {
    
    const [animation, cycleAnimation] = useCycle('bounceLogo', 'rotateLogo');
    useEffect(() => {
        setTimeout(() => {
            cycleAnimation();
        }, 1500)
    }, [])
    
    const logoVariants = {
        bounceLogo: {
            // x: ['-150vw', '3vw', '6vw', '9vw', '11vw', '13vw'],
            x: ['-150vw', '13vw', '21vw', '30vw', '32vw', '34vw'],
            // y: ['-250vh', '35vh', '10vh', '30vh', '15vh', '30vh'],
            y: ['-250vh', '40vh', '10vh', '35vh', '20vh', '25vh'],
            opacity: 1,
            transition: {
                duration: 1.5,
            }
        },
        rotateLogo: {
            x: ['34vw', '10vw'],
            y: ['25vh', '25vh'],
            opacity: 1,
            rotate: [0, 360],
            transition: {
                delay: 1.5,
                duration: 1
            }
        }
    }

    const loaderTextVariants = {
        hidden: {
            x: '15vw',
            y: '35vh',
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            scale: 1.1,
            pathLength: 1,
            transition: {
                delay: 4,
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    
    return (
        <>
            <div className="loaderBack">
                <motion.img
                    src={logo}
                    style={{ width: '20%', height: '20% strict' }}
                    alt="CSI-VESIT Logo"
                    variants={logoVariants}
                    animate={animation}
                />
                <motion.object
                    type="image/svg+xml"
                    data={loaderText1}
                    style={{ width: '40%' }}
                    variants={loaderTextVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Your browser does not support SVG
                </motion.object>
                <motion.object
                    type="image/svg+xml"
                    data={loaderText2}
                    style={{ width: '20%' }}
                    variants={loaderTextVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Your browser does not support SVG
                </motion.object>
                {/* <motion.div initial={{ x: '60vw' }} animate={{ opacity: [0, 1, 0], transition: {duration: 3} }}>
                    <span
                        className='loaderText'
                    >
                        CSI - VESIT
                    </span>
                    <br/>
                    <span
                        className='loaderText'
                    >
                        Presents...
                    </span>
                    <br/>
                </motion.div> */}
            </div>
        </>
    );
}

export default Loader;