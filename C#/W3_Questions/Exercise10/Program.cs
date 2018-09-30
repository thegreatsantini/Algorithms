using System;

namespace Exercise10
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter first number: ");
            int x = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter second number: ");
            int y = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter third number: ");
            int z = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("({0} + {1}) * {2} = {3}", x, y, z, (x + y) * z);
            Console.WriteLine("{0} * {1} + {1} * {2} = {3}",x,y,z, x*y + y*z);
        }
    }
}