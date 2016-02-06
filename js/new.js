function progress()
    {
        var i=0;
        var width= document.getElementById('bar-fill-two').parentNode.clientWidth;
		var width= document.getElementById('bar-fill').parentNode.clientWidth;
		var width= document.getElementById('bar-fill-three').parentNode.clientWidth;
        var id=setInterval(grow, 10)
        
        function grow()
        {
            if(i<width)
            {
                i+=1;
                if(!document.getElementById('bar-fill').setAttribute("style","width: "+i+"px;"))
                    document.getElementById('bar-fill').style.width = i;
                if(!document.getElementById('bar-fill-two').setAttribute("style","width: "+i+"px;"))
                    document.getElementById('bar-fill-two').style.width = i;
                if(!document.getElementById('bar-fill-three').setAttribute("style","width: "+i+"px;"))
                    document.getElementById('bar-fill-three').style.width = i;
                
            }
        }
    }