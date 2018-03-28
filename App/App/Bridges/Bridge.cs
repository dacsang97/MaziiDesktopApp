using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Bridges
{
    class Bridge
    {
        public IEnumerable<object> GetBridges()
        {
            return new List<object>()
            {
                new DialogBridge(),
                new StudentBridge(),
                new PhraseBridge(),
                new KanaBridge(),
                new KotobaBridge(),
                new LessonBridge(),
                new KanjiBridge(),
                new AudioBridge()
            };
        }
    }
}
