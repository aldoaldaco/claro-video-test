import { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Description(props) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }), [prefersDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <section className="Description">
                    <Typography style={{color: "#90caf9"}} variant="h3" component="h3">{props.program.name ? props.program.name : "Event name"}</Typography>
                    <Typography variant="h6" component="h6">{props.program.schedule ? props.program.schedule : "00:00hs a 00:00hs"} {props.program.duration ? props.program.duration : "00h00min"}</Typography>
                    <br/>
                    <Typography variant="body2" gutterBottom>
                        {props.program.description ? props.program.description : "Description not available"}
                    </Typography>
                </section>
        </ThemeProvider>
    );

};