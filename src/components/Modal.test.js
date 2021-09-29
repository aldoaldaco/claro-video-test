import { configure, shallow } from 'enzyme';
import { stub } from 'sinon';
import Modal from './Modal';
import Adapter from 'enzyme-adapter-react-16'
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
configure({ adapter: new Adapter() });
describe('App component testing', () => {

  it('renders modal when we click the button', async () => {
    const closeModal = stub();
    const program = {};
    const section = <section className="Modal" data-testid="modalGuide">
        <div className="ModalCloseButton">
            <Button onClick={closeModal} size="large" variant="text" data-testid="closeButton">
                <CloseIcon></CloseIcon>
            </Button>
        </div>
    </section>;
    const wrapper = shallow(<Modal />);
  });
});
