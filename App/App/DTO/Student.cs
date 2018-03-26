using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Student
    {
        private string iD;
        private string name;
        private string email;

        public Student(string id, string name, string email)
        {
            ID = id;
            Name = name;
            Email = email;
        }

        public Student(DataRow row)
        {
            ID = row["StudentID"].ToString();
            Name = row["StudentName"].ToString();
            Email = row["Email"].ToString();
        }

        public string ID
        {
            get
            {
                return iD;
            }

            set
            {
                iD = value;
            }
        }

        public string Name
        {
            get
            {
                return name;
            }

            set
            {
                name = value;
            }
        }

        public string Email
        {
            get
            {
                return email;
            }

            set
            {
                email = value;
            }
        }
    }
}
