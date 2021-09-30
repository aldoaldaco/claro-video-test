import {configure, shallow} from 'enzyme';
import Description from '../components/Description';
import Typography from '@mui/material/Typography';
import Adapter from 'enzyme-adapter-react-16'
import {generatePrograms} from "../mock/mock";

configure({adapter: new Adapter()});
describe('App component testing', () => {
    it('renders modal when we click the button', async () => {
        const program = generatePrograms();
        const section = <Typography variant="body2" gutterBottom>Description not available</Typography>;
        const wrapper = shallow(<Description program={program}/>);
        wrapper.contains(section);
    });
});
