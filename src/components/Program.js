import { useState, useCallback, useMemo, useEffect } from "react";
import Description from './Description';
import Guide from './Guide';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

export default function Program() {

    const [channels, setChannels] = useState([]);
    const [program, setProgram] = useState({});
    const [showSpinner, setShowSpinner] = useState(true);
    const getData = useCallback(() => {
        axios({
            method: 'get',
            url: 'https://mfwkweb-api.clarovideo.net/services/epg/channel',
            params: {
                device_id: 'web',
                device_category: 'web',
                device_model: 'web',
                device_type: 'web',
                device_so: 'Chrome',
                format: 'json',
                device_manufacturer: 'generic',
                authpn: 'webclient',
                authpt: 'tfg1h3j4k6fd7',
                api_version: 'v5.93',
                region: 'mexico',
                HKS: 'web61144bb49d549',
                user_id: 54343080,
                date_from: 20210812200256,
                date_to: 20210813200256,
                quantity: 200
            }
        }).then(response => {
            proccessResponse(response);
        }).catch(error => {
            manageErrors(error);
            setShowSpinner(false);
        });
    });

    const proccessResponse = useCallback((response) => {
        if (response && response.data && response.data.response) {
            const data = response.data.response;
            const chs = data.channels.reduce((acumulador, channel) => {
                acumulador.push({
                    name: channel.name,
                    number: channel.number,
                    picture: channel.image,
                    programs: channel.events.reduce((acumulador, event) => {
                        const start = new Date(event.date_begin);
                        const end = new Date(event.date_end);
                        const diffMs = (end - start); // milliseconds between end & start
                        const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
                        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                        const duration = event.duration ? event.duration : `${diffHrs}:${diffMins}`;
                        const description = event.description ? event.description : 'Description not available';
                        const name = event.name && event.name !== 'NA' ? event.name : 'Name not available';
                        acumulador.push({
                            start: start,
                            end: end,
                            duration: `${duration.split(':')[0]}h${duration.split(':')[1]}min`,
                            description: description,
                            name: name,
                            schedule: `${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`
                        });
                        return acumulador;
                    }, [])
                });
                return acumulador;
            }, []);
            setChannels(chs);
            setShowSpinner(false);
        } else {
            const error = new Error('Error getting data');
            manageErrors(error);
            setShowSpinner(false);
        }
    });

    const manageErrors = (error) => {
        if (error) {
            alert(error);
        }
    };

    useEffect(() => {
        getData();
        return () => {
            setChannels([]);
            setProgram({});
        };
    }, []);

    const onProgramFocus = (program) => {
        const newprogram = {
            name: program.name,
            start: program.start.getTime(),
            end: program.end.getTime(),
            duration: program.duration,
            schedule: program.schedule.replace('-', 'a'),
            description: program.description
        };
        setProgram(newprogram);
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }), [prefersDarkMode]);


    const content = <section className="Program">
        <Description program={program}/>
        <Guide onProgramFocus={onProgramFocus} channels={channels}/>
    </section>;

    const spinner = <section className="Spinner">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
                <br/>
                <Typography style={{color: '#90caf9'}} variant="h6" component="span">Loading ...</Typography>
            </Box>
    </section>;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            { showSpinner ? spinner : content }
        </ThemeProvider>
    );

}