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
    class LessonDAO
    {
        private static LessonDAO instance;
        public LessonDAO()
        {

        }

        internal static LessonDAO Instance
        {
            get
            {
                if (instance == null) instance = new LessonDAO();
                return instance;
            }

            private set
            {
                instance = value;
            }
        }

        public Lesson GetListenLesson(int lessonID)
        {
            Lesson lesson = new Lesson();
            string query = "select * from Lessons where id = @id ";
            DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { lessonID });
            foreach (DataRow item in data.Rows)
            {
                lesson = new Lesson(item);
            }

            return lesson;
        }
    }
}
