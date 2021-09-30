import { configure, shallow } from 'enzyme';
import { stub } from 'sinon';
import { expect } from 'chai';
import Modal from '../components/Modal';
import Adapter from 'enzyme-adapter-react-16'
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
configure({ adapter: new Adapter() });
describe('Modal component testing', () => {

  it('renders Modal', async () => {
    const closeModal = stub();
    const program = {};
    const section = <section className="Modal" data-testid="modalGuide">
        <div className="ModalCloseButton">
            <Button onClick={closeModal} size="large" variant="text" data-testid="closeButton">
                <CloseIcon></CloseIcon>
            </Button>
        </div>
    </section>;
    const wrapper = shallow(<Modal canClose/>);
  });
  
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Modal>
        <div className="unique">Example</div>
      </Modal>
    ));
    expect(wrapper.contains(<div className="unique">Example</div>)).to.be.equal(true);
  });
});
