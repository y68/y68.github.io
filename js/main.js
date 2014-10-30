// function ShowDivInCenter()
// {
//     try
//     {
//         divWidth = 100;
//         divHeight = 100;
//         divId = 'yuri'; // id of the div that you want to show in center

//         // Get the x and y coordinates of the center in output browser's window 
//         var centerX, centerY;
//         if (self.innerHeight)
//         {
//             centerX = self.innerWidth;
//             centerY = self.innerHeight;
//         }
//         else if (document.documentElement && document.documentElement.clientHeight)
//         {
//             centerX = document.documentElement.clientWidth;
//             centerY = document.documentElement.clientHeight;
//         }
//         else if (document.body)
//         {
//             centerX = document.body.clientWidth;
//             centerY = document.body.clientHeight;
//         }
 
//         var offsetLeft = (centerX - divWidth) / 2;
//         var offsetTop = (centerY - divHeight) / 2;
 
//         // The initial width and height of the div can be set in the
//         // style sheet with display:none; divid is passed as an argument to // the function
//         var ojbDiv = document.getElementById(divId);
         
//         ojbDiv.style.position = 'absolute';
//         ojbDiv.style.top = offsetTop + 'px';
//         // ojbDiv.style.left = offsetLeft + 'px';
//         ojbDiv.style.display = "block";
//     }
//     catch (e) {}
// }
