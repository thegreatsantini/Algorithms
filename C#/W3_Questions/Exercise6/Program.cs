using System;

namespace Exercise6
{
    class Program
    {
        public static int MultiplyNums(int num1, int num2, int num3) {
            return num1 * num2 * num3;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(MultiplyNums(2,3,6));
        }
    }
}
