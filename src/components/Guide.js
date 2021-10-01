import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Guide(props) {

    const [active, setActive] = useState(false);
    
    const setTableBody = () => {
        const header = document.getElementById("header");
        const body = document.getElementById("body");
        const inner = document.getElementById("inner");
        const heightHeader = window.getComputedStyle(header).height.split('px')[0];
        const heightInner = window.getComputedStyle(inner).height.split('px')[0];
        body.style.height = `${Number(heightInner) - Number(heightHeader)}px`;
    };

    const handleScroll = () => {
        const channelList = document.getElementById('channelList');
        const header = document.getElementById("header");
        const body = document.getElementById("body");
        const left = (-1) * body.scrollLeft;
        const top = (-1) * body.scrollTop;
        header.style.left = `${left}px`;
        channelList.style.top = `${top}px`;
    };

    useEffect(() => {
        setTableBody();
        const body = document.getElementById('body');
        body.addEventListener("scroll", handleScroll);
        return () => {
            setActive(false);
        };
    }, []);

    const day = "20:00hs.20:30hs.21:00hs.21:30hs.22:00hs.22:30hs.23:00hs.23:30hs.00:00hs.00:30hs.01:00hs.01:30hs.02:00hs.02:00hs.03:00hs.03:30hs.04:00hs.04:30hs.05:00hs.05:30hs.06:00hs.06:30hs.07:00hs.07:30hs.";
    const night = "08:00hs.08:30hs.09:00hs.09:30hs.10:00hs.10:30hs.11:00hs.11:30hs.12:00hs.12:30hs.13:00hs.13:30hs.14:00hs.14:30hs.15:00hs.15:30hs.16:00hs.16:30hs.17:00hs.17:30hs.18:00hs.18:30hs.19:00hs.19:30hs.";
    const hours = day.concat(night).split('.');

    const elementWidth = (program) => {
        const time = program.duration.split('h');
        const hours = Number(time[0]);
        const minutes = Number(time[1].replace('min', '')) / 60;
        const hora = hours+minutes;
        return `${hora * 200}px`;
    };

    const programFocus = (program) => {
        setActive(!active);
        props.onProgramFocus(program);
    };

    const matches = useMediaQuery('(max-width: 1200px)');

    return (
        <section className="Guide">
            <aside className="GuideChannels" style={{bottom: `${matches ? 100 : 40}px`, right: `${matches ? 12 : 60.5}rem`}}>
                <ul id="channelList" className="GuideChannelsList">
                    {props.channels.map((channel, channelindex) => {
                        return (<li key={channelindex} className="GuideChannelsListItem">
                            <Typography variant="body2" gutterBottom component="span">
                                {channel.number}
                            </Typography>
                            <img className="GuideChannelsListItemImage"
                                src={`${channel.picture}`}
                                alt={channel.name}
                                loading="lazy"
                            />
                        </li>);
                    })}
                </ul>
            </aside>
            <main className="GuideContainer">
                <section id="inner" className="GuideContainerInner">
                    <div id="header" className="TableHeader">
                        <table id="headertable">
                            <thead>
                                <tr>
                                    {hours.map((hour, hourindex) => <th className="HeaderCell" key={hourindex}>{hour}</th>)}  
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="body" className="TableBody">
                        <table id="bodytable">
                            <tbody>
                                {props.channels.map((channel, channelkey) => {
                                    return (
                                        <tr key={channelkey} className="GuideProgramsBodyListItem">
                                            {channel.programs.map((program, programkey) => {
                                                return (
                                                    <td onMouseEnter={() => programFocus(program)} key={programkey} style={{width: elementWidth(program)}} className="BodyCell GuideProgramsBodyListItemProgram">
                                                        <Typography variant="body2" gutterBottom component="span">
                                                            {program.name}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom component="span">
                                                            {program.schedule}
                                                        </Typography>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </section>
    );

};