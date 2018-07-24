using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.IO;
using System.Drawing.Printing;

namespace End_Forms
{
    public partial class PFB_LABEL_BARCODE_PLANNING : Form
    {
        public Form PrevForm;        // Previous Form's ID
        public Form NextForm;        // Next Form's ID
        private string SQLConnStr;   // SQL Connection String
        private string SQLGridStr;   // Grid SQL Connection String
        public string SelectStr;     // Extra  
        public string SubSelectStr;  // Extra  
        public double ID;            // Form's ID
        public double SubID;         // EXTRA 
        public int CurFieldNo;       // Field's Column number
                                     // >0 Means upper fields
                                     // <0 Means below Fields 
                                     // =0 Request This Form's Data
        public double UID;           // User ID 
        public double StID;          // Station ID
        public double UID1;          //  ( EXTRA )
        public double UID2;          //  ( EXTRA )
        public double UID3;          //  ( EXTRA )
        public double UID4;          //  ( EXTRA )
        public int CurSerial;        // Current SERIAL 
        public double CurObjCode;    // Current Object Code  PFB_LABEL_BARCODE_PLANNING

        public PFB_LABEL_BARCODE_PLANNING(string s)
        {
            InitializeComponent();
            CurObjCode= 200;
            Setting.CurObjCode=CurObjCode;
            if (s  != "_MenuCall")  // If this form showed in an another form except Menu  
            {
                Menu01.Enabled = false;
                Menu02.Enabled = false;
                Menu03.Enabled = false;
                Menu05.Enabled = false;
                Menu06.Enabled = false;
                Menu07.Enabled = false;
                Menu08.Enabled = false;
                Menu08.Visible = false;
                Menu09.Enabled = false;
                Menu10.Enabled = false;
                Menu11.Enabled = false;
                Menu12.Enabled = false;
            }
                Menu06.Text = "F6 New";
            ID = 0;
            Display_Grid();    //Displaying Grid Data
            if((s!="")&&(s!="_MenuCall"))Loading_Data(s);  // if we have an ID then we load a record of this form with this ID
            else Free_Form();  // Else we clear form to create new data
        }   
        private void Display_Grid()
        {

            SQLConnStr=Setting.SQLServerName;
            dataGridViewSub.Visible = false;

        }   
        private void Loading_Data(string s)
        {
            ID = double.Parse(s);
            if(ID>0)
            {
                SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
                SqlDataAdapter SqlDA;
                SqlDA = new SqlDataAdapter("Select * From _PFB_LABEL_BARCODE_PLANNING Where _ID="+ID.ToString(), sqlCnn);
                DataTable T = new DataTable();
                SqlDA.Fill(T);
                fieldTxt1.Text = T.Rows[0][ 1].ToString();
                CurSerial = int.Parse(fieldTxt1.Text);
                fieldTxt2.Text = T.Rows[0][ 2].ToString();
                if(T.Rows[0][ 3].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_MATERIAL Where _ID=" + T.Rows[0][3].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt3.Tag = T.Rows[0][3].ToString();
                    fieldTxt3.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 4].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_ADDITIVES Where _ID=" + T.Rows[0][4].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt4.Tag = T.Rows[0][4].ToString();
                    fieldTxt4.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 5].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_COLOR Where _ID=" + T.Rows[0][5].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt5.Tag = T.Rows[0][5].ToString();
                    fieldTxt5.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 6].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_GRADE Where _ID=" + T.Rows[0][6].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt6.Tag = T.Rows[0][6].ToString();
                    fieldTxt6.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 7].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_DIE_MOLD_TYPE Where _ID=" + T.Rows[0][7].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt7.Tag = T.Rows[0][7].ToString();
                    fieldTxt7.Text = T1.Rows[0][0].ToString();
                }
                fieldTxt8.Text = T.Rows[0][ 8].ToString();
                fieldTxt9.Text = T.Rows[0][ 9].ToString();
                fieldTxt10.Text = T.Rows[0][ 10].ToString();
                if(T.Rows[0][ 11].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_PACKAGING Where _ID=" + T.Rows[0][11].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt11.Tag = T.Rows[0][11].ToString();
                    fieldTxt11.Text = T1.Rows[0][0].ToString();
                }
                fieldTxt12.Text = T.Rows[0][ 12].ToString();
                fieldTxt13.Text = T.Rows[0][ 13].ToString();
                fieldTxt14.Text = T.Rows[0][ 14].ToString();
                if(T.Rows[0][ 15].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_MEASUREMENT Where _ID=" + T.Rows[0][15].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt15.Tag = T.Rows[0][15].ToString();
                    fieldTxt15.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 16].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_MACHINE Where _ID=" + T.Rows[0][16].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt16.Tag = T.Rows[0][16].ToString();
                    fieldTxt16.Text = T1.Rows[0][0].ToString();
                }
                if(T.Rows[0][ 17].ToString().Trim().Length>1)
                {
                    SqlConnection sqlCnn1 = new SqlConnection(SQLConnStr);
                    SqlDataAdapter SqlDA1;
                    SqlDA1 = new SqlDataAdapter("Select NAME From _PFB_STORAGE Where _ID=" + T.Rows[0][17].ToString(), sqlCnn1);
                    DataTable T1 = new DataTable();
                    SqlDA1.Fill(T1);
                    fieldTxt17.Tag = T.Rows[0][17].ToString();
                    fieldTxt17.Text = T1.Rows[0][0].ToString();
                }
                fieldTxt18.Text = T.Rows[0][ 18].ToString();
                fieldTxt19.Text = T.Rows[0][ 19].ToString();
            }
            else Free_Form();
        }
        private void Free_Form()
        {
            ID = 0 ;
            fieldTxt1.Text = "";
            fieldTxt2.Text = "";
            fieldTxt3.Text = "";
            fieldTxt4.Text = "";
            fieldTxt5.Text = "";
            fieldTxt6.Text = "";
            fieldTxt7.Text = "";
            fieldTxt8.Text = "";
            fieldTxt9.Text = "";
            fieldTxt10.Text = "";
            fieldTxt11.Text = "";
            fieldTxt12.Text = "";
            fieldTxt13.Text = "";
            fieldTxt14.Text = "";
            fieldTxt15.Text = "";
            fieldTxt16.Text = "";
            fieldTxt17.Text = "";
            fieldTxt18.Text = "";
            fieldTxt19.Text = "";
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            try
            {
                double max;
                SqlCommand cmdCount = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING", sqlCnn);
                sqlCnn.Open();
                double No = double.Parse(cmdCount.ExecuteScalar().ToString());
                sqlCnn.Close();
                if (No == 0) max = 1;
                else
                {
                    SqlCommand cmdMax = new SqlCommand("Select max(SERIAL) from _PFB_LABEL_BARCODE_PLANNING", sqlCnn);
                    sqlCnn.Open();
                    max = double.Parse(cmdMax.ExecuteScalar().ToString()) + 1;
                    sqlCnn.Close();
                }
                CurSerial = (int)max ;
                fieldTxt1.Text = max.ToString();
            }
            catch (Exception exc)
            {
                MessageBox.Show(exc.Message);
            }
            finally
            {
                sqlCnn.Close();
            }
            fieldTxt2.Text = Setting.NowFarsi();
            Display_Grid();
        }

            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt1
            //************************************************************\\ 
        private void fieldTxt1_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt2.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) dataGridViewSub.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt2
            //************************************************************\\ 
        private void fieldTxt2_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt3.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt1.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt3
            //************************************************************\\ 
        private void fieldTxt3_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 3; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt4.Focus();
                PFB_MATERIAL f = new  PFB_MATERIAL(fieldTxt3.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt3.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt2.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt4
            //************************************************************\\ 
        private void fieldTxt4_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 4; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt5.Focus();
                PFB_ADDITIVES f = new  PFB_ADDITIVES(fieldTxt4.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt4.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt3.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt5
            //************************************************************\\ 
        private void fieldTxt5_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 5; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt6.Focus();
                PFB_COLOR f = new  PFB_COLOR(fieldTxt5.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt5.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt4.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt6
            //************************************************************\\ 
        private void fieldTxt6_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 6; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt7.Focus();
                PFB_GRADE f = new  PFB_GRADE(fieldTxt6.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt6.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt5.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt7
            //************************************************************\\ 
        private void fieldTxt7_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 7; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt8.Focus();
                PFB_DIE_MOLD_TYPE f = new  PFB_DIE_MOLD_TYPE(fieldTxt7.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt7.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt6.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt8
            //************************************************************\\ 
        private void fieldTxt8_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt9.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt7.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt9
            //************************************************************\\ 
        private void fieldTxt9_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt10.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt8.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt10
            //************************************************************\\ 
        private void fieldTxt10_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt11.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt9.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt11
            //************************************************************\\ 
        private void fieldTxt11_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 11; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt12.Focus();
                PFB_PACKAGING f = new  PFB_PACKAGING(fieldTxt11.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt11.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt10.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt12
            //************************************************************\\ 
        private void fieldTxt12_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt13.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt11.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt13
            //************************************************************\\ 
        private void fieldTxt13_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt14.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt12.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt14
            //************************************************************\\ 
        private void fieldTxt14_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt15.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt13.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt15
            //************************************************************\\ 
        private void fieldTxt15_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 15; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt16.Focus();
                PFB_MEASUREMENT f = new  PFB_MEASUREMENT(fieldTxt15.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt15.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt14.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt16
            //************************************************************\\ 
        private void fieldTxt16_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 16; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt17.Focus();
                PFB_MACHINE f = new  PFB_MACHINE(fieldTxt16.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt16.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt15.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt17
            //************************************************************\\ 
        private void fieldTxt17_KeyDown(object sender, KeyEventArgs e)
        {
            CurFieldNo = 17; 
            if ((e.KeyCode == Keys.Enter) && !e.Shift) 
            {
                fieldTxt18.Focus();
                PFB_STORAGE f = new  PFB_STORAGE(fieldTxt17.Text);
                f.Left = 0;
                f.Top = 0;
                f.SelectStr = fieldTxt17.Text ;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt16.Focus();
        }
            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt18
            //************************************************************\\ 
        private void fieldTxt18_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.Enter) && !e.Shift) fieldTxt19.Focus();
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt17.Focus();
        }

            //************************************************************\\ 
            //***  This routine can handle keypress in below field 
            //***    fieldTxt19
            //************************************************************\\ 
        private void fieldTxt19_KeyDown(object sender, KeyEventArgs e)
        {
            General_KeyDown(sender,e);
            if ((e.KeyCode == Keys.Enter) && !e.Shift) dataGridViewSub.Focus();
            if ((e.KeyCode == Keys.Enter) && e.Shift) fieldTxt18.Focus();
        }
            //************************************************************\\ 
            //This function is the answer to all the returns to this form
            //The return string is put in the form name in last form and class.  
            //As a result, the following procedure runs automatically.  
            //If the number is equal to zero, it means retrieving specific information of this form.  
            //If this number is zero, it means returning information from the another class and form in part of this form. 
            //  If the number is greater than zero, it means returning in a field with the same field's number at the top of the form and, 
            //  if the number is less than zero,    it means Back in a field with the same field's number at the below of the form in the grid
            //************************************************************\\ 
        private void PFB_LABEL_BARCODE_PLANNING_TextChanged(object sender, EventArgs e)
        {
            string s,s1;
            double ID;
            int i, j,k,l,no;
            int LEN,LOC;
            string Text;
            if (CurFieldNo > 0)
            {

                s = this.Text; 
                i = s.IndexOf("\\");
                l =1;
                while (i > 0)
                {
                    s1 = s.Substring(0,  i - 1);
                    if (s.Length == (i + 1)) s = "";
                    else s = s.Substring(i + 1, s.Length-i-1);
                    j = s1.IndexOf("/");
                    ID = double.Parse(s1.Substring(0, j));
                    k = s1.IndexOf("/",j+1);
                    LOC = int.Parse(s1.Substring(j+1, k-j-1));
                    if ((CurFieldNo + LOC) == 1) { fieldTxt1.Text = ""; fieldTxt1.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 2) { fieldTxt2.Text = ""; fieldTxt2.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 3) { fieldTxt3.Text = ""; fieldTxt3.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 4) { fieldTxt4.Text = ""; fieldTxt4.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 5) { fieldTxt5.Text = ""; fieldTxt5.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 6) { fieldTxt6.Text = ""; fieldTxt6.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 7) { fieldTxt7.Text = ""; fieldTxt7.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 8) { fieldTxt8.Text = ""; fieldTxt8.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 9) { fieldTxt9.Text = ""; fieldTxt9.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 10) { fieldTxt10.Text = ""; fieldTxt10.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 11) { fieldTxt11.Text = ""; fieldTxt11.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 12) { fieldTxt12.Text = ""; fieldTxt12.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 13) { fieldTxt13.Text = ""; fieldTxt13.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 14) { fieldTxt14.Text = ""; fieldTxt14.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 15) { fieldTxt15.Text = ""; fieldTxt15.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 16) { fieldTxt16.Text = ""; fieldTxt16.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 17) { fieldTxt17.Text = ""; fieldTxt17.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 18) { fieldTxt18.Text = ""; fieldTxt18.Tag = "0"; }
                    if ((CurFieldNo + LOC) == 19) { fieldTxt19.Text = ""; fieldTxt19.Tag = "0"; }
                    i = s.IndexOf("\\");
                    l = l + 1;
                }

                s = this.Text; 
                i = s.IndexOf("\\");
                no = 0;
                while (i > 0)
                {
                    s1 = s.Substring(0,  i - 1);
                    if (s.Length == (i + 1)) s = "";
                    else s = s.Substring(i + 1, s.Length-i-1);
                    j = s1.IndexOf("/");
                    ID = double.Parse(s1.Substring(0, j));
                    k = s1.IndexOf("/",j+1);
                    LOC = int.Parse(s1.Substring(j+1, k-j-1));
                    l = s1.IndexOf("/", k + 1);
                    LEN = int.Parse(s1.Substring(k + 1, l - k-1));
                    Text = s1.Substring(l + 1, LEN);
                    if ((CurFieldNo + LOC) == 1) { fieldTxt1.Text = fieldTxt1.Text + Text ; fieldTxt1.Tag = ID.ToString();if(LOC>0) fieldTxt1.ReadOnly = true; fieldTxt2.Focus(); }
                    if ((CurFieldNo + LOC) == 2) { fieldTxt2.Text = fieldTxt2.Text + Text ; fieldTxt2.Tag = ID.ToString();if(LOC>0) fieldTxt2.ReadOnly = true; fieldTxt3.Focus(); }
                    if ((CurFieldNo + LOC) == 3) { fieldTxt3.Text = fieldTxt3.Text + Text ; fieldTxt3.Tag = ID.ToString();if(LOC>0) fieldTxt3.ReadOnly = true; fieldTxt4.Focus(); }
                    if ((CurFieldNo + LOC) == 4) { fieldTxt4.Text = fieldTxt4.Text + Text ; fieldTxt4.Tag = ID.ToString();if(LOC>0) fieldTxt4.ReadOnly = true; fieldTxt5.Focus(); }
                    if ((CurFieldNo + LOC) == 5) { fieldTxt5.Text = fieldTxt5.Text + Text ; fieldTxt5.Tag = ID.ToString();if(LOC>0) fieldTxt5.ReadOnly = true; fieldTxt6.Focus(); }
                    if ((CurFieldNo + LOC) == 6) { fieldTxt6.Text = fieldTxt6.Text + Text ; fieldTxt6.Tag = ID.ToString();if(LOC>0) fieldTxt6.ReadOnly = true; fieldTxt7.Focus(); }
                    if ((CurFieldNo + LOC) == 7) { fieldTxt7.Text = fieldTxt7.Text + Text ; fieldTxt7.Tag = ID.ToString();if(LOC>0) fieldTxt7.ReadOnly = true; fieldTxt8.Focus(); }
                    if ((CurFieldNo + LOC) == 8) { fieldTxt8.Text = fieldTxt8.Text + Text ; fieldTxt8.Tag = ID.ToString();if(LOC>0) fieldTxt8.ReadOnly = true; fieldTxt9.Focus(); }
                    if ((CurFieldNo + LOC) == 9) { fieldTxt9.Text = fieldTxt9.Text + Text ; fieldTxt9.Tag = ID.ToString();if(LOC>0) fieldTxt9.ReadOnly = true; fieldTxt10.Focus(); }
                    if ((CurFieldNo + LOC) == 10) { fieldTxt10.Text = fieldTxt10.Text + Text ; fieldTxt10.Tag = ID.ToString();if(LOC>0) fieldTxt10.ReadOnly = true; fieldTxt11.Focus(); }
                    if ((CurFieldNo + LOC) == 11) { fieldTxt11.Text = fieldTxt11.Text + Text ; fieldTxt11.Tag = ID.ToString();if(LOC>0) fieldTxt11.ReadOnly = true; fieldTxt12.Focus(); }
                    if ((CurFieldNo + LOC) == 12) { fieldTxt12.Text = fieldTxt12.Text + Text ; fieldTxt12.Tag = ID.ToString();if(LOC>0) fieldTxt12.ReadOnly = true; fieldTxt13.Focus(); }
                    if ((CurFieldNo + LOC) == 13) { fieldTxt13.Text = fieldTxt13.Text + Text ; fieldTxt13.Tag = ID.ToString();if(LOC>0) fieldTxt13.ReadOnly = true; fieldTxt14.Focus(); }
                    if ((CurFieldNo + LOC) == 14) { fieldTxt14.Text = fieldTxt14.Text + Text ; fieldTxt14.Tag = ID.ToString();if(LOC>0) fieldTxt14.ReadOnly = true; fieldTxt15.Focus(); }
                    if ((CurFieldNo + LOC) == 15) { fieldTxt15.Text = fieldTxt15.Text + Text ; fieldTxt15.Tag = ID.ToString();if(LOC>0) fieldTxt15.ReadOnly = true; fieldTxt16.Focus(); }
                    if ((CurFieldNo + LOC) == 16) { fieldTxt16.Text = fieldTxt16.Text + Text ; fieldTxt16.Tag = ID.ToString();if(LOC>0) fieldTxt16.ReadOnly = true; fieldTxt17.Focus(); }
                    if ((CurFieldNo + LOC) == 17) { fieldTxt17.Text = fieldTxt17.Text + Text ; fieldTxt17.Tag = ID.ToString();if(LOC>0) fieldTxt17.ReadOnly = true; fieldTxt18.Focus(); }
                    if ((CurFieldNo + LOC) == 18) { fieldTxt18.Text = fieldTxt18.Text + Text ; fieldTxt18.Tag = ID.ToString();if(LOC>0) fieldTxt18.ReadOnly = true; fieldTxt19.Focus(); }
                    if ((CurFieldNo + LOC) == 19) { fieldTxt19.Text = fieldTxt19.Text + Text ; fieldTxt19.Tag = ID.ToString();if(LOC>0) fieldTxt19.ReadOnly = true; dataGridViewSub.Focus(); }
                    no = no + 1;
                    i = s.IndexOf("\\");
                }

                CurFieldNo = 0;
                this.Text = "Form LABEL BARCODE PLANNING";
            }
            if (CurFieldNo == 0)
            {
                s = this.Text;
                i = s.IndexOf("\\");
                if (i > 0)
                {
                    s1 = s.Substring(0, i - 1);
                    if (s.Length == (i + 1)) s = "";
                    else s = s.Substring(i + 1, s.Length - i - 1);
                    j = s1.IndexOf("/");
                    ID = double.Parse(s1.Substring(0, j));
                    this.ID = ID;
                    if(ID>0)
                        Loading_Data(ID.ToString());
                    this.Text = "Form LABEL BARCODE PLANNING";
                }
            }
        }

        private void treeViewSub_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.Alt) && (e.KeyCode == Keys.X) )
            {
                this.Dispose();
            }
            if (e.KeyCode == Keys.Escape)
            {
                panelSub.Visible = false;
                fieldTxt1.Focus();
            }
            if ((e.KeyCode == Keys.F1) && (Menu01.Enabled)) Add_Rec();
            if (e.KeyCode == Keys.F2) Edit_Rec();
            if (e.KeyCode == Keys.F3) Delete_Rec();
        }
        private void treeViewSub_Leave(object sender, EventArgs e)
        {
            panelSub.Visible = false;
            fieldTxt1.Focus();
        }
        private void Add_Rec()
        {
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            bool SSw=true ;
            if ((panelSub.Location.Y == 112) && (Menu01.Enabled))
            {
                Menu01.Enabled = false;
                try
                {
                    double max;
                    DateTime d;
                    SqlCommand cmdDateTime = new SqlCommand("Select getdate() ", sqlCnn);
                    sqlCnn.Open();
                    d = DateTime.Parse(cmdDateTime.ExecuteScalar().ToString());
                    sqlCnn.Close();
                    SqlCommand cmdCount = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING ", sqlCnn);
                    sqlCnn.Open();
                    double No = double.Parse(cmdCount.ExecuteScalar().ToString());
                    sqlCnn.Close();
                    if (No == 0) max=1000+StID;
                    else
                    {
                      SqlCommand cmdMax = new SqlCommand("Select max(_ID) from _PFB_LABEL_BARCODE_PLANNING ", sqlCnn);
                      sqlCnn.Open();
                      max = double.Parse(cmdMax.ExecuteScalar().ToString());
                      max = max % 1000 ;
                      max = double.Parse(cmdMax.ExecuteScalar().ToString())- max + 1000+StID;
                      sqlCnn.Close();
                    }
                    ID = max;
                    string strsql = "INSERT INTO _PFB_LABEL_BARCODE_PLANNING ([_ID]"
                    +",[SERIAL]"
                    +",[DATE]"
                    +",[ESERIAL]"
                    +",[MATERIAL]"
                    +",[ADDITIVES]"
                    +",[COLOR]"
                    +",[GRADE]"
                    +",[DIE_MOLD_TYPE]"
                    +",[PRODUCT_LENGHT]"
                    +",[PRODUCT_WIDTH]"
                    +",[PRODUCT_TICKNESS]"
                    +",[PACKAGING]"
                    +",[NO_IN_BAG]"
                    +",[BAG_IN_PACK]"
                    +",[TOTAL_NO]"
                    +",[MEASUREMENT]"
                    +",[MACHINE]"
                    +",[STORAGE]"
                    +",[PLANNING_NAME]"
                    +",[DETAIL]"
                    +",[UID1]"
                    +",[UID2]"
                    +",[UID3]"
                        +", [_LastSecurityOption], [_LastSaveOption], [_LastDate], [_LastTime], [_LastDateTime], [_LastUID], [_LastStID], [_LastStatus]) values ('"
                    + max.ToString()
                    +"','"+fieldTxt1.Text
                    +"','"+fieldTxt2.Text
                    +"','0"
                    +"','"+fieldTxt3.Tag.ToString()
                    +"','"+fieldTxt4.Tag.ToString()
                    +"','"+fieldTxt5.Tag.ToString()
                    +"','"+fieldTxt6.Tag.ToString()
                    +"','"+fieldTxt7.Tag.ToString()
                    +"','"+fieldTxt8.Text
                    +"','"+fieldTxt9.Text
                    +"','"+fieldTxt10.Text
                    +"','"+fieldTxt11.Tag.ToString()
                    +"','"+fieldTxt12.Text
                    +"','"+fieldTxt13.Text
                    +"','"+fieldTxt14.Text
                    +"','"+fieldTxt15.Tag.ToString()
                    +"','"+fieldTxt16.Tag.ToString()
                    +"','"+fieldTxt17.Tag.ToString()
                    +"','"+fieldTxt18.Text
                    +"','"+fieldTxt19.Text
                    +"','" + UID1.ToString()
                    +"','" + UID2.ToString()
                    +"','" + UID3.ToString()
                    +"','0','0','" + d.ToShortDateString().ToString() + "','" + d.ToShortTimeString().ToString() + "','" + d.ToString() + "','" + UID.ToString() + "','" + StID.ToString() + "','0');";

                    SqlCommand cmd = new SqlCommand(strsql, sqlCnn);
                    sqlCnn.Open();
                    cmd.ExecuteNonQuery();
                    sqlCnn.Close();
                }
                catch (Exception exc)
                {
                    MessageBox.Show(exc.Message);
                    SSw=false ;
                    ID = 0 ;
                }
                finally
                {
                    sqlCnn.Close();
                }
                if(SSw)
                {
                    treeViewSub.Nodes.Add("Add", "Please wait");
                    treeViewSub.Refresh();
                    DateTime d1 = DateTime.Now;
                    double MaxSaveID=ID,MaxSerial=-1;
                    for (; (DateTime.Now < d1.AddSeconds(1)) && (MaxSaveID==ID); )
                    {
                        try
                        {
                            SqlCommand cmdCount = new SqlCommand("Select max(_ID) from _PFB_LABEL_BARCODE_PLANNING where SERIAL="+fieldTxt1.Text, sqlCnn);
                            sqlCnn.Open();
                            MaxSaveID = double.Parse(cmdCount.ExecuteScalar().ToString());
                            sqlCnn.Close();
                            SqlCommand cmdMax = new SqlCommand("Select max(SERIAL) from _PFB_LABEL_BARCODE_PLANNING", sqlCnn);
                            sqlCnn.Open();
                            MaxSerial = double.Parse(cmdMax.ExecuteScalar().ToString()) + 1;
                            sqlCnn.Close();
                        }
                        catch (Exception exc)
                        {
                            MaxSaveID = -1;
                        }
                        finally
                        {
                            sqlCnn.Close();
                        }
                    }
                    if (MaxSaveID != ID)
                    {
                        try
                        {
                            string strsql = "delete _PFB_LABEL_BARCODE_PLANNING Where _ID=" + ID.ToString();
                            SqlCommand cmd = new SqlCommand(strsql, sqlCnn);
                            sqlCnn.Open();
                            cmd.ExecuteNonQuery();
                            sqlCnn.Close();
                        }
                        catch (Exception exc)
                        {
                        }
                        finally
                        {
                            sqlCnn.Close();
                        }
                        fieldTxt1.Text = MaxSerial.ToString() ;
                        MessageBox.Show("This SERIAL saved before " + "\n" + " The First avilable SERIAL is equal " + MaxSerial.ToString());
                    }
                    else
                    {
                        SqlCommand cmdActive = new SqlCommand("update _PFB_LABEL_BARCODE_PLANNING Set _LastStatus='1' Where _ID=" + ID.ToString(), sqlCnn);
                        sqlCnn.Open();
                        cmdActive.ExecuteNonQuery();
                        sqlCnn.Close();
                        //SqlCommand cmdStatus1 = new SqlCommand("update _SUPITEMBUYREQUEST Set _LastStatus='2' Where _ID=" + fieldTxt3.Tag.ToString()
                        //    , sqlCnn);
                        //sqlCnn.Open();
                        //cmdStatus1.ExecuteNonQuery();
                        //sqlCnn.Close();
                        ID = 0;
                        Free_Form();
                    }
                }
            }
            else
            {
                MessageBox.Show("Please Ress F1 "); 
                dataGridViewSub.Focus();
            }
            panelSub.Visible = false;
            fieldTxt1.Focus();
            Menu01.Enabled = true;
        }
        private void Edit_Rec()
        {
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            if (panelSub.Location.Y==113)
            {
                try
                {
                    DateTime d;
                    SqlCommand cmdDateTime = new SqlCommand("Select getdate() ", sqlCnn);
                    sqlCnn.Open();
                    d = DateTime.Parse(cmdDateTime.ExecuteScalar().ToString());
                    sqlCnn.Close();
                    string strsql = "update  _PFB_LABEL_BARCODE_PLANNING Set _ID=" + ID.ToString()
                        + ",SERIAL='"+fieldTxt1.Text+"'"
                        + ",DATE='"+fieldTxt2.Text+"'"
                        + ",ESERIAL='0'"
                        + ",MATERIAL='"+fieldTxt3.Tag.ToString()+"'"
                        + ",ADDITIVES='"+fieldTxt4.Tag.ToString()+"'"
                        + ",COLOR='"+fieldTxt5.Tag.ToString()+"'"
                        + ",GRADE='"+fieldTxt6.Tag.ToString()+"'"
                        + ",DIE_MOLD_TYPE='"+fieldTxt7.Tag.ToString()+"'"
                        + ",PRODUCT_LENGHT='"+fieldTxt8.Text+"'"
                        + ",PRODUCT_WIDTH='"+fieldTxt9.Text+"'"
                        + ",PRODUCT_TICKNESS='"+fieldTxt10.Text+"'"
                        + ",PACKAGING='"+fieldTxt11.Tag.ToString()+"'"
                        + ",NO_IN_BAG='"+fieldTxt12.Text+"'"
                        + ",BAG_IN_PACK='"+fieldTxt13.Text+"'"
                        + ",TOTAL_NO='"+fieldTxt14.Text+"'"
                        + ",MEASUREMENT='"+fieldTxt15.Tag.ToString()+"'"
                        + ",MACHINE='"+fieldTxt16.Tag.ToString()+"'"
                        + ",STORAGE='"+fieldTxt17.Tag.ToString()+"'"
                        + ",PLANNING_NAME='"+fieldTxt18.Text+"'"
                        + ",DETAIL='"+fieldTxt19.Text+"'"
                        + ",UID1='" + UID1.ToString()+"'"
                        + ",UID2='" + UID2.ToString()+"'"
                        + ",UID3='" + UID3.ToString()+"'"
                        +", _LastSecurityOption='0'"
                        +", _LastSaveOption='0'"
                        +", _LastDate='" + d.ToShortDateString().ToString() + "'"
                        +", _LastTime='" + d.ToShortDateString().ToString() + "'"
                        +", _LastDateTime='" + d.ToString() + "'"
                        +", _LastUID='" + UID.ToString() + "'"
                        +", _LastStID='" + StID.ToString() + "'"
                        +", _LastStatus='1'"

                    + " Where _ID="+ ID.ToString();
                    SqlCommand cmd = new SqlCommand(strsql, sqlCnn);
                    sqlCnn.Open();
                    cmd.ExecuteNonQuery();
                    sqlCnn.Close();
                }
                catch (Exception exc)
                {
                    MessageBox.Show(exc.Message);
                }
                finally
                {
                    sqlCnn.Close();
                }
            }
            else
            {
                MessageBox.Show("Please press F2 "); 
                dataGridViewSub.Focus();
            }
            panelSub.Visible = false;
            fieldTxt1.Focus();
        }

        private void Delete_Rec()
        {
            if (panelSub.Location.Y==114)
            {
                SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
                bool sw = true;
                try
                {
                    string strsql = "delete _PFB_LABEL_BARCODE_PLANNING Where _ID=" + ID.ToString();
                    SqlCommand cmd = new SqlCommand(strsql, sqlCnn);
                    sqlCnn.Open();
                    cmd.ExecuteNonQuery();
                    sqlCnn.Close();
                }
                catch (Exception exc)
                {
                    MessageBox.Show(exc.Message);
                    sw=false;
                }
                finally
                {
                    sqlCnn.Close();
                }
                Free_Form();
            }
            else
            {
                MessageBox.Show("Please press F3 ");
                dataGridViewSub.Focus();
            }
            panelSub.Visible = false;
            fieldTxt1.Focus();
        }
        private void Menu08_Click(object sender, EventArgs e)
        {
        }
        private void General_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.KeyCode == Keys.F1)&&(Menu01.Enabled)) Menu01_Click(sender, e);
            if ((e.KeyCode == Keys.F2)&&(Menu02.Enabled)) Menu02_Click(sender, e);
            if ((e.KeyCode == Keys.F3)&&(Menu03.Enabled)) Menu03_Click(sender, e);
            if ((e.KeyCode == Keys.F4)&&(Menu04.Enabled)&&!e.Alt) Menu04_Click(sender, e);
            if ((e.KeyCode == Keys.F5)&&(Menu05.Enabled)) Menu05_Click(sender, e);
            if ((e.KeyCode == Keys.F6)&&(Menu06.Enabled)) Menu06_Click(sender, e);
            if ((e.KeyCode == Keys.F9)&&(Menu09.Enabled)) Menu09_Click(sender, e);
            if ((e.Alt) && (e.KeyCode == Keys.X)) MenuAltX_Click(sender, e);
        }

        private void Menu01_Click(object sender, EventArgs e)
        {
            double DoubleSerial,max,No;
            bool SwS = false;
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            panelSub.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(220)))));
            panelSub.Visible = true;
            txtSubSearch.Enabled = false;
            treeViewSub.Location = new Point(3, 3);
            treeViewSub.Size = new Size(757, 372);
            panelSub.Location = new Point(12, 112);
            treeViewSub.Focus();
            treeViewSub.Nodes.Clear();
            //treeViewSub.Nodes.Add("Alarm","Alarms");
            //treeViewSub.Nodes.Add("Errors","Warnings");
            fieldTxt1.Text = fieldTxt1.Text.Trim();
            if (ID > 0)
            {
                treeViewSub.Nodes.Add("Error1", "This Record Saved before");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            try
            {
                SqlCommand cmdMax = new SqlCommand("Select max(SERIAL) from _PFB_LABEL_BARCODE_PLANNING", sqlCnn);
                sqlCnn.Open();
                max = double.Parse(cmdMax.ExecuteScalar().ToString()) + 1;
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
                max = 1;
            }
            finally
            {
                sqlCnn.Close();
            }
            try
            {
                double n = double.Parse(fieldTxt1.Text.ToString().Trim());
                if ((n <= 0) || (n > 999999999))
                    SwS = true;
            }
            catch (Exception exc)
            {
                SwS = true;
            }
            finally
            {
            }
            if (fieldTxt1.Text.ToString().Length > 0)
            {
                SqlCommand cmdCount = new SqlCommand("Select Count(SERIAL) from _PFB_LABEL_BARCODE_PLANNING Where SERIAL="+fieldTxt1.Text.ToString()+" and _ID <>"+ID.ToString(), sqlCnn);
                sqlCnn.Open();
                DoubleSerial = double.Parse(cmdCount.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            else
            {
                DoubleSerial = 0;
                treeViewSub.Nodes.Add("Error7", "SERIAL is Empty");
                SwS = true;
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (DoubleSerial>0)
            {
                treeViewSub.Nodes.Add("Error1", "Duplicate SERIAL" );
                SwS = true;
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            bool TSw2 = true;
            try
            {
              if (string.IsNullOrEmpty(fieldTxt2.Text.Trim())) TSw2 = false;
              if (double.Parse(fieldTxt3.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt4.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt5.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt6.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt7.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt11.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt15.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt16.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt17.Tag.ToString ()) < 1000) TSw2 = false;
            }
            catch (Exception exc)
            {
                TSw2 = false;
            }
            finally
            {
            }
            if (TSw2 == false)
            {
                treeViewSub.Nodes.Add(" Some Data missing .");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            bool TSw = true;
            for (int i = 0; i < dataGridViewSub.Rows.Count - 1; i++)
            {
                bool TSw1 = true;
                try
                {
                }
                catch (Exception exc)
                {
                    TSw1 = false;
                }
                finally
                {
                }
                if (TSw1 == false)
                {
                    int j = i + 1;
                    treeViewSub.Nodes.Add("Row"+i.ToString("0"), "The Row Number "+j.ToString()+" has missing data .");
                    TSw = false;
                }
            }
            if (TSw == false)
            {
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (SwS)
            {
                treeViewSub.Nodes.Add("Error5", "SERIAL is from 1 to 999999999" + "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (panelSub.BackColor != System.Drawing.Color.Red) 
            {
                treeViewSub.Nodes.Add("Quit", "Save is avilable");
                treeViewSub.Nodes.Add("Quit", "Press F1 again to Save  ");
            }
        }

        private void Menu02_Click(object sender, EventArgs e)
        {
            double DoubleSerial,max,No=0;
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            panelSub.Visible = true;
            txtSubSearch.Enabled = false;
            treeViewSub.Location = new Point(3, 3);
            treeViewSub.Size = new Size(757, 372);
            panelSub.Location = new Point(12, 113);
            treeViewSub.Focus();
            treeViewSub.Nodes.Clear();
            //treeViewSub.Nodes.Add("Alarm","Alarms");
            //treeViewSub.Nodes.Add("Errors","Warnings");
            panelSub.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(220)))));
            fieldTxt1.Text = fieldTxt1.Text.Trim();
            try
            {
                SqlCommand cmdMax = new SqlCommand("Select max(SERIAL) from _PFB_LABEL_BARCODE_PLANNING", sqlCnn);
                sqlCnn.Open();
                max = double.Parse(cmdMax.ExecuteScalar().ToString()) + 1;
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
                max = 1;
            }
            finally
            {
                sqlCnn.Close();
            }
            try
            {
                double n = double.Parse(fieldTxt1.Text.ToString());
                if ((n <= 0) || (n > 999999999))
                {
                    treeViewSub.Nodes.Add("Error5", "SERIAL is from 1 to 999999999" + "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                    panelSub.Location = new Point(12, 115);
                    panelSub.BackColor = System.Drawing.Color.Red;
                }
                if (n != CurSerial)
                {
                    treeViewSub.Nodes.Add("Error8", "SERIAL Chenged!!!"+ "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                    panelSub.Location = new Point(12, 115);
                    panelSub.BackColor = System.Drawing.Color.Red;
                }
            }
            catch (Exception exc)
            {
                treeViewSub.Nodes.Add("Error5", "SERIAL is from 1 to 999999999" + "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
            }
            if (fieldTxt1.Text.ToString().Length > 0)
            {
                SqlCommand cmdCount = new SqlCommand("Select Count(SERIAL) from _PFB_LABEL_BARCODE_PLANNING Where SERIAL="+fieldTxt1.Text.ToString()+" and _ID <>"+ID.ToString(), sqlCnn);
                sqlCnn.Open();
                DoubleSerial = double.Parse(cmdCount.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            else
            {
                DoubleSerial = 0;
                treeViewSub.Nodes.Add("Error7", "SERIAL is empty" + "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (DoubleSerial>0)
            {
                treeViewSub.Nodes.Add("Error1", "SERIAL is Duplicated" + "\n" + " The First avilable SERIAL is equal to " + max.ToString());
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            bool TSw2 = true;
            try
            {
              if (string.IsNullOrEmpty(fieldTxt2.Text.Trim())) TSw2 = false;
              if (double.Parse(fieldTxt3.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt4.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt5.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt6.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt7.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt11.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt15.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt16.Tag.ToString ()) < 1000) TSw2 = false;
              if (double.Parse(fieldTxt17.Tag.ToString ()) < 1000) TSw2 = false;
            }
            catch (Exception exc)
            {
                TSw2 = false;
            }
            finally
            {
            }
            if (TSw2 == false)
            {
                treeViewSub.Nodes.Add(" Some missing Data in above of FORM .");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            bool TSw = true;
            for (int i = 0; i < dataGridViewSub.Rows.Count - 1; i++)
            {
                bool TSw1 = true;
                try
                {
                }
                catch (Exception exc)
                {
                    TSw1 = false;
                }
                finally
                {
                }
                if (TSw1 == false)
                {
                    int j = i + 1;
                    treeViewSub.Nodes.Add("Row"+i.ToString("0"), "Row number "+j.ToString()+" has missing data .");
                    TSw = false;
                }
            }
              double IDCheck = 0;
            try
            {
                SqlCommand cmdIDCheck = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING Where  _LastStatus='1' and _ID =" + ID.ToString(), sqlCnn);
                sqlCnn.Open();
                IDCheck = double.Parse(cmdIDCheck.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
                treeViewSub.Nodes.Add("Error1", "Retrive Error");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
            }
            if ((IDCheck != 1) || (ID == 0))
            {
                //treeViewSub.Nodes.Add("Error1", "This ID dosen't Found");
               // panelSub.Location = new Point(12, 115);
                //panelSub.BackColor = System.Drawing.Color.Red;
            }
            
            bool IDUsageSw = false;
            if (Setting.Used_Rec_NO("_PFB_LABEL_BARCODE", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named LABEL BARCODE is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_TRANSACTIONRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE TRANSACTION is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_BARCODE_INVENTORYRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE BARCODE INVENTORY is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_INVENTORYRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE INVENTORY is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_BARCODE_STOCK_CARD", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE BARCODE STOCK CARD is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_STOCK_CARD", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE STOCK CARD is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_PRODUCT_FORMULARows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named PRODUCT FORMULA is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_CALCULATE_THE_DEVIATION_FROM_FORMULARows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named CALCULATE THE DEVIATION FROM FORMULA is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (IDUsageSw == true)
            {
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            
            double UsedRec = 0;
            try
            {
                SqlCommand cmdCount1 = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING Where  _LastStatus!='1' and _ID =" + ID.ToString(), sqlCnn);
                sqlCnn.Open();
                UsedRec = double.Parse(cmdCount1.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
            }
            finally
            {
            }
            if (Setting.Used_Rec_NO("_PFB_LABEL_BARCODE_PLANNING", "_ID", ID) != 1)
            {
                treeViewSub.Nodes.Add("Error1", "This ID can not be found");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (UsedRec > 0)
            {
                treeViewSub.Nodes.Add("Error1", "This REC used and can not to edit");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
                TSw = false;
            }
            if (TSw == false)
            {
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (panelSub.BackColor != System.Drawing.Color.Red) 
            {
                treeViewSub.Nodes.Add("Quit", "There is a possibility of EDIT");
                treeViewSub.Nodes.Add("Quit", "EDIT By press F2 again");
            }
        }

        private void Menu03_Click(object sender, EventArgs e)
        {
            bool sw = true ;
            panelSub.Visible = true;
            txtSubSearch.Enabled = false;
            treeViewSub.Location = new Point(3, 3);
            treeViewSub.Size = new Size(757, 372);
            panelSub.Location = new Point(12, 114);
            treeViewSub.Focus();
            treeViewSub.Nodes.Clear();
            //treeViewSub.Nodes.Add("Alarm","Alarms");
            //treeViewSub.Nodes.Add("Errors","Warnings");
            panelSub.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(220)))));
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            if (Setting.Used_Rec_NO("_PFB_LABEL_BARCODE_PLANNING", "_ID", ID) != 1)
            {
                treeViewSub.Nodes.Add("Error1", "This record does not exist");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            double No=0;
            double UsedRec = 0;
            try
            {
                SqlCommand cmdCount1 = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING Where  _LastStatus!='1' and _ID =" + ID.ToString(), sqlCnn);
                sqlCnn.Open();
                UsedRec = double.Parse(cmdCount1.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
            }
            finally
            {
            }
            
            bool IDUsageSw = false;
            if (Setting.Used_Rec_NO("_PFB_LABEL_BARCODE", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named LABEL BARCODE is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_TRANSACTIONRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE TRANSACTION is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_BARCODE_INVENTORYRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE BARCODE INVENTORY is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_INVENTORYRows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE INVENTORY is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_BARCODE_STOCK_CARD", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE BARCODE STOCK CARD is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_STORAGE_STOCK_CARD", "LABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named STORAGE STOCK CARD is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_PRODUCT_FORMULARows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named PRODUCT FORMULA is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (Setting.Used_Rec_NO("_PFB_CALCULATE_THE_DEVIATION_FROM_FORMULARows", "RLABEL_BARCODE_PLANNING", ID) > 0)
            {
                treeViewSub.Nodes.Add("Error5", "This record in FORM named CALCULATE THE DEVIATION FROM FORMULA is used and you can't EDIT or DELETE it ");
                IDUsageSw=true;
            }

            if (IDUsageSw == true)
            {
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            
              double IDCheck = 0;
            try
            {
                SqlCommand cmdIDCheck = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING Where  _LastStatus='1' and _ID =" + ID.ToString(), sqlCnn);
                sqlCnn.Open();
                IDCheck = double.Parse(cmdIDCheck.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
                treeViewSub.Nodes.Add("Error1", "Record can not be founded");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
            }
            if ((IDCheck != 1) || (ID == 0))
            {
                //treeViewSub.Nodes.Add("Error1", "Record can not be founded");
                //panelSub.Location = new Point(12, 115);
                //panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (UsedRec > 0)
            {
                treeViewSub.Nodes.Add("Error1", "This record used and can not delete");
                panelSub.Location = new Point(12, 115);
                panelSub.BackColor = System.Drawing.Color.Red;
            }
            if (panelSub.BackColor != System.Drawing.Color.Red) 
            {
                treeViewSub.Nodes.Add("Quit", "Press F3 again to delete ");
            }
        }

        private void Menu04_Click(object sender, EventArgs e)
        {
            double No = 0;
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            try
            {
                SqlCommand cmdCount = new SqlCommand("Select Count(_ID) from _PFB_LABEL_BARCODE_PLANNING Where _ID>0 and _ID=" + ID.ToString() , sqlCnn);
                sqlCnn.Open();
                No = double.Parse(cmdCount.ExecuteScalar().ToString());
                sqlCnn.Close();
            }
            catch (Exception exc)
            {
                MessageBox.Show(exc.Message);
            }
            finally
            {
                sqlCnn.Close();
            }
            if (No > 0)
            {
                PFB_LABEL_BARCODE_PLANNINGPrn f ;
                if(ID==0) f = new  PFB_LABEL_BARCODE_PLANNINGPrn("");
                else f = new  PFB_LABEL_BARCODE_PLANNINGPrn(ID.ToString());
                f.Left = 0;
                f.Top = 0;
                f.PrevForm = this;
                f.NextForm = null;
                NextForm = this;
                f.UID = UID;
                f.StID = StID;
                f.ShowDialog();
            }
        }
        private void Menu05_Click(object sender, EventArgs e)
        {
            CurFieldNo = 0 ; 
            PFB_LABEL_BARCODE_PLANNINGRpt f = new  PFB_LABEL_BARCODE_PLANNINGRpt("");
            f.Left = 0;
            f.Top = 0;
            f.PrevForm = this;
            f.NextForm = null;
            NextForm = this;
            f.UID = UID;
            f.StID = StID;
            f.ShowDialog();
        }

        private void Menu06_Click(object sender, EventArgs e)
        {
            ID = 0;
            Free_Form();
        }

        private void Menu07_Click(object sender, EventArgs e)
        {
        }
        private void Menu09_Click(object sender, EventArgs e)
        {

        }

        private void MenuAltX_Click(object sender, EventArgs e)
        {
            this.Dispose();
        }   

        private void dataGridViewSub_KeyDown(object sender, KeyEventArgs e)
        {
            int cRow = dataGridViewSub.CurrentCell.RowIndex;
            CurFieldNo = -(dataGridViewSub.CurrentCell.ColumnIndex);
            General_KeyDown(sender,e);
            if (e.KeyCode == Keys.Enter)
            {
                e.SuppressKeyPress = true;
                dataGridViewSub.Rows[cRow].Cells[-CurFieldNo].Selected = false;
                if (-CurFieldNo < dataGridViewSub.ColumnCount - 1)
                {
                    dataGridViewSub.CurrentCell= dataGridViewSub.Rows[cRow].Cells[-CurFieldNo + 1];
                }
                else
                {
                    if (cRow < dataGridViewSub.Rows.Count - 1)
                        dataGridViewSub.CurrentCell = dataGridViewSub.Rows[cRow + 1].Cells[1];
                    else fieldTxt1.Focus();
                }


            }
        }   
        private void fieldTxt2_Leave(object sender, EventArgs e)
        {
            int i, j,k;
            string s1, s2;
            string y, m, d;
            SqlConnection sqlCnn = new SqlConnection(SQLConnStr);
            try
            {
                s1 = fieldTxt2.Text;
                i = s1.IndexOf("/");
                j = s1.IndexOf("/", i + 1);
                k = int.Parse(s1.Substring(0, i));
                m = k.ToString("00");
                d = int.Parse(s1.Substring(i+1, j-i-1)).ToString("00");
                y = int.Parse(s1.Substring(j+1, s1.Length-j - 1)).ToString("0000");
                s2 = m + "/" + d + "/" + y;
                SqlCommand cmdCount = new SqlCommand("Select DATEDIFF(day, '" + s2 + "', getdate())", sqlCnn);
                sqlCnn.Open();
                double No = double.Parse(cmdCount.ExecuteScalar().ToString());
                sqlCnn.Close();
                 fieldTxt2.Text = s2;
            }
            catch (Exception exc)
            {
                fieldTxt2.Text = "";
            }
            finally
            {
                sqlCnn.Close();
            }
        }

        private void PFB_LABEL_BARCODE_PLANNING_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == 13)
                e.Handled = true;
        }
    }
}

