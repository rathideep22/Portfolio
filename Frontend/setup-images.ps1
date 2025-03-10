# PowerShell script to set up image locations

# Make sure the public directory exists
if (-not (Test-Path -Path "public")) {
    New-Item -Path "public" -ItemType Directory
}

Write-Host "The following images should be placed in the 'public' directory:" -ForegroundColor Green
Write-Host "1. profile.jpeg - Your profile picture"
Write-Host "2. precision-edge.jpeg - PrecisionEdge project image"
Write-Host "3. grow.jpeg - GROW project image"
Write-Host "4. ayubot.jpeg - AyuBOT project image"
Write-Host "5. traffic-prediction.jpeg - Traffic Prediction project image"
Write-Host "6. iot-fruit.jpeg - IoT Fruit Ripeness project image"
Write-Host "7. lanescan.jpeg - LaneScan Net project image"
Write-Host ""
Write-Host "Please ensure all these image files are placed directly in the 'public' folder." -ForegroundColor Yellow
Write-Host "If you have these images in another location, you can copy them manually or modify this script." -ForegroundColor Yellow

# Check if any of the required images are missing
$requiredImages = @(
    "profile.jpeg",
    "precision-edge.jpeg",
    "grow.jpeg", 
    "ayubot.jpeg", 
    "traffic-prediction.jpeg", 
    "iot-fruit.jpeg", 
    "lanescan.jpeg"
)

$missingImages = @()
foreach ($image in $requiredImages) {
    if (-not (Test-Path -Path "public\$image")) {
        $missingImages += $image
    }
}

if ($missingImages.Count -gt 0) {
    Write-Host "The following images are missing:" -ForegroundColor Red
    foreach ($image in $missingImages) {
        Write-Host "- $image" -ForegroundColor Red
    }
    Write-Host "Please place these images in the 'public' folder before running the application." -ForegroundColor Red
} else {
    Write-Host "All required images are present!" -ForegroundColor Green
    Write-Host "You can now run the frontend with 'npm run dev'" -ForegroundColor Cyan
} 