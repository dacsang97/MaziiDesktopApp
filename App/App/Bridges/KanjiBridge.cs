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
        public List<Kanji> GetKanjies(int lesson)
        {
            return KanjiDAO.Instance.GetKanjies(lesson);
        }

        public List<Kanji> GetKanjies(int from, int to)
        {
            return KanjiDAO.Instance.GetKanjies(from, to);
        }
    }
}
