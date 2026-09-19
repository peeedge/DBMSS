# Start a local preview server for this folder.
# Usage: .\bootstrap.ps1
# Optional: .\bootstrap.ps1 -Port 8080

param(
  [int]$Port = 8080,
  [string]$Bind = "127.0.0.1"
)

$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
  $python = Get-Command py -ErrorAction SilentlyContinue
}
if (-not $python) {
  Write-Error "Python was not found on PATH. Install Python 3, then run this script again."
  exit 1
}

$pythonArgs = @("-m", "http.server", "$Port", "--bind", $Bind)
if ($python.Name -eq "py.exe") {
  $pythonArgs = @("-3") + $pythonArgs
}

$url = "http://${Bind}:${Port}/"
Write-Host "Serving $PSScriptRoot"
Write-Host "Open $url"
Write-Host "Press Ctrl+C to stop."
Write-Host ""

& $python.Source @pythonArgs
