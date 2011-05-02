var VideoShots = {

    confParalax: {

        paralaxHorizontal: 40,
        paralaxVertical: 10

    },
    
    confStill: {

        paralaxHorizontal: 0,
        paralaxVertical: 0

    },
    
    introLayers: [{

        path: "files/videos/intro.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 22000

    }],

	s01_01: [{
        path: "files/videos/city/s01_layer01.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 3120
	}],
	
	s01_03: [{
        path: "files/videos/city/s03_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -900,
		duration: 8120
	},{
        path: "files/videos/city/s03_layer02.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -800,
        colorScale: .9,
        threshold: .28,
        alphaFadeout: .35,
		width: 2, height: 2
	},{
        path: "files/videos/city/s03_layer01.webm",
        shaderId: VIDEO_KEYED,
        z: -700,
        colorScale: .9,
        threshold: .28,
        alphaFadeout: .35
	}],
	
	s01_06: [{
        path: "files/videos/city/s06_layer02.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 2030	
	},{
        path: "files/videos/city/s06_layer01.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -900,
		colorScale: .99,
        threshold: .45,
        alphaFadeout: .35	
	}],
	
	s01_09: [
		{       
		    path: "files/videos/city/s09_layer03.webm",
	        shaderId: VIDEO_KEYED_DISTORT,
	        z: -1000,
			duration: 8230,
			colorScale: .99,
	        threshold: .45,
	        alphaFadeout: .35	
		},{       
		    path: "files/videos/city/s09_layer02.webm",
	        shaderId: VIDEO_KEYED,
	        z: -900,
			colorScale: .99,
	        threshold: .45,
	        alphaFadeout: .35,
			width: 1.4, height: 1
		},{       
		    path: "files/videos/city/s09_layer01.webm",
	        shaderId: VIDEO_KEYED,
	        z: -700,
			colorScale: .99,
	        threshold: .45,
	        alphaFadeout: .35
		}
	],
   
    dunesLayers: [{

        path: "files/videos/transition_dunes.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1000,
		duration: 20000

    }],
    
    
    s02_01: [{

        path: "files/videos/prairie/s01_layer04.webm",
        shaderId: VIDEO_OPAQUE_DISTORT,
        z: -1400,
		duration: 9230 // in millis

    }, {

        path: "files/videos/prairie/s01_layer03.webm",
        shaderId: VIDEO_KEYED,
        z: -1000,
        colorScale: .99,
        threshold: .45,
        alphaFadeout: .35

    }, {

        path: "files/videos/prairie/s01_layer02.webm",
        shaderId: VIDEO_KEYED,
        z: -50,
        colorScale: .91,
        threshold: .28,
        alphaFadeout: .7,
        width: 1.05,
        height: 1.05

    }, {

        path: "files/videos/prairie/s01_layer01.webm",
        shaderId: VIDEO_KEYED,
        z: -30,
        colorScale: .8,
        threshold: .28,
        alphaFadeout: .7,
        width: 1.05,
        height: 1.05

    }],
    
    s02_02: [{

        path: "files/videos/prairie/s02_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 2020

    }, {

        path: "files/videos/prairie/s02_layer02.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -1000,
        colorScale: .99,
        threshold: .45,
        alphaFadeout: .35

    }, {

        path: "files/videos/prairie/s02_layer01.webm",
        shaderId: VIDEO_HALFALPHA,
        z: -990
		
    }],
    
    s02_03: [{
        path: "files/videos/prairie/s03_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 2030
    }, {
        path: "files/videos/prairie/s03_layer02.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -1000,
        colorScale: .99,
        threshold: .45,
        alphaFadeout: .35
    }, {
        path: "files/videos/prairie/s03_layer01.webm",
        shaderId: VIDEO_HALFALPHA,
        z: -990,
    }],
    
    s02_04: [{
        path: "files/videos/prairie/s04_layer03.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 5000
    }, {
        path: "files/videos/prairie/s04_layer02.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -1000,
        colorScale: 1,
        threshold: .3,
        alphaFadeout: .3
    }, {
        path: "files/videos/prairie/s04_layer01.webm",
        shaderId: VIDEO_HALFALPHA,
        z: -990,
    }],
    
    s02_06: [{
        path: "files/videos/prairie/s06_layer02.webm",
        shaderId: VIDEO_OPAQUE,
        z: -1010,
		duration: 6060
    }, {
        path: "files/videos/prairie/s06_layer01.webm",
        shaderId: VIDEO_KEYED_DISTORT,
        z: -1000,
        colorScale: 1,
        threshold: .3,
        alphaFadeout: .3
    }]
}












