using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAO;
using App.DTO;

namespace App.Bridges
{
    class KotobaBridge
    {
        public List<Kotoba> GetKotoba(Int64 lessonID)
        {
            return KotobasDAO.Instance.GetKotoba(Convert.ToInt32(lessonID));
        }
    }
}
