using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Kanji
    {
        private int iD;
        private string cn_mean;
        private string image;
        private string kunjomi;
        private string note;
        private string onjomi;
        private string remember;
        private string rkunjomi;
        private string ronjomi;
        private string ucn_mean;
        private string uvi_mean;
        private string vi_mean;
        private string word;
        private string write;
        private int lesson;

        public Kanji(DataRow dr)
        {
            ID = Convert.ToInt32(dr["id"]);
            Cn_mean = dr["cn_mean"].ToString();
            Image = dr["image"].ToString();
            Kunjomi = dr["kunjomi"].ToString();
            Note = dr["note"].ToString();
            Onjomi = dr["onjomi"].ToString();
            Remember = dr["remember"].ToString();
            Rkunjomi = dr["rkunjomi"].ToString();
            Ronjomi = dr["ronjomi"].ToString();
            Ucn_mean = dr["ucn_mean"].ToString();
            Uvi_mean = dr["uvi_mean"].ToString();
            Vi_mean = dr["vi_mean"].ToString();
            Word = dr["word"].ToString();
            Write = dr["write"].ToString();
            Lesson = Convert.ToInt32(dr["lesson"]);
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

        public string Cn_mean
        {
            get
            {
                return cn_mean;
            }

            set
            {
                cn_mean = value;
            }
        }

        public string Image
        {
            get
            {
                return image;
            }

            set
            {
                image = value;
            }
        }

        public string Kunjomi
        {
            get
            {
                return kunjomi;
            }

            set
            {
                kunjomi = value;
            }
        }

        public string Note
        {
            get
            {
                return note;
            }

            set
            {
                note = value;
            }
        }

        public string Onjomi
        {
            get
            {
                return onjomi;
            }

            set
            {
                onjomi = value;
            }
        }

        public string Remember
        {
            get
            {
                return remember;
            }

            set
            {
                remember = value;
            }
        }

        public string Rkunjomi
        {
            get
            {
                return rkunjomi;
            }

            set
            {
                rkunjomi = value;
            }
        }

        public string Ronjomi
        {
            get
            {
                return ronjomi;
            }

            set
            {
                ronjomi = value;
            }
        }

        public string Ucn_mean
        {
            get
            {
                return ucn_mean;
            }

            set
            {
                ucn_mean = value;
            }
        }

        public string Uvi_mean
        {
            get
            {
                return uvi_mean;
            }

            set
            {
                uvi_mean = value;
            }
        }

        public string Vi_mean
        {
            get
            {
                return vi_mean;
            }

            set
            {
                vi_mean = value;
            }
        }

        public string Word
        {
            get
            {
                return word;
            }

            set
            {
                word = value;
            }
        }

        public string Write
        {
            get
            {
                return write;
            }

            set
            {
                write = value;
            }
        }

        public int Lesson
        {
            get
            {
                return lesson;
            }

            set
            {
                lesson = value;
            }
        }
    }
}
