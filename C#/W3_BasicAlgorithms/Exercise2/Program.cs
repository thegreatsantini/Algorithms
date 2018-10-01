using System;

namespace Exercise2
{
    class Program
    {
        private static int SubtractNums(int x)
        {
            return (x < 51) ?  51-x : Math.Abs(x - 51) * 3;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(SubtractNums(12));
            Console.WriteLine(SubtractNums(82));
            Console.WriteLine(SubtractNums(53));
        }
    }
}
