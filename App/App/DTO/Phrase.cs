using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace App.DTO
{
    class Phrase
    {
        private int iD;
        private int categoryID;
        private string japanese;
        private string pinyin;
        private string vietnamese;
        private string vietnamese_un;
        private string voice;

        public Phrase()
        {

        }

        public Phrase(DataRow dr)
        {
            ID = Convert.ToInt32(dr["id"]);
            CategoryID = Convert.ToInt32(dr["category_id"]);
            Japanese = dr["japanese"].ToString();
            Pinyin = dr["pinyin"].ToString();
            Vietnamese = dr["vietnamese"].ToString();
            Vietnamese_un = dr["vietnamese_un"].ToString();
            Voice = dr["voice"].ToString();
        }

        public int ID
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

        public int CategoryID
        {
            get
            {
                return categoryID;
            }

            set
            {
                categoryID = value;
            }
        }

        public string Japanese
        {
            get
            {
                return japanese;
            }

            set
            {
                japanese = value;
            }
        }

        public string Pinyin
        {
            get
            {
                return pinyin;
            }

            set
            {
                pinyin = value;
            }
        }

        public string Vietnamese
        {
            get
            {
                return vietnamese;
            }

            set
            {
                vietnamese = value;
            }
        }

        public string Vietnamese_un
        {
            get
            {
                return vietnamese_un;
            }

            set
            {
                vietnamese_un = value;
            }
        }

        public string Voice
        {
            get
            {
                return voice;
            }

            set
            {
                voice = value;
            }
        }
    }
}
