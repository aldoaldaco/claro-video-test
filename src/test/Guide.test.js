import {configure, shallow} from 'enzyme';
import {stub} from 'sinon';
import {expect} from 'chai';
import Guide from '../components/Guide';
import Adapter from 'enzyme-adapter-react-16'
import Typography from "@mui/material/Typography";
import {generateChannels} from "../mock/mock";

configure({adapter: new Adapter()});
describe('Guide component testing', () => {
    it('renders Guide', async () => {
        const channels = generateChannels();
        const onFocus = stub();
        const wrapper = shallow(<Guide onProgramFocus={onFocus} channels={channels}/>);
        const expected = <Typography variant="body2" gutterBottom component="span">1</Typography>;
        expect(wrapper.contains(expected)).to.be.equal(true);
    });
});
