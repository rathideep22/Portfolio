# PowerShell script to create placeholder images for the portfolio

# Create directories if they don't exist
Write-Host "Creating directories..." -ForegroundColor Green
if (-not (Test-Path -Path "public")) {
    New-Item -Path "public" -ItemType Directory
}
if (-not (Test-Path -Path "public\projects")) {
    New-Item -Path "public\projects" -ItemType Directory
}

# Function to create placeholder SVG image
function Create-PlaceholderSVG {
    param (
        [string]$FilePath,
        [string]$Text,
        [string]$BgColor = "#1e3a8a",
        [string]$TextColor = "#ffffff"
    )
    
    $svg = @"
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$BgColor"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="$TextColor" text-anchor="middle" dominant-baseline="middle">$Text</text>
</svg>
"@
    
    $svg | Out-File -FilePath $FilePath -Encoding utf8
    Write-Host "Created: $FilePath" -ForegroundColor Cyan
}

# Create profile image placeholder
Write-Host "Creating profile image..." -ForegroundColor Green
Create-PlaceholderSVG -FilePath "public\profile-placeholder.jpg" -Text "Deep Rathi" -BgColor "#1e3a8a"

# Create project image placeholders
Write-Host "Creating project placeholders..." -ForegroundColor Green
Create-PlaceholderSVG -FilePath "public\projects\precision-edge-placeholder.jpg" -Text "PrecisionEdge - Data Analysis AI Agent"
Create-PlaceholderSVG -FilePath "public\projects\grow-placeholder.jpg" -Text "GROW - AI Learning Enhancement"
Create-PlaceholderSVG -FilePath "public\projects\ayubot-placeholder.jpg" -Text "AyuBOT - Medical Chatbot"
Create-PlaceholderSVG -FilePath "public\projects\traffic-placeholder.jpg" -Text "Traffic Prediction Model"
Create-PlaceholderSVG -FilePath "public\projects\iot-placeholder.jpg" -Text "IoT Fruit Ripeness Detection"
Create-PlaceholderSVG -FilePath "public\projects\lanescan-placeholder.jpg" -Text "LaneScan Net"

Write-Host "All placeholder images created successfully!" -ForegroundColor Green
Write-Host "You can now run the frontend with 'npm run dev'" -ForegroundColor Yellow 