    <!--This program is for printing an Love You message on the screen for a loved one-->
    <!--This process involves HTML and JavaScript programming Language-->
    <!--The main aspects used in this are the JavaScript setTimeout() statement-->
    <h3>Hello My Queen, here is a Message for You:</h3>
    <br>
    <button onclick="timedLoveMessage()">Hello Love, Click to See Message</button>
    <!--Click the button to see the message displayed on the screen/ text-box-->
    <br>
    <br>
    <input type="text" id="lov" placeholder="Message Shows Here:">
    <!--In this section, there is defining the JavaScript script and creating the function timedLoveMessage-->
    <script>
        function timedLoveMessage(){
        var b = document.getElementById("lov");
        setTimeout(function(){b.value = "From Me, I Say:"}, 0); 	// The time is set to 0 seconds, i.e., 0 milliseconds
        setTimeout(function(){b.value = "I"}, 3000);                    // The time is set to 3 seconds, i.e., 3000 milliseconds
        setTimeout(function(){b.value = "Love"}, 6000);                 // The time is set to 6 seconds, i.e., 6000 milliseconds
        setTimeout(function() {b.value = "You"}, 9000);                 // The time is set to 9 seconds, i.e., 9000 milliseconds
        setTimeout(function() {b.value = "From"}, 12000);               // The time is set to 12 seconds, i.e., 12000 milliseconds
        setTimeout(function() {b.value = "The"}, 15000);                // The time is set to 15 seconds, i.e., 15000 milliseconds
        setTimeout(function() {b.value = "Bottom"}, 18000);             // The time is set to 18 seconds, i.e., 18000 milliseconds
        setTimeout(function() {b.value = "Of"}, 21000);                 // The time is set to 21 seconds, i.e., 21000 milliseconds
        setTimeout(function() {b.value = "My"}, 24000);                 // The time is set to 24 seconds, i.e., 24000 milliseconds
        setTimeout(function() {b.value = "Beautiful Heart"}, 27000);    // The time is set to 27 seconds, i.e., 27000 milliseconds
        }
