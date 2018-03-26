using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using App.DTO;

namespace App.DAO
{
    class KotobasDAO
    {
        private static KotobasDAO instance;
        public KotobasDAO()
        {

        }

        internal static KotobasDAO Instance
        {
            get
            {
                if (instance == null) instance = new KotobasDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Kotoba> GetKotoba(int lessonID)
        {
            List<Kotoba> kotobasList = new List<Kotoba>();
            string query = "select * from Kotobas where lesson_id = @lesson_id ";
            DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { lessonID });
            foreach (DataRow item in data.Rows)
            {
                Kotoba emp = new Kotoba(item);
                kotobasList.Add(emp);
            }

            return kotobasList;
        }
    }
}
