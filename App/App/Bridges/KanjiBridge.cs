using App.DAO;
using App.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Bridges
{
    class KanjiBridge
    {
        public List<Kanji> GetKanjiesById(Int64 lesson)
        {
            return KanjiDAO.Instance.GetKanjies(Convert.ToInt32(lesson));
        }

        public List<Kanji> GetKanjiesByScope(Int64 from, Int64 to)
        {
            return KanjiDAO.Instance.GetKanjies(Convert.ToInt32(from), Convert.ToInt32(to));
        }
    }
}
