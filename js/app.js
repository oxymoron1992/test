$(document).ready(function(){
			var lenghtCheck = $('.chek input[type=checkbox]').length, 
			rate = 100;
			var scale = function(){
				var numberCol = $( "input:checked" ).length,
				summ = (rate/lenghtCheck)*numberCol;
				summ2 = summ/100;
				$(".arrow").rotate(180*summ2);
				$('.number').text(summ+'%');
			}	
			$(".chek input[type=checkbox]").on("click",scale);	
			scale();
		});

		$(document).ready(function(){

			var canvas=document.getElementById('cnvs');
			var context = canvas.getContext("2d");                            
			var x = 150;                                         
			var y = 150;                                        
			var radius = 100;                                                  
			var startAngle = 1 * Math.PI;                                   
			var endAngle = 1.3 * Math.PI;
			var startAngle2 = 1.32 * Math.PI;                                   
			var endAngle2 = 1.7 * Math.PI;
			var startAngle3 = 1.72 * Math.PI;                                   
			var endAngle3 = 2 * Math.PI;                                    
			var counterClockwise = false;                                     
			var startAngle4 = 1.3 * Math.PI;
			var endAngle4 = 1.32 * Math.PI;
			var startAngle5 = 1.7 * Math.PI;
			var endAngle5 = 1.72 * Math.PI;
			                                                                   
			context.beginPath();                                              
			context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			context.lineWidth = 50;                                                                                              
			context.strokeStyle = "yellow";                                    
			context.stroke();

			context.beginPath();                                              
			context.arc(x, y, radius, startAngle2, endAngle2, counterClockwise);
			context.lineWidth = 50;                                                                                              
			context.strokeStyle = "green";                                    
			context.stroke();

			context.beginPath();                                              
			context.arc(x, y, radius, startAngle3, endAngle3, counterClockwise);
			context.lineWidth = 50;                                                                                              
			context.strokeStyle = "blue";                                    
			context.stroke();

			context.beginPath();                                              
			context.arc(x, y, radius, startAngle4, endAngle4, counterClockwise);
			context.lineWidth = 50;                                                                                              
			context.strokeStyle = "white";                                    
			context.stroke();

			context.beginPath();                                              
			context.arc(x, y, radius, startAngle5, endAngle5, counterClockwise);
			context.lineWidth = 50;                                                                                              
			context.strokeStyle = "white";                                    
			context.stroke();
		});