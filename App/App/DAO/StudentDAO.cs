using App.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAO
{
    class StudentDAO
    {
        private static StudentDAO instance;
        private StudentDAO() { }

        internal static StudentDAO Instance
        {
            get
            {
                if (instance == null) instance = new StudentDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Student> GetAllStudent()
        {
            List<Student> studentList = new List<Student>();
            DataTable data = DataProvider.Instance.ExecuteQuery("select * from Student");
            foreach (DataRow item in data.Rows)
            {
                Student emp = new Student(item);
                studentList.Add(emp);
            }

            return studentList;
        }
    }
}
