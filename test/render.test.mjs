import HelloWorld from '../src/components/HelloWorld.vue';
import { mount } from './utils';

describe('Rendering with happy-dom', () => {
  test('vanilla', () => {
    const el = document.createElement('a');
    el.textContent = 'Click me';
    expect(el).toBeTruthy();
  });
  test('vue', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.find('h1').text()).toBe('Hi, Test!')
  })
})