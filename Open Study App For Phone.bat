@echo off
cd /d "%~dp0"

set "APP_PORT=4173"
set "LOCAL_IP="

for /f "tokens=2 delims=:" %%A in ('ipconfig ^| findstr /R /C:"IPv4 Address"') do (
  set "LOCAL_IP=%%A"
  goto :found_ip
)

:found_ip
set "LOCAL_IP=%LOCAL_IP: =%"

echo.
echo Keep this window open while using the app on your phone.
echo.
echo Computer:
echo   http://localhost:%APP_PORT%/
echo.
if defined LOCAL_IP (
  echo Phone on the same Wi-Fi:
  echo   http://%LOCAL_IP%:%APP_PORT%/
  echo.
) else (
  echo I could not find the Wi-Fi address automatically.
  echo Run ipconfig and look for IPv4 Address, then open:
  echo   http://YOUR-IP:%APP_PORT%/
  echo.
)
echo If Windows Firewall asks, choose Allow access for private networks.
echo.

py -m http.server %APP_PORT% --bind 0.0.0.0
if errorlevel 1 (
  echo.
  echo Trying again with python instead of py...
  python -m http.server %APP_PORT% --bind 0.0.0.0
)

pause
