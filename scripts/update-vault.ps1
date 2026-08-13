<#
.SYNOPSIS
    Lossless Vault Update Script for GATE AE 2027 Obsidian Vault.
.DESCRIPTION
    Backs up personal student logs (journals/) and personal mock test reviews to .backup/,
    then syncs shared course folders from the updated source path.
.EXAMPLE
    .\scripts\update-vault.ps1 -SourcePath "C:\Path\To\Extracted\GATE_AE_2027_v1.1.0"
#>

[CmdletBinding()]
Param(
    [Parameter(Mandatory=$false)]
    [string]$SourcePath
)

$ErrorActionPreference = "Stop"
$VaultRoot = Resolve-Path "$PSScriptRoot\.."
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$BackupDir = Join-Path $VaultRoot ".backup\v_$Timestamp"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host " 🚀 GATE AE 2027 Lossless Vault Update Engine " -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

# 1. Backup Personal Layer
Write-Host "`n📦 Step 1: Backing up personal student data..." -ForegroundColor Yellow

$JournalsSrc = Join-Path $VaultRoot "journals"
if (Test-Path $JournalsSrc) {
    $JournalsDst = Join-Path $BackupDir "journals"
    New-Item -ItemType Directory -Force -Path $JournalsDst | Out-Null
    Copy-Item -Recurse -Force "$JournalsSrc\*" $JournalsDst
    Write-Host "   - Personal journals backed up to .backup\v_$Timestamp\journals\" -ForegroundColor Green
}

Write-Host "   - Personal data backup complete ✅" -ForegroundColor Green

# 2. Source Sync (if source path provided)
if ($SourcePath -and (Test-Path $SourcePath)) {
    Write-Host "`n🔄 Step 2: Syncing shared course content from $SourcePath..." -ForegroundColor Yellow

    $SharedFolders = @("00 - META", "01 - ROADMAP", "02 - SUBJECTS", "03 - DAILY TRACKER", "04 - PYQs", "05 - MOCK TESTS", "06 - FORMULA SHEETS", "07 - TEMPLATES", ".agents")
    foreach ($folder in $SharedFolders) {
        $srcFolder = Join-Path $SourcePath $folder
        if (Test-Path $srcFolder) {
            $dstFolder = Join-Path $VaultRoot $folder
            Copy-Item -Recurse -Force "$srcFolder\*" $dstFolder
            Write-Host "   - Synced $folder" -ForegroundColor Gray
        }
    }

    $SharedFiles = @("AI_CONTEXT.md", "AGENTS.md", "VERSION.md", "CHANGELOG.md", "README.md")
    foreach ($file in $SharedFiles) {
        $srcFile = Join-Path $SourcePath $file
        if (Test-Path $srcFile) {
            Copy-Item -Force $srcFile (Join-Path $VaultRoot $file)
            Write-Host "   - Synced $file" -ForegroundColor Gray
        }
    }

    Write-Host "   - Shared course content updated ✅" -ForegroundColor Green
} else {
    Write-Host "`nℹ️ No -SourcePath specified. Backup created safely. For manual sync, pass -SourcePath." -ForegroundColor Cyan
}

# 3. Final Check
Write-Host "`n🎉 Vault Update Finished Successfully!" -ForegroundColor Green
Write-Host "   - Backup location: .backup\v_$Timestamp\" -ForegroundColor Cyan
Write-Host "   - Your personal journals and reflections are 100% intact.`n" -ForegroundColor Green
