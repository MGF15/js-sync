

//add and remove
//srt only for now :/

const fs = require('fs');

var text = fs.readFileSync('g.ass','utf8')
// ssa /0:.*:\d+.\d+/g
var reg = /0:.*:\d+.\d+/g

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

ne = SyncAss(text,2100);
console.log(ne);