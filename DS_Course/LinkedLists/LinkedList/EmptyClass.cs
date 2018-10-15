using System;
namespace LinkedList
{
    //A linked list collection capable of basic operations as 
    //Add , Removem Find and Enumerate
    public class LinkedList<T>
    {
        //first node in the list or null if empty
        public LinkedListNode<T> Head
        {
            get;
            private set;
        }

        //Last node in the list or null if empty
        public LinkedListNode<T> Tail
        {
            get;
            private set;
        }

        #region Add
        //Adds a specified value to the start of the linked list
        public void AddFirst(T value)
        {
            AddFirst(new LinkedListNode<T>(value));
        }

        public void AddFirst(LinkedListNode<T> node)
        {
            //Save off the head node so we dont lose it
            LinkedListNode<T> temp = Head;

            //Insert the rest of the list behind the head
            Head.Next = temp;

            Count++;

            if (Count == 1)
            {
                //if the list was empty than Head and Tail should point to the new node
                Tail = Head;
            }
        }
        //Add the value to the end of the list
        public void AddLast(T value)
        {
            AddLast(new LinkedListNode<T>(value));
        }
        //Add node to the end of the List
        public void AddLast(LinkedListNode<T> node)
        {

            if (Count == 0)
            {
                Head = node;
            }
            else
            {
                Tail.Next = node;
            }
            Tail = node;

            Count++;
        }
        #endregion

        #region Remove

        //Removes first node from the list
        public void RemoveFirst()
        {

            if (Count != 0)
            {
                Head = Head.Next;
                Count--;

                if (Count == 0)
                {
                    Tail = null;
                }
            }
        }

        //Removes the last node from the list
        public void RemoveLast()
        {
            if (Count != 0)
            {
                if (Count == 1)
                {
                    Head = null;
                    Tail = null;
                }
            }
        }

        //NotFiniteNumberException of item currently in the list
        public int Count
        {
            get;
            private set;
        }
        //Adds the specific specific value to the front of the list
        public void Add(T item)
        {
            AddFirst(item);
        }
        //Returns true if the list contains a speficied item or false otherwise
        public bool Contains(T item)
        {
            LinkedListNode<T> current = Head;
            while (current != null)
            {
                if (current.Value.Equals(item))
                {
                    return true;
                }
                current = current.Next;
            }
            return false;
        }
        //Copies the node value into the specified array
        public void CopyTo(T[] array, int arrayIndex)
        {
            LinkedListNode<T> current = Head;
            while (current != null)
            {
                array[arrayIndex++] = current.Value;
                current = current.Next;
            }
        }
        //True is ReadOnlySpan false if otherwise
        public bool IsReadOnly
        {
            get
            {
                return false;
            }
        }
        //Removes the first occurance of the items on the list (searching from Head to Tail).
        public bool Remove(T item)
        {
            LinkedListNode<T> previous = null;
            LinkedListNode<T> current = Head;

            //Cases
            //1) Empty list - do nothing
            //2) Single node - (previous is null)
            //3) Many nodes
            //a: node to reomve is the first node
            //b: node to remove is the middle or last
            while (current != null)
            {
                if (current.Value.Equals(item))
                {
                    //its a node in the middle or end
                    if (previous != null)
                    {
                        //Case 3b
                        previous.Next = current.Next;

                        //it was the end - update the Tail
                        if (current.Next == null)
                        {
                            Tail = previous;
                        }
                        Count--;
                    }
                    else
                    {
                        // Case 2 or 3A
                        RemoveFirst();
                    }
                    return true;
                }
                previous = current;
                current = current.Next;
            }
            return false;
        }
        public void Main()
        {

        }
    }
}
#endregion
