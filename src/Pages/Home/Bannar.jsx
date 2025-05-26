import React from 'react';
import * as motion from "motion/react-client"
import { easeOut } from 'motion';
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, delay: 1, ease: easeOut, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm w-64 rounded-br-[30px] rounded-t-[30px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [50, 150, 50] }}
                        transition={{ duration: 10, delay: 1, ease: easeOut, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm w-64 rounded-br-[30px] rounded-t-[30px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 60 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity, }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#41EAE2', '#41ACEA', '#4155EA'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Jobs </motion.span>for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;