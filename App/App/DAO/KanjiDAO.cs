using App.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAO
{
    class KanjiDAO
    {
        private static KanjiDAO instance;
        static int start = 512;

        internal static KanjiDAO Instance
        {
            get
            {
                if (instance == null) instance = new KanjiDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Kanji> GetKanjies(int lesson)
        {
            DataTable dt = DataProvider.Instance.ExecuteQuery("select * from Kanjies where lesson = @param ", new object[] { lesson });
            List<Kanji> list = new List<Kanji>();
            foreach (DataRow dr in dt.Rows)
            {
                list.Add(new Kanji(dr));
            }
            return list;
        }

        public List<Kanji> GetKanjies(int from, int to)
        {
            DataTable dt = DataProvider.Instance.ExecuteQuery("select * from Kanjies where id between @param1 and @param2", new object[] { start + from, start + to });
            List<Kanji> list = new List<Kanji>();
            foreach (DataRow dr in dt.Rows)
            {
                list.Add(new Kanji(dr));
            }
            return list;
        }
    }
}
