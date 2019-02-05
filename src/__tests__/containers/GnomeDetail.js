import * as React from 'react';
import { GnomeDetail } from '../../containers/GnomeDetail';
import { createShallow } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Results', () => {

  let props;
  beforeEach(() => {
    props = {
        item:{
            id: 2,
            name: 'Tobus Quickwhistle',
            thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
            age: 306,
            weight: 39.065952,
            height: 107.75835,
            hair_color: 'Pink',
            professions: ['Metalworker','Woodcarver','Stonecarver',' Tinker','Tailor','Potter'],
            friends: ['Cogwitz Chillwidget','Tinadette Chillbuster']
        },
        idShowDetail: 1       
    }    
  });

  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('Should not to display the detail modal window', () => {
    const wrapper = shallow(<GnomeDetail {...props}/>);
    expect(wrapper.find(".popup-contenedor").length).toBe(0);
  });
});