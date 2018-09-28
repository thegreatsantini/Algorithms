using System;

namespace SphereCalculator
{
        class Sphere
        {
            private double radius;
            const double pi = 3.1415;

        public double GetArea()
        {
            return 4 * Math.Pow(radius, 2) * pi;
        }
        public double GetVolume()
        {
            return 4 / 3 + pi * Math.Pow(radius, 3);
        }
        public void InputSphere() 
        {
            Console.WriteLine("Enter Radius: ");
            radius = Convert.ToDouble(Console.ReadLine());
        }
        public void SelectCalculation() 
        {
            Console.WriteLine("Do you want to calculate the Volume or Area?");
            string selection = Console.ReadLine();
            if ( selection.ToLower() == "area" ) {
                DisplayArea();
            }
            else if ( selection.ToLower() == "volume" ) {
                DisplayVolume();
            }
            else {
                Console.WriteLine("Please select from the possible options.");
                SelectCalculation();
            }
        }
        public void DisplayVolume() 
        {
            Console.WriteLine("Radius: {0}", radius);
            Console.WriteLine("Volume: {0}", GetVolume());

            Console.WriteLine("Would you like to check the area also? (Y/n)");
            string response = Console.ReadLine();
            if ( response.ToLower() == "y" ) {
                Console.WriteLine("Area {0}:", GetArea());
            }
        }

        public void DisplayArea()
        {
            Console.WriteLine("Radius: {0}", radius);
            Console.WriteLine("Area: {0}", GetArea());

            Console.WriteLine("Would you like to check the volume also? (Y/n)");
            string response = Console.ReadLine();
            if (response.ToLower() == "y")
            {
                Console.WriteLine("Volume {0}:", GetVolume());
            }
        }
    }
    class ExecuteSphere
    {
        static void Main(string[] args)
        {
            var s = new Sphere();
            s.InputSphere();
            s.SelectCalculation();
        }
    }
}