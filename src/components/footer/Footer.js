import React from 'react'
import './_footer.scss'
import { FaLinkedinIn } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='bx'>
            <h5>Developers</h5>
            <div className='outer'>
                <div className='inner'>
                    <h5 className='nme'>Lokesh Sharma</h5>
                    <p className='eml'>lokesh.gla_cs20@gla.ac.in</p>
                    <div className='icon-div'>
                        <a href='https://www.linkedin.com/in/lokeshsharma1703/' className='link' target='_blank'><FaLinkedinIn className='icn' /></a>
                        <a href='https://github.com/Lokeshsharma1703' className='link' target='_blank'><GrGithub className='icn' /></a>
                    </div>
                </div>
                <div className='inner'>
                    <h5 className='nme'>Gauri Agrawal</h5>
                    <p className='eml'>gauri.agrawal_cs20@gla.ac.in</p>
                    <div className='icon-div'>
                        <a href='https://www.linkedin.com/in/gauri-a-553509221/' className='link' target='_blank'><FaLinkedinIn className='icn' /></a>
                        <a href='https://github.com/Gauri-Agrawal838' className='link' target='_blank'><GrGithub className='icn' /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
