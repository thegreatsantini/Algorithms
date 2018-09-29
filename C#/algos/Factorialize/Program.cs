using System;

namespace Factorialize
{
    class Solution
    {
        public int Factorialize(int num) 
        {
            if ( num == 0 ) {
                return 1;
            }
            return num * Factorialize(num-1);
        }
        static void Main(string[] args)
        {
            var s = new Solution();
            int solution = s.Factorialize(5);
            Console.WriteLine(solution);
        }
    }
}
