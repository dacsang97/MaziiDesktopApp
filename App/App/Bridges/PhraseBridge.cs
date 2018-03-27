using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Bridges
{
    class PhraseBridge
    {
        public List<Phrase> GetPhrasesByCatID(int catID)
        {
            return PhraseDAO.Instance.GetPhrasesByCatID(catID);
        }
    }
}
