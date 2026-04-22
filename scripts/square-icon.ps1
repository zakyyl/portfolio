Add-Type -AssemblyName System.Drawing
$imagePath = "d:\WEB DEV\portfolio\public\images\zave.png"
$bmp = [System.Drawing.Image]::FromFile($imagePath)
$size = [math]::Max($bmp.Width, $bmp.Height)
$newBmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.Clear([System.Drawing.Color]::Transparent)
$x = [int](($size - $bmp.Width) / 2)
$y = [int](($size - $bmp.Height) / 2)
$g.DrawImage($bmp, $x, $y, $bmp.Width, $bmp.Height)
$g.Dispose()
$bmp.Dispose()
$newBmp.Save("d:\WEB DEV\portfolio\public\images\zave-square.png", [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
