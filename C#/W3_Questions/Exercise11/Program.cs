using System;

namespace Exercise11
{
    class Program
    {
        public static void DisplayAge(string age) 
        {
            Console.WriteLine("You look older than {0}", age);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your age: ");
            DisplayAge(Console.ReadLine());
        }
    }
}
