using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAO;
using App.DTO;
using NUnit.Framework;

namespace App.Test
{
    [TestFixture]
    class LessonsTestDAO
    {
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void TestGetLessonByID()
        {
            Lesson lesson = LessonDAO.Instance.GetListenLesson(1);
            Assert.AreEqual(1, lesson.ID);
            Assert.AreEqual("1%20-%201%20-%20Kotoba.mp3", lesson.Link);
        }
    }
}
