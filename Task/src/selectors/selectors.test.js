import expect from 'expect';
import * as selectors from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in dropdown', () => {
      const authors = [
        {id: 'test1', firstName: 'fname1', lastName: 'lname1'},
        {id: 'test2', firstName: 'fname2', lastName: 'lname2'}
      ];

      const expected = [
        {value: 'test1', text: 'fname1 lname1'},
        {value: 'test2', text: 'fname2 lname2'}
      ];

      expect(selectors.authorsFormattedForDropdown(authors), expected);
    });
  });
});
