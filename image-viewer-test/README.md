Setting up OpenSeadragon on a Mac and using it without an image server

Step 1) 
Install XCode or Command Line Tools for XCode so you can install Homebrew

Step 2)
Install [Homebrew](https://brew.sh/), which will also include a copy of ImageMagick

Step 3) 
Download [MagickSlicer](https://github.com/VoidVolker/MagickSlicer)

Step 4)
To use MagickSlicer, cd to the downloaded folder and enter the following command in Terminal
	./magick-slicer.sh path/to/image/file.jpg

Step 5)
	In the MagickSlicer folder, you’ll find a .dzi file and a folder of image tiles for your image

Step 6)
	Install [OpenSeadragon](https://openseadragon.github.io/#download)

Step 7)
	Create a new project. The image tiles files and .dzi file will need to be included in the project folder

Note: For some reason, I can’t get the image to show unless I add a height to the container inline

Additional Resources:
http://blogs.library.duke.edu/bitstreams/2015/11/20/zoomable-hi-res-images-hopping-aboard-the-openseadragon-bandwagon/
