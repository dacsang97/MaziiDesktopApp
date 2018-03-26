using CefSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace App
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            var settings = new CefSettings() { CachePath = "Cache" };

            Cef.EnableHighDPISupport();
            Cef.Initialize(settings);
            CefSharpSettings.LegacyJavascriptBindingEnabled = true;

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());

            Cef.Shutdown();
        }
    }
}
