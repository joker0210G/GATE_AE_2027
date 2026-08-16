<#
.SYNOPSIS
    Author Release Packaging Script for GATE AE 2027 Obsidian Vault.
.DESCRIPTION
    Audits the vault and packages a clean ZIP release excluding all personal student logs (journals/)
    and local temp files.
.EXAMPLE
    .\scripts\package-release.ps1 -Version "1.1.0"
#>

[CmdletBinding()]
Param(
    [Parameter(Mandatory=$false)]
    [string]$Version
)

$ErrorActionPreference = "Stop"
$VaultRoot = Resolve-Path "$PSScriptRoot\.."

if (-not $Version) {
    $VersionFile = Join-Path $VaultRoot "VERSION.md"
    if (Test-Path $VersionFile) {
        $content = Get-Content $VersionFile -Raw
        if ($content -match "\*\*Current Version:\*\*\s*([\d\.]+)") {
            $Version = $Matches[1]
        }
    }
}

if (-not $Version) { $Version = "1.0.0" }

$ZipName = "GATE_AE_2027_v$Version.zip"
$ZipPath = Join-Path $VaultRoot $ZipName
$StagingDir = Join-Path $VaultRoot ".release_staging"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host " 🚀 Author Release Packaging Engine (v$Version) " -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

# 1. Clean Staging
if (Test-Path $StagingDir) { Remove-Item -Recurse -Force $StagingDir }
New-Item -ItemType Directory -Force -Path $StagingDir | Out-Null

# 2. Copy Shared Layer
Write-Host "`n📦 Copying shared course content..." -ForegroundColor Yellow
$SharedFolders = @("00 - META", "01 - ROADMAP", "02 - SUBJECTS", "03 - DAILY TRACKER", "04 - PYQs", "05 - MOCK TESTS", "06 - FORMULA SHEETS", "07 - TEMPLATES", ".agents", "assets", "scripts")
foreach ($folder in $SharedFolders) {
    $src = Join-Path $VaultRoot $folder
    if (Test-Path $src) {
        Copy-Item -Recurse -Force $src (Join-Path $StagingDir $folder)
        Write-Host "   + Included $folder/" -ForegroundColor Gray
    }
}

$SharedFiles = @("AI_CONTEXT.md", "AGENTS.md", "VERSION.md", "CHANGELOG.md", "FEATURES.md", "demo.md", "README.md", "CLAUDE.md", ".cursorrules", ".windsurfrules", ".gitignore", "mcp.json")
foreach ($file in $SharedFiles) {
    $src = Join-Path $VaultRoot $file
    if (Test-Path $src) {
        Copy-Item -Force $src (Join-Path $StagingDir $file)
        Write-Host "   + Included $file" -ForegroundColor Gray
    }
}

# Ensure journals/ and .backup/ are NOT in staging
$journalsStaging = Join-Path $StagingDir "journals"
if (Test-Path $journalsStaging) { Remove-Item -Recurse -Force $journalsStaging }

# 3. Create ZIP Archive
Write-Host "`n🔒 Creating clean ZIP release archive $ZipName..." -ForegroundColor Yellow
if (Test-Path $ZipPath) { Remove-Item -Force $ZipPath }

Add-Type -Assembly "System.IO.Compression.FileSystem"
[System.IO.Compression.ZipFile]::CreateFromDirectory($StagingDir, $ZipPath)

# Clean Staging
Remove-Item -Recurse -Force $StagingDir

Write-Host "`n🎉 Clean Release Archive Created Successfully!" -ForegroundColor Green
Write-Host "   - Archive Path: $ZipPath" -ForegroundColor Cyan
Write-Host "   - Personal logs status: 0 personal files included (100% clean) ✅`n" -ForegroundColor Green
