using App.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAO
{
    class PhraseDAO
    {
        private static PhraseDAO instance;

        private PhraseDAO()
        {

        }

        internal static PhraseDAO Instance
        {
            get
            {
                if (instance == null) instance = new PhraseDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public List<Phrase> GetPhrasesByCatID(int catID)
        {
            DataTable dt = DataProvider.Instance.ExecuteQuery("select * from Phrases where category_id = @param ", new object[] { catID });
            List<Phrase> list = new List<Phrase>();
            foreach(DataRow dr in dt.Rows)
            {
                list.Add(new Phrase(dr));
            }
            return list;
        }
    }
}
