using System;

namespace LongestString
{
    class Solution
    {
        public int FindLongest(string str) 
        {
            int currentLongest = 0;
            string[] toArr = str.Split(" ");

            foreach(string j in toArr) {
                if ( j.Length > currentLongest ) {
                    currentLongest = j.Length;
                }
            }

            return currentLongest;
        }

        static void Main(string[] args)
        {
            var longest = new Solution();
            int solution = longest.FindLongest("What if we try a super-long word such as otorhinolaryngology");
            Console.WriteLine(solution);
            Console.ReadKey();
        }
    }
}
