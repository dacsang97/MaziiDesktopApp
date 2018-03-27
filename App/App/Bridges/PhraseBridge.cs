﻿using App.DAO;
using App.DTO;
using NAudio.Wave;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Bridges
{
    class PhraseBridge
    {
        public List<Phrase> GetPhrasesByCatID(Int64 catID)
        {
            return PhraseDAO.Instance.GetPhrasesByCatID(Convert.ToInt32(catID));
        }

        public void PlayPhraseAudio(string url)
        {
            using (var mf = new MediaFoundationReader(url))
            using (var wo = new WaveOutEvent())
            {
                wo.Init(mf);
                wo.Play();
            }
        }
    }
}
