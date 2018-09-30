using System;

namespace Exercise5
{
    class Program
    {
        public static void Swap(ref int num1, ref int num2) 
        {
            int temp = num1;
            num1 = num2;
            num2 = temp;
        }
        static void Main(string[] args)
        {
            int A = 5;
            int B = 6;
            Console.WriteLine("Before Swap a={0} , b={1}", A, B);
            Swap(ref A, ref B);
            Console.WriteLine("After swap a={0}, b={1}", A, B);

        }
    }
}
