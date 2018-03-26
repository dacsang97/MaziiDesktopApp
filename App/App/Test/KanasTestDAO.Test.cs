using System;
using NUnit.Framework;
using App.DAO;
using App.DTO;
using System.Collections.Generic;

namespace App.Test
{
    [TestFixture]
    class KanasTestDAO
    {
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void TestGetKana()
        {
            List<Kanas> kana = KanasDAO.Instance.GetKana();
            Console.WriteLine(kana[5].Romaji);
            Assert.AreEqual("ka", kana[5].Romaji);
        }
    }
}
