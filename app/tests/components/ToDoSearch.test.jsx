var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
  it('should exist',() => {
    expect(ToDoSearch).toExist();
  });
  it('should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    toDoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, 'Dog');

  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '')
  });
})
