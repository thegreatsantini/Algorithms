using System;

namespace Exercise12
{
    class Program
    {
        public static void PrintNums(string num)
        {
            string print = "";
            int count = 0;

            while ( count < 2 ) {

                for (int i = 0; i < 1; i++ ) {
                    print += num + " ";
                }
                Console.WriteLine(print);
                print = "";

                for (int i = 0; i < 1; i++)
                {
                    print += num;
                }
                Console.WriteLine(print);
                print = "";
                count++;
            }
        }
        static void Main(string[] args)
        {
			Console.WriteLine("Enter a number: ");
            PrintNums(Console.ReadLine());
        }
    }
}
