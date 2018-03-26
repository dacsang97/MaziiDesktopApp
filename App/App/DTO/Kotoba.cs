using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Kotoba
    {
        private int iD;
        private string cn_Mean;
        private string hiragana;
        private string kanji;
        private string mean;
        private string mean_Unsigned;
        private string roumaji;
        private int lesson_Id;

        public Kotoba()
        {

        }

        public Kotoba(DataRow row)
        {
            ID = (int)row["id"];
            Cn_Mean = row["cn_mean"].ToString();
            Hiragana = row["hiragana"].ToString();
            Kanji = row["kanji"].ToString();
            Mean = row["mean"].ToString();
            Mean_Unsigned = row["mean_unsigned"].ToString();
            Roumaji = row["roumaji"].ToString();
            Lesson_Id = (int)row["lesson_id"];
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


        public string Hiragana
        {
            get
            {
                return hiragana;
            }

            set
            {
                hiragana = value;
            }
        }

        public string Kanji
        {
            get
            {
                return kanji;
            }

            set
            {
                kanji = value;
            }
        }

        public string Mean
        {
            get
            {
                return mean;
            }

            set
            {
                mean = value;
            }
        }

        public string Roumaji
        {
            get
            {
                return roumaji;
            }

            set
            {
                roumaji = value;
            }
        }

        public string Cn_Mean
        {
            get
            {
                return cn_Mean;
            }

            set
            {
                cn_Mean = value;
            }
        }

        public string Mean_Unsigned
        {
            get
            {
                return mean_Unsigned;
            }

            set
            {
                mean_Unsigned = value;
            }
        }

        public int Lesson_Id
        {
            get
            {
                return lesson_Id;
            }

            set
            {
                lesson_Id = value;
            }
        }
    }
}
