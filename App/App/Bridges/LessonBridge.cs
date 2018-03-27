using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAO;
using App.DTO;

namespace App.Bridges
{
    class LessonBridge
    {
        public Lesson GetListenLesson(Int64 lessonID)
        {
            return LessonDAO.Instance.GetListenLesson(Convert.ToInt32(lessonID));
        }
    }
}
