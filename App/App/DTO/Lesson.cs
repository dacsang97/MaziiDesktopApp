using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Lesson
    {
        private int iD;
        private string link;

        public Lesson()
        {

        }

        public Lesson(DataRow row)
        {
            ID = (int)row["id"];
            Link = row["link"].ToString();
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

        public string Link
        {
            get
            {
                return link;
            }

            set
            {
                link = value;
            }
        }
    }
}
