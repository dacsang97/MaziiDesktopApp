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
    class KanaDAO
    {
        private static KanaDAO instance;
        public KanaDAO()
        {

        }

        internal static KanaDAO Instance
        {
            get
            {
                if (instance == null) instance = new KanaDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Kana> GetKana()
        {
            List<Kana> kanasList = new List<Kana>();
            DataTable data = DataProvider.Instance.ExecuteQuery("select * from Kanas");
            foreach (DataRow item in data.Rows)
            {
                Kana emp = new Kana(item);
                kanasList.Add(emp);
            }

            return kanasList;
        }

    }
}
