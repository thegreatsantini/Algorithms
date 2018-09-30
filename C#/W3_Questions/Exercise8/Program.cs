using System;

namespace Exercise8
{
    class Program
    {
        public static void DisplayTable(int num) 
        {
            for (int i = 0; i <= 10; i++ ) {
                Console.WriteLine("{0} * {1} = {2}", num, i, num * i);
            }
        }
        static void Main(string[] args)
        {
            Console.Write("Select a number:");
            int num = Convert.ToInt32(Console.ReadLine());
            DisplayTable(num);
        }
    }
}
