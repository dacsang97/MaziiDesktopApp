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
            List<Kanas> kana = KanasDAO.Instance.getKana();

            Assert.AreEqual(1, 1);
        }
    }
}
