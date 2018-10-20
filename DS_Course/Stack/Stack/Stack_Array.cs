using System;

namespace Stack
{
    // LIFO collection implemented using an array
    public class Stack<T> : IEnumerable<T>
    {
        //Initialize wit a length of 0
        //will grow as needed
        T[] _items = new T[0];

        //The current number of items in the stack
        int _size;
    // Adds a specific item to the stack
    public void Push(T item)
    {
        // _size = 0 ... first push
        // _size == length ... growth boundary
        if ( _size == _items.Length )
        {
                //initial size of 4, otherwise double the current length
                int newLength = _size == 0 ? 4 : _size * 2;

                // allocate, copy and assign the new array 
                T[] newArray = new T[newLength];
                _items.CopyTo(newArray, 0);
                _items = newArray;
        }
            _items[_size] = item;
            _size++;
        }
        public T Pop()
        {
            if ( _size == 0 )
            {
                throw new InvalidOperationException("The stack is empty");
            }
            _size--;
            return _items[_size];

        }
        //Returns the top item from the stack without removing it from the stack
        public T Peek()
        {
            if ( _size == 0 )
            {
                throw new InvalidOperationException("Stack is empty");
            }
            return _items[_size - 1];
        }

        //The current number of the items in the stack
        public int Count
        {
            get
            {
                return _size;
            }
        }
        public void Clear()
        {
            _size = 0;
        }
    }
}
