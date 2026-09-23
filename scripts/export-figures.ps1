# 図解ページ（src/pages/figures/*）を1600×900のPNGに書き出す。
# 使い方: npm run build のあと、リポジトリ直下で  pwsh scripts/export-figures.ps1
# 出力: static/img/figures/<ja|en>/<名前>.png （SNS・Booth・README などサイト外で使う用）
# ページ内では画像ではなくコンポーネントを直接表示しているので、このPNGはサイト表示には使っていない。

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$figures = @('obs-flow', 'dummy-head', 'camsync-limits')
$port = 3055
$base = "http://localhost:$port/OVR-DummyHeadMic-Docs"

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Edge または Chrome が見つかりません。' }

$server = Start-Process npx.cmd -ArgumentList 'docusaurus', 'serve', '--port', $port, '--no-open' `
  -WorkingDirectory $root -PassThru -WindowStyle Hidden
try {
  $ready = $false
  for ($i = 0; $i -lt 60 -and -not $ready; $i++) {
    try { Invoke-WebRequest "$base/figures/$($figures[0])" -UseBasicParsing -TimeoutSec 2 | Out-Null; $ready = $true }
    catch { Start-Sleep 1 }
  }
  if (-not $ready) { throw "サーバーが起動しませんでした（$base）。先に npm run build を実行してください。" }
  foreach ($name in $figures) {
    foreach ($locale in 'ja', 'en') {
      $prefix = if ($locale -eq 'ja') { '' } else { "/$locale" }
      $outDir = Join-Path $root "static\img\figures\$locale"
      New-Item -ItemType Directory -Force $outDir | Out-Null
      $out = Join-Path $outDir "$name.png"
      Remove-Item $out -ErrorAction SilentlyContinue
      & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1600,900 `
        "--screenshot=$out" "$base$prefix/figures/$name" 2>&1 | Out-Null
      # msedge.exe は撮影完了前に戻ることがあるので、ファイルができるまで待つ（先にサーバーを止めると撮り損ねる）
      for ($i = 0; $i -lt 30 -and -not (Test-Path $out); $i++) { Start-Sleep 1 }
      if (-not (Test-Path $out)) { throw "書き出しに失敗しました: $out" }
      Start-Sleep 1
      Write-Host "wrote $out"
    }
  }
} finally {
  # npx 経由の node も含めて止める
  & taskkill /PID $server.Id /T /F 2>&1 | Out-Null
}
