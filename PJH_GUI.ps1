Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form = New-Object System.Windows.Forms.Form
$form.Text = "PJH Company Launcher"
$form.Size = New-Object System.Drawing.Size(400,300)
$form.StartPosition = "CenterScreen"
$form.BackColor = "#0a1a44"
$form.ForeColor = "White"
$form.Font = "Segoe UI, 10"

# Title Label
$label = New-Object System.Windows.Forms.Label
$label.Text = "PJH COMPANY - SERVER LAUNCHER"
$label.AutoSize = $true
$label.Font = "Segoe UI, 12, style=Bold"
$label.Location = New-Object System.Drawing.Point(50,20)
$form.Controls.Add($label)

# Start API Button
$btnAPI = New-Object System.Windows.Forms.Button
$btnAPI.Text = "Start API"
$btnAPI.Size = New-Object System.Drawing.Size(120,40)
$btnAPI.Location = New-Object System.Drawing.Point(30,80)
$btnAPI.BackColor = "#1f3a78"
$btnAPI.ForeColor = "White"
$btnAPI.Add_Click({
    Start-Process cmd "/k cd C:\xampp\htdocs\utspemweb1\api && node server.js"
})
$form.Controls.Add($btnAPI)

# Open Website Button
$btnWeb = New-Object System.Windows.Forms.Button
$btnWeb.Text = "Open Website"
$btnWeb.Size = New-Object System.Drawing.Size(120,40)
$btnWeb.Location = New-Object System.Drawing.Point(200,80)
$btnWeb.BackColor = "#1f3a78"
$btnWeb.ForeColor = "White"
$btnWeb.Add_Click({
    Start-Process "http://localhost/utspemweb1/website/index.html"
})
$form.Controls.Add($btnWeb)

# Exit Button
$btnExit = New-Object System.Windows.Forms.Button
$btnExit.Text = "Exit"
$btnExit.Size = New-Object System.Drawing.Size(120,35)
$btnExit.Location = New-Object System.Drawing.Point(120,150)
$btnExit.BackColor = "#6b6b85"
$btnExit.ForeColor = "White"
$btnExit.Add_Click({
    $form.Close()
})
$form.Controls.Add($btnExit)

$form.ShowDialog()
