import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';
import Program from './Program';
import Description from './Description';
import Guide from './Guide';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('App component testing', () => {

  it('renders modal when we click the button', async () => {
    const closeModal = stub();
    const program = {};
    const section = <section className="Program">
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
    const wrapper = shallow(<Program />); 
  });
});