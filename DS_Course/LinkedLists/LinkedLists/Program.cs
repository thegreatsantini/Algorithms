using System;

namespace NodeChains
{
    public class Node
    {
        public int Value { get; set; }
        public Node Next { get; set; }
    }
    class Program 
    {

        static void Main(string[] args)
        {
            //+-----+-----+
            //|  3  | null+
            //+-----|-----+
            Node first = new Node { Value = 3 };

            //+-----+-----+
            //|  5  | null+
            //+-----|-----+
            Node middle = new Node { Value = 5 };

            //+-----+-----+     +-----+-----+
            //|  3  | null+---->+  5  + null+
            //+-----|-----+     +-----+-----+
            first.Next = middle;

            //+-----+-----+
            //|  7  | null+
            //+-----|-----+
            Node last = new Node { Value = 7 };


            //+-----+-----+     +-----+-----+     +-----+------+
            //|  3  | null+---->+  5  + null+---->+  7  + null +
            //+-----|-----+     +-----+-----+     +-----+------+
            middle.Next = last;

            PrintList(first);
        }
        public static void PrintList(Node node) 
        {
            while ( node != null ) {
                Console.WriteLine(node.Value);
                node = node.Next;
            }
        }
    }
}

