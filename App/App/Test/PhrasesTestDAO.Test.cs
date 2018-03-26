using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using NUnit.Framework;


namespace App.Test
{
    [TestFixture]
    class PhrasesTestDAO
    {
        [Test]
        public void TestGetPhrase()
        {
            List<Phrase> p = PhraseDAO.Instance.GetPhrasesByCatID(1);
            Assert.AreEqual(34, p.Count);
        }
    }
}
