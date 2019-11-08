import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import Footer from './components/Footer';
import Ticket from './components/Ticket';

describe('<App />', () => {
  it('should render Ticket', () => {
    const wrapper = shallow(<App />)
    const ticket = wrapper.find(Ticket)
    expect(ticket.exists()).toBe(true)
  })

  it('should render Footer', () => {
    const wrapper = shallow(<App />)
    const footer = wrapper.find(Footer)
    expect(footer.exists()).toBe(true)
  })
})
