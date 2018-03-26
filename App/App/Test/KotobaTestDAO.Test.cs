using System;
using System.Collections.Generic;
using App.DAO;
using App.DTO;
using NUnit.Framework;

namespace App.Test
{
	[TestFixture]
    class KotobaTestDAO
    {
		[SetUp]
		public void SetUp()
        {

        }
		[Test]
		public void TestGetKotoBa()
        {
            List<Kotoba> kotoba = KotobasDAO.Instance.GetKotoba(2);
            Assert.AreEqual(46, kotoba.Count);
        }

    }
}
