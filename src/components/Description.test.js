import {configure, shallow} from 'enzyme';
import {stub} from 'sinon';
import Description from './Description';
import Typography from '@mui/material/Typography';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
describe('App component testing', () => {

    it('renders modal when we click the button', async () => {
        const closeModal = stub();

        const program = {
            name: 'sample test',
            description: 'sample description',
            schedule: '00:00hs a 00:00hs',
            duration: '00h00min'
        };

        const section = <section className="Description">
            <Typography style={{color: "#90caf9"}} variant="h3" component="h3"></Typography>
            <Typography variant="h6" component="h6"></Typography>
            <br/>
            <Typography variant="body2" gutterBottom>

            </Typography>
        </section>;
        const wrapper = shallow(<Description program={program}/>);
    });
});
