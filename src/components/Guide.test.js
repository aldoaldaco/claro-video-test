import {configure, shallow} from 'enzyme';
import {stub} from 'sinon';
import Guide from './Guide';
import Adapter from 'enzyme-adapter-react-16'
import Typography from "@mui/material/Typography";

configure({adapter: new Adapter()});
describe('App component testing', () => {

    it('renders modal when we click the button', async () => {
        const closeModal = stub();
        const program = {};
        const day = "20:00hs.20:30hs.21:00hs.21:30hs.22:00hs.22:30hs.23:00hs.23:30hs.00:00hs.00:30hs.01:00hs.01:30hs.02:00hs.02:00hs.03:00hs.03:30hs.04:00hs.04:30hs.05:00hs.05:30hs.06:00hs.06:30hs.07:00hs.07:30hs.";
        const night = "08:00hs.08:30hs.09:00hs.09:30hs.10:00hs.10:30hs.11:00hs.11:30hs.12:00hs.12:30hs.13:00hs.13:30hs.14:00hs.14:30hs.15:00hs.15:30hs.16:00hs.16:30hs.17:00hs.17:30hs.18:00hs.18:30hs.19:00hs.19:30hs.";
        const hours = day.concat(night).split('.');

        const section = <section id="inner" className="GuideContainerInner">
            <div id="header" className="TableHeader">
                <table id="headertable">
                    <thead>
                    <tr>
                        {hours.map((hour, hourindex) => <th className="HeaderCell" key={hourindex}>{hour}</th>)}
                    </tr>
                    </thead>
                </table>
            </div>
            <div id="body" className="TableBody">
                <table id="bodytable">
                    <tbody>
                    {['channel-1'].map((channel, channelkey) => {
                        return (
                            <tr key={channelkey} className="GuideProgramsBodyListItem">
                                {['program-1'].map((program, programkey) => {
                                    return (
                                        <td onMouseEnter={() => programFocus(program)} key={programkey} style={{width: '15px'}} className="BodyCell GuideProgramsBodyListItemProgram">
                                            <Typography variant="body2" gutterBottom component="span">
                                                {program.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom component="span">
                                                {program.schedule}
                                            </Typography>
                                        </td>
                                    )
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </section>;
        const wrapper = shallow(<Guide onProgramFocus={() => {}} channels={[{
            programs: []
        }]}/>);
    });
});
