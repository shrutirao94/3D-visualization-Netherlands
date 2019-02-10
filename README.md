# 3D Kadaster - Buildings in The Netherlands

As part of the Large Scale Data Engineering course, we created a 3D map of all
the buildings in certain areas in the Netherlands. 2D polygon data and Point
Cloud data were used to generate the 3D buildings. The j2D polygon data
comprised of building *layouts* in *<x,y>* points while the point cloud data [AHN2](http://www.ahn.nl/index.html)  
comprised of 3D points of the topographies and heights of the buildings. These
two data sets (16GB and 4TB in size) were combined using the Dutch national
cluster and computations were made to isolate and obtain 3D building meshes.
Due to visualization restrictions (a part of the assignment), only portions of
the dataset were visualized using [threejs](https://threejs.org/)

The paper decribing the process is shown here. The final visualization can be
viewed on the Course [leaderboard](https://event.cwi.nl/lsde/2018/showcase_c1.shtml). To view the visualization, ensure that your browser is Chrome or Safari and upto date.
1. Click on a coloured tile. To view the city of Amsterdam, click on the
   central yellow tile, up and left of the green tile. 
   2. Wait for a few minutes (it is a rather large file)
   3. The visualization should show up in the space below.
   4. Use the Up and Down arrow keys to scroll across the loaded map.
   5. Use mouse scroll wheel or press S + mouse to zoom into the map.

For feedback, questions or comments please reach out to me! I would love to
hear more. 
