using System;

namespace Exercise3
{
    class Program
    {
        public static bool CheckNums(int x, int y)
        {
            if ( x == 30 || y == 30 ) {
                return true;
            }
            else if ( x + y == 30 ) {
                return true;
            }
            return false;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Write a number: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Write a second number: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine(CheckNums(num1, num2));
        }
    }
}
