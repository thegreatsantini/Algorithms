using System;

namespace Exercise5
{
    class Program
    {
        public static string CheckString(string myStr)
        {
            string[] sarr;
            sarr = myStr.Split(' ');
            if ( sarr[0] == "if" ) 
                return myStr;
            return "not else";
        }
        static void Main(string[] args)
        {
            Console.WriteLine(CheckString("if Hello World!"));
        }
    }
}
