import expect from 'expect';
import * as actions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'id', title: 'title'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = actions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Acync actions', () => {
  afterEach(() =>{
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) =>{
    //nock can be used to mock http request

    const store = mockStore({courses: []});
    store.dispatch(actions.loadCourses())
      .then(() =>{
        const storeActions = store.getActions();
        expect(storeActions.length).toEqual(2);
        expect(storeActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(storeActions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
  });
});
