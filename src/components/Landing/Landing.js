import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import './Landing.css';

import headshot from '../../../src/assets/png/headshot-2025-v1.png';

import {
    FaGithub, FaLinkedin, FaInstagram
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.buttonColor,
                color: theme.secondary,
                border: `3px solid ${theme.buttonColor}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.buttonColor,
                color: theme.secondary,
                border: `3px solid ${theme.buttonColor}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social linkedin-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {/* {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social twitter-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )} */}
                        
                    </div>
                </div>
                <img
                    src={headshot}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Computer Graphics Researcher',
                                'Student Web Programmer',
                                '3D Artificial Intelligence Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary }}
                            loop
                        />
                        <p>
                            Hi, I'm Amy, welcome to my personal portfolio. My hometown is <strong>Portland, Oregon</strong>, and I'm currently an undergrad at the University of Pennsylvania pursuing a BSE in <strong>Digital Media Design</strong> (3D computer programming).
                        </p>

                        <p className='lcr--quote'>
                            <em>
                                "The student keeps her eyes on the sky but her feet steady on the ground. She builds a staircase of books, all the way to the stars."
                            </em>
                        </p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        View CV
                                    </Button>
                                </a>
                            )}
                            {/* <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
