using System;

namespace Exercise16
{
    class Program
    {
        public static string SwapChars(string myStr) 
        {
            string firstLetter = myStr.Substring(0, 1);
            string lastLetter = myStr.Substring(myStr.Length - 1);
            string finalString = lastLetter + myStr.Substring(1, myStr.Length-2) + firstLetter;
            return finalString;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(SwapChars("Test string"));
        }
    }
}
