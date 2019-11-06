[Visualization](https://event.cwi.nl/lsde/2018/results/group13/)

# Description

As part of the Masters course in Large Scale Data Engineering, our team (Arumoy Shome, Cees Portegies and I) developed a 3D model of all the buildings in the Netherlands. 

The Actuale Hoogtekaart Nederland (AHN) is a 2TB point-cloud dataset, consisting of 3D points measured using LIDAR technology. LIDAR stands for Light Detection and Ranging - a remote sensing method that uses light in the form of a pulsed laser to measure ranges to the Earth, in the case of AHN taken from an airplane. 

We also used XML descriptions containing all Dutch addresses and 2D building plan polygons. We turned these 2D plans into 3D models, using the point cloud dataset.

The 3D point cloud data was masked and intersected with the kadaster 2D data, and the remaining points were fed into the 3dfier tool from TU Delft to generate 3D shapes for the buildings.

In the resulting three.js WebGL visualization you can use the mouse scroll wheel to zoom (press S and move mouse to zoom if you do not have a scroll wheel). The most centric yellow tile contains the 3D model for the city of Amsterdam (displayed below the map).

This directory contains the visualization code for the project. Simply open
`mapviewer.html` in the browser and follow the onscreen instructions. You can also directly view the visualization [here](https://event.cwi.nl/lsde/2018/results/group13/).

## Requirements

Only browsers supporting WGL can be used to view this page, please consult [this
page](https://threejs.org/docs/#manual/en/introduction/Browser-support) for a
list of supported browsers.

Additionally, your browser must also be configured to allow loading files from a
file system, please consult [this
document](https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally)
and follow the instructions under the **Change local files security policy**
section.
