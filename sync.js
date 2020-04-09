
/*
FE-lab
reSyncme 
Copyright 2019-2020
MIT
*/

//add and remove

var reg = /.*:.*,\d+ --> \d.+/
var reg = /0:.*:\d+.\d+/g

function SyncSrt(srt,time){
	
	
	var x = srt.split('\n');
	var r = time;
	for ( i = 0 ; i < x.length ; i++){
	    z = x[i].match(reg) ? x[i].match(reg)[0] : '';
	    if (z != ''){
		    a = z.split(' --> ');
	            k = a[0].split(/[:,]/);
                    t = ((((k[0]*1*60*60)+(k[1]*1)*60+(k[2]*1)*1)*1000+(k[3]*1)));
	            o = a[1].split(/[:,]/);
                    g = ((((o[0]*1*60*60)+(o[1]*1)*60+(o[2]*1)*1)*1000+(o[3]*1)));
                    
	            //r = -1201; // time to be added
	            d = new Date(t);
	            u = new Date(g);
	            b = new Date(d.getTime() + r);
	            l = new Date(u.getTime() + r);
	            n = b.toJSON().slice(11,23).replace('.',',');
	            m = l.toJSON().slice(11,23).replace('.',',');
	            srt = srt.replace(z,n+' --> '+m);
            	    
		};
	}
	return srt;
};

function SyncAss(srt,time){
	
	
	var x = srt.split('\n');
	var r = time;
	for ( i = 0 ; i < x.length ; i++){
	    z = x[i].match(reg) ? x[i].match(reg)[0] : '';
	    if (z != ''){
		    a = z.split(',');
	            k = a[0].split(/[:.]/);
                    t = ((((k[0]*1*60*60)+(k[1]*1)*60+(k[2]*1)*1)*1000+(k[3]*10)));
	            o = a[1].split(/[:.]/);
                    g = ((((o[0]*1*60*60)+(o[1]*1)*60+(o[2]*1)*1)*1000+(o[3]*10))); 
	            d = new Date(t);
	            u = new Date(g);
	            b = new Date(d.getTime() + r);
	            l = new Date(u.getTime() + r);
	            n = b.toJSON().slice(12,22)//.replace('.',',');
	            m = l.toJSON().slice(12,22)//.replace('.',',');
	            srt = srt.replace(z,n+','+m);
            	    
		};
	}
	return srt;
};

