// Write unit tests for the Home screen here

import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../src/screens/Home/Home';

describe('Home', () => {
    it('renders correctly', () => {
        const navigation = { navigate: jest.fn() };
        const { toJSON } = render(<Home navigation={navigation} />);
        expect(toJSON()).toMatchSnapshot();
    });
});