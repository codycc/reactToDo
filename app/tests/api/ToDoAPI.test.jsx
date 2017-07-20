var expect = require('expect');

var ToDoAPI = require('ToDoAPI');
describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  });
  it('should exist', () => {
    expect(ToDoAPI).toExist();
  })

  describe('setToDos', () => {
    it('should set valid todos array', () =>{
      var todos = [{
        id: 0,
        text: 'hello',
        completed: false
      }];
      ToDoAPI.setToDos(todos);

      var actualToDos = JSON.parse(localStorage.getItem('todos'));
      expect(actualToDos).toEqual(todos);
    })

    it('should not set invalid todos array', () =>{
      var badToDos = {a: 'b'};
      ToDoAPI.setToDos(badToDos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  })

  describe('getToDos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualToDos = ToDoAPI.getToDos();
      expect(actualToDos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      var todos = [{
        id: 0,
        text: 'hello',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual(todos);
    })
  })
})
