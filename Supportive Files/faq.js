
        function show(id,n) {
            if(document.getElementById(id).style.display === 'none'){
            document.getElementsByClassName('arrow')[n].style.filter="invert(100%)"    
            document.getElementsByClassName('arrow')[n].style.width="25px"    
            document.getElementsByClassName('arrow')[n].src="Images/up.png"    
            document.getElementById(id).style.display = 'block'}
            else{
                document.getElementById(id).style.display = 'none';
                document.getElementsByClassName('arrow')[n].style.filter="invert(0%)" 
                document.getElementsByClassName('arrow')[n].style.width="40px"
                document.getElementsByClassName('arrow')[n].src="Images/down.png"       
            }
        }