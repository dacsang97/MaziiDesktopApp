using App.DAO;
using App.DTO;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Test
{
    [TestFixture]
    class KanjiTestDAO
    {
        [Test]
        //test GetKanjies(int lesson)
        //test number of element in list and data of first element
        public void TestWithLesson()
        {
            List<Kanji> list = KanjiDAO.Instance.GetKanjies(1);
            Assert.AreEqual(16, list.Count);
            Kanji k = list.ElementAt(0);
            Assert.AreEqual("nhất", k.Cn_mean);
            Assert.AreEqual("one", k.Image);
            Assert.AreEqual("ひと_つ", k.Kunjomi);
            Assert.AreEqual("※一∴いち∴một※一つ∴ひとつ∴một※一時∴いちじ∴thời gian※一分∴いちぶ∴phút※一月∴いちがつ∴tháng giêng※一日∴（いちにち）∴một ngày※一日∴（*ついたち）∴mồng 1※一人∴いちにん∴một người※一番∴いちばん∴một cặp", k.Note);
            Assert.AreEqual("イチ, イツ", k.Onjomi);
            Assert.AreEqual("Một được biểu diễn bởi <b>một</b> ngón tay", k.Remember);
            Assert.AreEqual("hitotsu", k.Rkunjomi);
            Assert.AreEqual("ichi, itsu", k.Ronjomi);
            Assert.AreEqual("nhat", k.Ucn_mean);
            Assert.AreEqual("mot", k.Uvi_mean);
            Assert.AreEqual("một", k.Vi_mean);
            Assert.AreEqual("一", k.Word);
            Assert.AreEqual("2", k.Write);
        }
        [Test]
        //test GetKanjies(int from, int to)
        public void TestWithRange()
        {
            List<Kanji> list = KanjiDAO.Instance.GetKanjies(1, 100);
            Assert.AreEqual(100, list.Count);
            Kanji k = list.ElementAt(0);
            Assert.AreEqual(0, k.Lesson);
        }
    }
}
