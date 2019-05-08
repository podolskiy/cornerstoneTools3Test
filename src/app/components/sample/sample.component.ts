import { Component, OnInit } from '@angular/core';

// Additional Libraries.
import $ from 'jquery';
import Hammer from 'hammerjs';

// Cornerstone Libraries.
import * as dicomParser from 'dicom-parser';
import * as cornerstoneMath from 'cornerstone-math';
import * as cornerstoneTools from 'cornerstone-tools';
import * as cornerstone from 'cornerstone-core/dist/cornerstone.js';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader';
import { BaseTool } from 'cornerstone-tools';

cornerstoneWADOImageLoader.webWorkerManager.initialize({
  webWorkerPath: '/assets/cornerstoneWADOImageLoaderWebWorker.min.js',
  taskConfiguration: {
    'decodeTask': {
      codecsPath: '/assets/cornerstoneWADOImageLoaderCodecs.min.js'
    }
  }
});

// CornerstoneTools Externals.
cornerstoneTools.external.$ = $;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

// CornerstoneWADOImageLoader Externals.
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  action() {

    const config = {
      touchEnabled: false,
    };
    const csTools = cornerstoneTools.init(config);

    console.log(csTools, new BaseTool());
  }

}
