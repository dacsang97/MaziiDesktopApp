using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using NUnit.Framework;
using System.Linq;

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
        [Test]
        public void TestOnePhrase()
        {
            List<Phrase> list = PhraseDAO.Instance.GetPhrasesByCatID(1);
            Phrase p = list.ElementAt(0);
            Assert.AreEqual("こんにちは", p.Japanese);
            Assert.AreEqual("Kon ni chi wa", p.Pinyin);
            Assert.AreEqual("Xin chào", p.Vietnamese);
            Assert.AreEqual("xin chao", p.Vietnamese_un);
            Assert.AreEqual("greeting_1", p.Voice);
        }
        [Test]
        //test when catID is out of range
        public void TestCatID()
        {
            List<Phrase> list = PhraseDAO.Instance.GetPhrasesByCatID(19);
            Assert.AreEqual(0, list.Count);
        }
    }
}
