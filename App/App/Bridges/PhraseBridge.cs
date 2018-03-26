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
        public List<Phrase> GetAllStudent(int catID)
        {
            List<Phrase> result = PhraseDAO.Instance.GetPhrasesByCatID(catID);
            return result;
        }
    }
}
