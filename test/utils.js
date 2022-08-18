import { mount as originalMount } from '@vue/test-utils';

export function mount(component, opts = {}) {
  return originalMount(component, {
    // i18n,
    // vuetify,
    // parentComponent: wrapper,
    ...opts,
  });
}