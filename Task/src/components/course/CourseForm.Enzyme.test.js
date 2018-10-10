import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(testProps) {
  let props = {
    course: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  Object.assign(props, testProps);

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup({
      saving: false
    });
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup({
      saving: true
    });
    expect(wrapper.find('#submitButton').props().value).toBe('Saving...');
  });
});
