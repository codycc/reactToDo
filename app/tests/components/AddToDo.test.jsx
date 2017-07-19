var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should call onAddToDo prop with valid data', () => {
    var toDoText = "Check Mail"
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDoText.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(toDoText);
  });

  it('should not call onAddToDo prop when invalid input', () => {
    var toDoText = ""
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDoText.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(toDoText);
  });

});
