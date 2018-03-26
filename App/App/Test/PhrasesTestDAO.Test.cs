using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace App.Test
{
    [TextFixture]
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
