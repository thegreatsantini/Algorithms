using System;

namespace W3_BasicAlgorithms
{
    class Program
    {
        private static int CheckNums(int num1, int num2)
        {
            return (num1 == num2) ? (num1 + num2) * 3 : num1 + num2;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(CheckNums(1, 2));
            Console.WriteLine(CheckNums(3, 3));
            Console.WriteLine(CheckNums(4, 12));
        }
    }
}
