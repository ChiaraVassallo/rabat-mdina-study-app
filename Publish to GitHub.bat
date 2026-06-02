@echo off
setlocal
cd /d "%~dp0"

echo Publishing Rabat and Mdina Study App to GitHub...
echo.

"C:\Program Files\Git\cmd\git.exe" --git-dir="%~dp0codex-git-data" --work-tree="%~dp0." add -A
"C:\Program Files\Git\cmd\git.exe" --git-dir="%~dp0codex-git-data" --work-tree="%~dp0." commit -m "Update study app"

"C:\Program Files\Git\cmd\git.exe" --git-dir="%~dp0codex-git-data" --work-tree="%~dp0." push -u origin main

echo.
if errorlevel 1 (
  echo Publishing failed. If GitHub asks you to sign in, finish the sign-in and run this file again.
) else (
  echo Publishing complete.
)
echo.
pause
