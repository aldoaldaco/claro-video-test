import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';
import App from './App';
import Modal from './components/Modal';
import Program from './components/Program';
import Button from '@mui/material/Button';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('App component testing', () => {

  it('renders button to open modal', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper.find(Button).text()).to.be.equal('Open EPG');
  });

  it('renders modal when we click the button', async () => {
    const closeModal = stub();
    const wrapper = shallow(<App />); 
    const button = wrapper.find(Button);
    button.simulate('click');
    const modal = wrapper.find(Modal);
    expect(wrapper.contains(<Modal canClose onCloseModal={closeModal}><Program/></Modal>));
  });
});