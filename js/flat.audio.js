jQuery(document).ready(function() {
	
	new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_audio_1",
			cssSelectorAncestor: "#jp_container_audio_1"
			}, [
				{
					title:	"Where I End",
					artist:	"Big Hush",
					mp3:	"http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=1412f59de52b0f46e0f7be114f948e86&id=1465865254&stream=1&ts=1425943581.0"
				},
				{
					title:	"All the Joy",
					artist:	"Moonchild",
					mp3:	"https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=aad3d35033dd901e4299eec4176f900e&id=4202601355&stream=1&ts=1426044258.0"
				},
				{
					title:	"Junior June",
					artist:	"Redline Graffiti",
					mp3:	"https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=9e6a201daaa2380ce9c82a280621f18f&id=1804432014&stream=1&ts=1426044363.0"
				},
				{
					title:  "What are you saying",
					artist: "Young Rapids",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=83fc309074587551faecf5c6f7d041f7&id=94248986&stream=1&ts=1425955348.0"
				},
				{
					title:  "Medium Rare",
					artist: "Cigarette",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=1144302a8a8587e779caa9e4036b461e&id=2628448993&stream=1&ts=1425692001.0"
				},
				{
					title:  "Trees Walk",
					artist: "UVF Rays",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=21a43be96f56341e998273918f163057&id=1389455017&stream=1&ts=1425797879.0"
				},
				{
					title:  "Please Louise",
					artist: "Nighttime Adventure Society",
					mp3:    "https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=2b339da47c4279ab5c98e4d23421a4a5&id=4188101149&stream=1&ts=1426052528.0"
				},
				{
					title:  "Waste You",
					artist: "Cigarette",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=cd2547428bb30b2c6e7c5329130f96f5&id=2633905602&stream=1&ts=1425692001.0"
				},
				{
					title:  "Honey Haven't I",
					artist: "Louis Weeks",
					mp3:    "https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=300069d44059cae30d507e899fabefad&id=1947897822&stream=1&ts=1426053038.0"
				},
				{
					title:	"For Our Sake",
					artist:	"Stranger in the Alps",
					mp3:	"http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=dd64db83f953c709a5862e1ce9f0cfd9&id=2565753348&stream=1&ts=1425839656.0"
				},
				{
					title:  "Electric Fireside",
					artist: "UVF Rays",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=4c21f423e56410ba8e6e148ff544ae7f&id=226884098&stream=1&ts=1425797879.0"
				},
				{	
					title:  "Madonna of the Wasps",
					artist: "Big Hush",
					mp3:    "https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=4688bef4199ba69b0cbdde303c5bf07c&id=863788278&stream=1&ts=1426052744.0"
				},
				{
					title:  "I Can't Tell if All this is Real",
					artist: "UVF Rays",
					mp3:    "http://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=4c21f423e56410ba8e6e148ff544ae7f&id=226884098&stream=1&ts=1425797879.0"
				},
				{
					title:  "Calder",
					artist: "Louis Weeks",
					mp3:    "https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=3c9a63be645400585553a1f3cb3ed159&id=3868611384&stream=1&ts=1426053038.0"
				}
			], {
			swfPath:	"/Users/ndeprey/bday/js/jquery.jplayer.swf",
			playlistOptions: {
			    autoPlay: true,
			    enableRemoveControls: true,
			    shuffleOnLoop: true
			  	},
			supplied:	"mp3",
			wmode:		"window",
			wfPath: "js",
			supplied: "mp3,oga",
			cssSelectorAncestor: "#jp_container_audio_1",
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			remainingDuration: true,
			keyEnabled: true,
			keyBindings: {
				// Disable some of the default key controls
				loop: null,
				muted: null,
				volumeUp: null,
				volumeDown: null
			},
			
		});
		
		
	});
