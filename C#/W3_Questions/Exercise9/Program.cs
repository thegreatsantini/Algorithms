using System;

namespace Exercise9
{
    class Program
    {
        public static int sum;
        public static int count;

        public static int AddNewNum(int num) 
        {
            count++;
            return sum += num;
        }
        public static void CheckIfDone(string isDone)
        {
            if ( isDone == "n" ) {
                Main();
            }
            else {
                DisplayAverage();
            }
        }
        public static void DisplayAverage() 
        {
            Console.WriteLine(sum / count);
        }
        static void Main()
        {
            var NewAverage = new Program();

            Console.Write("select a number: ");
            int toNum = Convert.ToInt32(Console.ReadLine());
            int num = AddNewNum(toNum);

            Console.WriteLine("Done?: y/n ");
            CheckIfDone(Console.ReadLine());


        }
    }
}
