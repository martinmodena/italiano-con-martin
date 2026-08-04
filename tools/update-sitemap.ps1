$ErrorActionPreference = 'Stop'
$sitemapPath = Join-Path $PSScriptRoot '..\sitemap.xml'
$xml = Get-Content -LiteralPath $sitemapPath -Raw
$xml = [regex]::Replace($xml, '\s*<url><loc>https://italianoconmartin.com/(en|es|fr|cs|pl|tr|de|ja)/.*?</url>', '')
$langs = @('en','es','fr','cs','pl','tr','de','ja')
$sections = @('readings','grammar','stories')
$today = '2026-08-04'
$entries = [System.Text.StringBuilder]::new()
foreach ($lang in $langs) {
  foreach ($section in @('') + $sections) {
    $url = if ($section) { "https://italianoconmartin.com/$lang/$section/" } else { "https://italianoconmartin.com/$lang/" }
    [void]$entries.AppendLine("  <url><loc>$url</loc><lastmod>$today</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>")
  }
}
$xml = $xml.Replace('</urlset>', "$($entries.ToString())</urlset>")
Set-Content -LiteralPath $sitemapPath -Value $xml -Encoding UTF8
