using System;
using System.Collections.Generic;

namespace findDup
{
    class Solution
    {
        string TestString;
        string[] SplitString;
        List<string> duplicates = new List<string>();

        public void SetString(string myString)
        {
            TestString = myString;
        }
        //public string[] SplitString()
        //{
        //    return TestString.Split(" ");
        //}
        public void PrintStringList()
        {
            Console.WriteLine(TestString);
            foreach (char word in TestString)
            {
                Console.WriteLine(word);
            }
        }

        static void Main(string[] args)
        {
            //string myString = "the blue ball is blue";
            //List<string> duplicates = new List<string>();

            //string[] myList = myString.Split(" ");
            var newSolution = new Solution();
            newSolution.SetString("the blue ball, is blue!");
            newSolution.SplitString();
            newSolution.PrintStringList();

            Dictionary<string, int> wordCount = new Dictionary<string, int>();

            //foreach (string value in myList)
            //{
            //    if ( !wordCount.ContainsKey(value) ) {
            //        wordCount[value] = 1;
            //    }
            //    else {
            //        wordCount[value]++;
            //    }
            //}

            //foreach(KeyValuePair<string, int> item in wordCount ) 
            //{
            //    if ( item.Value > 1 ) {
            //        duplicates.Add(item.Key);
            //    }
            //}

            //foreach( string word in duplicates ) {
            //    Console.WriteLine(word);
            //}
        }
    }
}
