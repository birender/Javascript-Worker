<html>

<head>
    <title>Worker</title>

</head>

<body>
    <div id="result"></div>
    Sample Data
</body>
<script src="./jquery-3.6.0.js"></script> 
 
<script>
	var resultArr = [];
    var Workers = new Worker("worker.js");
    Workers.onmessage = function(event) {
        console.log( event );
        //console.log( resultArr );
    };
  console.log(resultArr);
     
</script>

</html>