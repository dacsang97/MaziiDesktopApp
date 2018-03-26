using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Bridges
{
    class StudentBridge
    {
        public List<Student> GetAllStudent()
        {
            List<Student> result = StudentDAO.Instance.GetAllStudent();
            return result;
        }
    }
}
