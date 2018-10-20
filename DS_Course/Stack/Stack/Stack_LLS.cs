using System;
using System.Collections.Generic;

namespace Stack.List
{
    // LIFO colleiton implemented with a LinkedList
    public class Stack<T> : System.Collections.Generic.IEnumerable<T>
    {
        private LinkedList<T> _list = new LinkedList<T>();

        // Adds the specific item to the stack
        public void Push(T item)
        {
            _list.AddFirst(item);
        }

        //Remove and return the top item from the stack
        public T Pop()
        {
            if ( _list.Count == 0 )
            {
                throw new InvalidOperationException("The stack is empty");
            }
            T value = _list.First.Value;
            _list.RemoveFirst();

            return value;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
