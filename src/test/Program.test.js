import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Program from "../components/Program";
import Adapter from "enzyme-adapter-react-16";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

configure({ adapter: new Adapter() });
describe('Program component testing', () => {

  it('renders Spinner inside Program', async () => {
    const wrapper = shallow(<Program />);
    
    const spinner = <section className="Spinner">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
          <br/>
          <Typography style={{color: '#90caf9'}} variant="h6" component="span">Loading ...</Typography>
      </Box>
    </section>;
    expect(wrapper.contains(spinner)).to.be.equal(true);
  });
});
