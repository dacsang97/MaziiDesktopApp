using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Kana
    {
        private int iD;
        private string example;
        private string hira;
        private string kata;
        private string romaji;

        public Kana()
        {

        }

        public Kana(DataRow row)
        {
            ID = (int)row["id"];
            Example = row["example"].ToString();
            Hira = row["hira"].ToString();
            Kata = row["kata"].ToString();
            Romaji = row["romaji"].ToString();
        }



        public string Example
        {
            get
            {
                return example;
            }

            set
            {
                example = value;
            }
        }

        public string Hira
        {
            get
            {
                return hira;
            }

            set
            {
                hira = value;
            }
        }

        public string Kata
        {
            get
            {
                return kata;
            }

            set
            {
                kata = value;
            }
        }

        public string Romaji
        {
            get
            {
                return romaji;
            }

            set
            {
                romaji = value;
            }
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
    }
}
