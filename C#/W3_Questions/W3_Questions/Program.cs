using System;

namespace Exercise1
{
    class PrintName
    {
        public static string SayName(string name) {
            return "Hello " + name;
        }
        static void Main()
        {   
            Console.WriteLine("Hello");
            Console.WriteLine(SayName("Lucas"));
        }
    }
}
