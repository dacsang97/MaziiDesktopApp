using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace App.DAO
{
    class KanasDAO
    {
        private static KanasDAO instance;
        public KanasDAO()
        {

        }

        internal static KanasDAO Instance
        {
            get
            {
                if (instance == null) instance = new KanasDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Kanas> GetAllKanas()
        {
            List<Kanas> kanasList = new List<Kanas>();
            DataTable data = DataProvider.Instance.ExecuteQuery("select * from Kanas");
            foreach (DataRow item in data.Rows)
            {
                Kanas emp = new Kanas(item);
                kanasList.Add(emp);
            }

            return kanasList;
        }
    }
}
