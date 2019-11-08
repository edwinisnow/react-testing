import React from 'react'
import { shallow } from 'enzyme'
import Ticket from './Ticket';

describe('<Ticket />', () => {
    it('should increment total when clicking add', () => {
        const wrapper = shallow(<Ticket />)
        const initialCount = wrapper.find('h2.total').text()
        expect(initialCount).toBe('0')

        const button = wrapper.find('button')
        button.simulate('click')

        const count1 = wrapper.find('h2.total').text()
        expect(count1).toBe('1')
    })

    it('should render ticket name in title', () => {
        const wrapper = shallow(<Ticket name="NHL Ticket" />)
        const title = wrapper.find('h2.title').text()
        expect(title).toBe('NHL Ticket')
    })
})