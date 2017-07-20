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

  describe('filterToDos', () =>  {
    var todos = [{
      id: 1,
      text: 'text here',
      completed: true
    },
    {
      id: 2,
      text: ' Other Some text here',
      completed: false
    },
    {
      id: 3,
      text: 'Some text here third',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
      expect(filteredToDos.length).toBe(3);
    });

    it('should return only non completed items if showCompleted is false', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, false, '');
      expect(filteredToDos.length).toBe(1)
    });

    it('should sort by completed status', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
      expect(filteredToDos[0].completed).toBe(false)
    });

    it('should filter todos by searchText', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, 'some');
      expect(filteredToDos.length).toBe(2)
    });

    it('should return all todos if searchText is empty', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
      expect(filteredToDos.length).toBe(3)
    });
  })
});
