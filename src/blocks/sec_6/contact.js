// .sec_7 scripts goes here


window.onload = function () {
	var styles = [
		{
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#e0efef"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"hue": "#1900ff"
				},
				{
					"color": "#c0e8e8"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"lightness": 700
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#7dcdcd"
				}
			]
		}
	];
	
	var options = {
		mapTypeControlOptions: { mapTypeIds: ['map_style']	},
		center: new google.maps.LatLng( 49.8412128, 24.026691),
		zoom: 16,
		scrollwheel: false,
		disableDefaultUI: true, 
		mapTypeId: 'map_style'
	};
	var map_item = document.getElementById('map');
	var map = new google.maps.Map( map_item, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'map_style' });
	map.mapTypes.set('map_style', styledMapType);
	}
