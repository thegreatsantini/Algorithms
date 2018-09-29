using System;

namespace LargestNumbers
{
    class Solution 
    {
        public void FindLargestNumbers(int[,] arrays) 
        {
            int[] arrOfLargest = new int[4];
            int currentLargest = 0;

            for (int i = 0; i < arrays.GetLength(0); i++)
                //Console.WriteLine(arrays[i]);

            {
                for (int j = 0; j < arrays.GetLength(1); j++ ) {

                    Console.WriteLine(arrays[i, 0]);
                }
                //for (int j = 0; j < arrays[i].GetLength(1); j++)
                //{

                //}
            }
        }
        static void Main(string[] args)
        {
            var runSolution = new Solution();
            int[,] intArrays = new int[4,4] { 
                                            { 4, 5, 1, 35 },
                                            {13, 27, 18, 2},
                                            {32, 35, 37, 39},
                                            {1000, 1001, 857, 1}
                                          };
            runSolution.FindLargestNumbers(intArrays);
            //Console.WriteLine(solution);
        }
    }
}
