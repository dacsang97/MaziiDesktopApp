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
        private string cnMean;
        private string hiragana;
        private string kanji;
        private string mean;
        private string meanUnsigned;
        private string roumaji;
        private int lessonId;

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

        public string CnMean
        {
            get
            {
                return cnMean;
            }

            set
            {
                cnMean = value;
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

        public string MeanUnsigned
        {
            get
            {
                return meanUnsigned;
            }

            set
            {
                meanUnsigned = value;
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

        public int LessonId
        {
            get
            {
                return lessonId;
            }

            set
            {
                lessonId = value;
            }
        }

        public Kotoba()
        {

        }

        public Kotoba(DataRow row)
        {
            ID = (int)row["id"];
            CnMean = row["cn_mean"].ToString();
            Hiragana = row["hiragana"].ToString();
            Kanji = row["kanji"].ToString();
            Mean = row["mean"].ToString();
            MeanUnsigned = row["mean_unsigned"].ToString();
            Roumaji = row["roumaji"].ToString();
            LessonId = (int)row["lesson_id"];
        }

        
    }
}
