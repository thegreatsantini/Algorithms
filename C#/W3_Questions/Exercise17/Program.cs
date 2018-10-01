using System;

namespace Exercise17
{
    class Program
    {
        public static string AddChars(string myStr)
        {
            string firstLetter = myStr.Substring(0, 1);
            return firstLetter + myStr + firstLetter;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(AddChars("Hello World!"));
        }
    }
}
