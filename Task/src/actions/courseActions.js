import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return courseApi.getAllCourses()
        .then(courses => dispatch(loadCoursesSuccess(courses)))
        .catch(error => {
          dispatch(ajaxCallError());
          throw(error);
      });
    };
}

export function saveCourse(course){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(course => {
        course.id ?
          dispatch(updateCourseSuccess(course)) :
          dispatch(createCourseSuccess(course));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
