import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ theme, key, data }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={key}
                className='singleProject'
                style={{ backgroundColor: theme.quaternary }}
            >
                <div className='projectContent'>
                    <h2
                        id={data.name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {data.name}
                    </h2>
                    {/* <img src={image ? image : placeholder} alt={data.name} /> */}
                    <div className='project--showcaseBtn'>
                        {/* {demo.map((d) => {
                            return <a
                            href={d}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${data.name
                                .replace(' ', '-')
                                .toLowerCase()} ${data.name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${data.name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                        })} */}
                        <Link to="temp">
                            Get More Info
                        </Link>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {data.description}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {/* {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))} */}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
