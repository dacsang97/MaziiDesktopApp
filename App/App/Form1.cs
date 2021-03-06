﻿using App.Bridges;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace App
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            Text = "Mazii Desktop App";

            // Enabling this during devlopment can be a nice thing: this.TopMost = true;

            var availableBridges = new Bridge();

            string url = "file:///index.html";
            bool showDeveloperConsole = false;

#if DEBUG
            url = "http://localhost:3000";

            if (MessageBox.Show("Do you want to open the developer console?", this.Text, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                showDeveloperConsole = true;
            };
#endif

            this.Controls.Add(new ReactHost(url, showDeveloperConsole, availableBridges.GetBridges())
            {
                Dock = DockStyle.Fill,
                AutoScroll = false
            });
        }
    }
}
