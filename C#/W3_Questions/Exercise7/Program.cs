using System;

namespace Exercise7
{
    class Program
    {
        public static string AddNums(int num1, int num2) 
        {
            return Convert.ToString(num1 * num2);
        }
        public static string SubtractNums(int num1, int num2) 
        {
            return Convert.ToString(num1 - num2);
        }
        public static string MultiplyNums(int num1, int num2) 
        {
            return Convert.ToString(num1 * num2);
        }
        public static string DivideNums(int num1, int num2) 
        {
            return Convert.ToString(num1 / num2);
        }

        static void Main(string[] args)
        {
            Console.Write("Enter another number: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter another number: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("{0} + {1} = {2}",num1, num2, AddNums(num1, num2));
            Console.WriteLine("{0} - {1} = {2}",num1, num2, SubtractNums(num1, num2));
            Console.WriteLine("{0} * {1} = {2}",num1, num2, MultiplyNums(num1, num2));
            Console.WriteLine("{0} / {1} = {2}",num1, num2, DivideNums(num1, num2));
        }
    }
}
