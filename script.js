(function(){
    	
		//extraction de la valeur de la distance et l'afficher
		document.getElementById('convert').addEventListener('submit',function(event){
			event.preventDefault();
			var distance = parseFloat(document.getElementById('distance').value);
			//distance= parseInt(distance);
			//alert(distance);

			var answer=document.getElementById('answer');

			if(distance){
				//convert
				//display
				
				var conversion = (distance * 1.609344).toFixed(3);
				//var roundedconv=(Math.round(conversion*1000))/1000;
				//var roundedconv=conversion.toFixed(3);
				
				
				answer.innerHTML=`<h2>distance miles converts to ${conversion} kilometers </h2>`

			}
			else{
				//display error
				answer.innerHTML='<h2>please enter a number</h2>'
			}
		}); 
})();