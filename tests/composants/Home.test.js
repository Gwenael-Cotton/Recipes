import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from 'src/components/Home';
import Card from 'src/components/Card';
import {
  initialState,
} from 'src/store/reducer';

describe('<Home />', () => {
  describe('Should return proper values', () => {
    // shallow est un peu l'équivalent de render (react-dom)
    // sauf qu'il ne fabrique pas un dom, mais un objets JS
    // qu contient tout ce qui a été fabriqué

    // it('Should return 5 cards', () => {
    //   const array = initialState.list;
    //   const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);

    //   expect(wrapper.find(Card)).to.have.lengthOf(2);
    // });
    it('Should return 5 cards', () => {
      const array = initialState.list;
      const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);

      expect(wrapper.find('.content-list')).to.have.lengthOf(2);
    });
    it('Should return 0 card', () => {
      const array = [];
      const wrapper = shallow(<Home recipes={array} appInit={() => {}} />);
      expect(wrapper.find(Card)).to.have.length(0);
    });
  });
});
