using System;

namespace Exercise15
{
    class Program
    {
        public static string RemoveChar(string myString, int start, int end)
        {
            string newString = myString.Remove(start, end);
            return newString;
        }
        static void Main(string[] args)
        {
            int start;
            int end;
            string myString;

            Console.WriteLine("Write a string to edit: ");
            myString = Console.ReadLine();

            Console.WriteLine("select start: ");
            start = Convert.ToInt32(Console.ReadLine()) -1 ;

            Console.WriteLine("select end: ");
            end = Convert.ToInt32(Console.ReadLine()) - 1;

            Console.WriteLine(RemoveChar(myString, start, end));
        }
    }
}
