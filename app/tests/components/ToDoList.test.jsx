var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Check mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

    expect(todosComponents.length).toBe(todos.length);

  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1)

  });
});
