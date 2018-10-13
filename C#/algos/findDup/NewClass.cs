using System;
using System.Collections.Generic;

namespace findDup
{
    public class Course
    {
        int CourseID;
        string CourseName;
        public void CreateCourse(int ID, string name)
        {
            CourseID = ID;
            CourseName = name;
        }
        public string CouseInfo()
        {
            return CourseName;
        }
    }
}
