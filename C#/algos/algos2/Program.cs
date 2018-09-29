using System;

namespace ReverseString
{
    class Solution 
    {
        public string ReverseString(string input)
        {
            string newString = "";

            for (int i = input.Length-1; i >= 0; i--)
            {
                newString += input[i];
            }
            return newString;
        }
            static void Main(string[] args)
            {
                var s = new Solution();
                string solution = s.ReverseString("Test");
                Console.WriteLine(solution);
                Console.ReadKey();
            }
        }
    }