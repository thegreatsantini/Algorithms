using System;

namespace LinkedList
{
    //<summary>
    //A Node in the Linked List
    //</summary>
    //<typeparam name="T"</typeparram>
    public class LinkedListNode<T>
    {
        //Construsts a single node the with specified value
        public LinkedListNode(T value)
        {
            Value = value;
        }
        public T Value { get; set; }

        //The next node in the linked list (Nullable if last node)
        public LinkedListNode<T> Next { get; set; }
    }
}
