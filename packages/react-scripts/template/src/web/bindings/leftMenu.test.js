import React from 'react';
import { shallow, mount } from 'enzyme';
import LeftMenu from './leftMenu';

// Just an example test

test('navigates onPress', async () => {
  const mockNavigate = jest.fn();
  const navigation = {
    navigate: mockNavigate,
    state: { index: 0, routes: [{ routeName: 'One' }] },
  };

  const wrapper = mount(
    <LeftMenu navigation={navigation} isMenuSelected={() => false} />
  );
  const CounterMenuItem = wrapper.find({ title: 'Counter' }).first();
  CounterMenuItem.findWhere(n => n.prop('onPress'))
    .first()
    .prop('onPress')();

  expect(mockNavigate).toBeCalledWith('One');
});
